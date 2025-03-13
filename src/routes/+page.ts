import { businesses } from '$lib/data';

export interface City {
	locality: string;
	region: string;
}

export function load() {
	// Create array of unique city objects with locality and region fields
	const cities = businesses.map((business) => ({
		locality: business.addressObj.addressLocality,
		region: business.addressObj.addressRegionShort
	}));

	// Filter for unique combinations
	const uniqueCities = Array.from(
		new Map(cities.map((city) => [`${city.locality}-${city.region}`, city])).values()
	) as City[];

	return {
		cities: uniqueCities,
		title: 'Local Business Directory - Find Businesses Near You',
		description:
			'Browse our comprehensive directory of local businesses including cafes, retail stores, and fitness centers.'
	};
}
