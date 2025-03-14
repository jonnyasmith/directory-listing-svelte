import { businesses } from '$lib/data';
import { config } from '$lib/config';

export interface City {
	locality: string;
	region: string;
	regionShort: string;
}

export function load() {
	// Extract all unique cities from the businesses data
	const cityMap = new Map<string, City>();

	businesses.forEach((business) => {
		const key = `${business.addressObj.addressLocality}-${business.addressObj.addressRegion}`;
		if (!cityMap.has(key)) {
			cityMap.set(key, {
				locality: business.addressObj.addressLocality,
				region: business.addressObj.addressRegion,
				regionShort: business.addressObj.addressRegionShort!
			});
		}
	});

	const cities = Array.from(cityMap.values());

	// Sort cities by popularity (for now just alphabetically)
	cities.sort((a, b) => a.locality.localeCompare(b.locality));

	return {
		cities,
		title: config.seoTitle,
		description: config.seoDescription
	};
}
