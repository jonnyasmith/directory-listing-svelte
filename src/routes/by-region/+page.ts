import { businesses } from '$lib/data';
import { config } from '$lib/config';

export function load() {
	// Extract all unique regions from the businesses data
	const regionSet = new Set<string>();

	businesses.forEach((business) => {
		regionSet.add(business.addressObj.addressRegion);
	});

	const regions = Array.from(regionSet);

	// Sort regions alphabetically
	regions.sort((a, b) => a.localeCompare(b));

	return {
		regions,
		title: `Find ${config.itemPlural} By State | ${config.siteName}`,
		description: `Browse ${config.itemPlural} by state across the United States`
	};
}
