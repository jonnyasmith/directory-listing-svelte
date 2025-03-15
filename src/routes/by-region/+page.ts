import { businesses } from '$lib/data/data';
import { config } from '$lib/config';

export interface Region {
	region: string;
	regionSlug: string;
}

export function load() {
	// Extract all unique regions from the businesses data
	const regionMap = new Map<string, Region>();

	businesses.forEach((business) => {
		const key = business.addressObj.addressRegion;
		if (!regionMap.has(key)) {
			regionMap.set(key, {
				region: business.addressObj.addressRegion,
				regionSlug: business.addressObj.addressRegionSlug
			});
		}
	});

	const regions = Array.from(regionMap.values());

	// Sort regions alphabetically
	regions.sort((a, b) => a.region.localeCompare(b.region));

	return {
		regions,
		title: `Find ${config.itemPlural} By State | ${config.siteName}`,
		description: `Browse ${config.itemPlural} by state across the United States`
	};
}
