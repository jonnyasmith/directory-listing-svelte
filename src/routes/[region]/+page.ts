import { businesses, regions, localities } from '$lib/data/data';
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
	const region = regions.find((r) => slugify(r.name) === slugifiedRegion);

	if (!region) {
		throw error(404, 'Region not found');
	}

	// Get all other regions (excluding the current one)
	const otherRegions = regions.filter((r) => r.name !== region.name);

	// Sort other regions alphabetically
	otherRegions.sort((a, b) => a.name.localeCompare(b.name));

	return {
		region,
		localities,
		otherRegions,
		title: `${region} Local Business Directory`,
		description: `Browse businesses in ${region}`
	};
};
