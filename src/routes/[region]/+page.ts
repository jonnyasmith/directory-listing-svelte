import { businesses } from '$lib/data/data';
import { error } from '@sveltejs/kit';
import type { PageLoad, EntryGenerator } from './$types';
import { slugify } from '$lib/utils';

export interface Region {
	region: string;
	regionSlug: string;
}

export interface Locality {
	locality: string;
	localitySlug: string;
}

// Define which slugs should be prerendered
export const entries: EntryGenerator = () => {
	// Get all unique regions
	const regions = [...new Set(businesses.map((business) => business.addressObj.addressRegionSlug))];

	return regions.map((region) => ({
		region: region
	}));
};

export const load: PageLoad = ({ params }) => {
	const slugifiedRegion = params.region;

	// Find the actual region name by matching the slugified version
	const allRegions = [...new Set(businesses.map((business) => business.addressObj.addressRegion))];
	const region = allRegions.find((r) => slugify(r) === slugifiedRegion);

	if (!region) {
		throw error(404, 'Region not found');
	}

	const businessesInRegion = businesses.filter(
		(business) => business.addressObj.addressRegion === region
	);

	const localities = [
		...new Set(businessesInRegion.map((business) => business.addressObj.addressLocality))
	];

	// Get all other regions (excluding the current one)
	const otherRegions = allRegions.filter((r) => r !== region);

	// Sort other regions alphabetically
	otherRegions.sort((a, b) => a.localeCompare(b));

	return {
		region,
		localities,
		otherRegions,
		title: `${region} Local Business Directory`,
		description: `Browse businesses in ${region}`
	};
};
