import type { Business, Region, Locality } from '$lib/types';
import { getStateAbbreviation, slugify } from '$lib/utils';
import data from './data.json';

// Mapping from business category to Schema.org business type
const categoryToSchemaType: Record<string, string> = {
	Restaurant: 'Restaurant',
	Cafe: 'CafeOrCoffeeShop',
	Retail: 'Store',
	Fitness: 'ExerciseGym',
	Spa: 'DaySpa',
	Hotel: 'Hotel',
	Bar: 'BarOrPub',
	Salon: 'BeautySalon'
	// Add more mappings as needed
};

// Transform and sort business data
// - Formats raw JSON data into Business objects
// - Adds slugs for URLs and formatted address information
// - Sorts alphabetically by business name
export const businesses: Business[] = data
	.map((business) => {
		// Get schema type based on category or fall back to LocalBusiness
		const schemaType = categoryToSchemaType[business.category] || 'LocalBusiness';

		// Generate a placeholder image based on business name and category
		const placeholderImage = `https://placehold.co/600x400?text=${encodeURIComponent(business.name)}`;

		// Generate mock geo coordinates (in a real app, these would come from a geocoding service)
		// These are random values for demonstration purposes
		const latitude = 35 + Math.random() * 10; // Random lat between 35-45
		const longitude = -110 + Math.random() * 15; // Random lng between -110 and -95

		return {
			id: business.id,
			name: business.name,
			slug: slugify(business.name),
			category: business.category,
			schemaType,
			address: business.address,
			addressObj: {
				streetAddress: business.addressObj.streetAddress,
				addressLocality: business.addressObj.addressLocality,
				addressLocalitySlug: slugify(business.addressObj.addressLocality),
				addressRegion: business.addressObj.addressRegion,
				addressRegionSlug: slugify(business.addressObj.addressRegion),
				addressRegionShort: getStateAbbreviation(business.addressObj.addressRegion),
				postalCode: business.addressObj.postalCode,
				addressCountry: business.addressObj.addressCountry
			},
			phone: business.phone,
			website: business.website,
			// Add new fields
			images: [
				placeholderImage,
				`${placeholderImage}&text=interior`,
				`${placeholderImage}&text=exterior`
			],
			geo: {
				latitude,
				longitude
			},
			openingHours: business.openingHours,
			priceRange: business.priceRange
		};
	})
	.sort((a, b) => a.name.localeCompare(b.name));

// Extract and format unique regions (states)
// - Creates a unique list of states from business addresses
// - Adds state abbreviations and URL slugs
// - Sorts alphabetically by state name
export const regions: Region[] = [...new Set(businesses.map((b) => b.addressObj.addressRegion))]
	.map((region) => ({
		name: region,
		shortName: getStateAbbreviation(region),
		slug: slugify(region)
	}))
	.sort((a, b) => a.name.localeCompare(b.name));

// Create a mapping of cities to their states
// - Uses Map for efficient key-value storage
// - Uses Set to store unique states for each city
// - Handles cities that exist in multiple states
const localityMap = new Map<string, Set<string>>();
businesses.forEach((b) => {
	const locality = b.addressObj.addressLocality;
	const region = b.addressObj.addressRegion;
	if (!localityMap.has(locality)) {
		localityMap.set(locality, new Set());
	}
	localityMap.get(locality)!.add(region);
});

// Extract and format unique localities (cities)
// - Creates locality objects with references to their regions
// - Handles cities that exist in multiple states
// - Sorts alphabetically by locality name
export const localities: Locality[] = [];
localityMap.forEach((regionNames, localityName) => {
	// For each region where this locality exists
	regionNames.forEach((regionName) => {
		// Find the full region object
		const region = regions.find((r) => r.name === regionName);
		if (region) {
			localities.push({
				name: localityName,
				slug: slugify(localityName),
				region
			});
		}
	});
});
localities.sort((a, b) => a.name.localeCompare(b.name));

// Create a list of places (combined localities and regions)
// for the search functionality
export const places = [
	...localities.map((l) => ({
		id: `${l.slug}-${l.region.slug}`,
		name: `${l.name}, ${l.region.shortName}`,
		href: `/${l.region.slug}/${l.slug}`
	})),
	...regions.map((r) => ({
		id: r.slug,
		name: r.name,
		href: `/${r.slug}`
	}))
];
