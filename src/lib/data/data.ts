import type { Business, Region, Locality } from '$lib/types';
import { getStateAbbreviation, slugify } from '$lib/utils';
import data from './data.json';

// Transform and sort business data
// - Formats raw JSON data into Business objects
// - Adds slugs for URLs and formatted address information
// - Sorts alphabetically by business name
export const businesses: Business[] = data
	.map((business) => ({
		id: business.id,
		name: business.name,
		slug: slugify(business.name),
		category: business.category,
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
		openingHours: business.openingHours,
		priceRange: business.priceRange
	}))
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

// Generate final locality list with region associations
// - Creates entries for each unique city-state combination
// - Adds URL-friendly slugs for cities
// - Links each city to its corresponding region object
// - Implements two-level sort:
//   1. Primary sort by city name
//   2. Secondary sort by state name (for cities in multiple states)
export const localities: Locality[] = Array.from(localityMap)
	.flatMap(([locality, regionSet]) =>
		Array.from(regionSet).map((region) => ({
			name: locality,
			slug: slugify(locality),
			region: regions.find((r) => r.name === region)!
		}))
	)
	.sort((a, b) => {
		// First sort by locality name
		const localityCompare = a.name.localeCompare(b.name);
		// If locality names are the same, sort by region name
		return localityCompare !== 0 ? localityCompare : a.region.name.localeCompare(b.region.name);
	});
