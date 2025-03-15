import { regions, localities } from '$lib/data/data';
import { error } from '@sveltejs/kit';
import type { PageLoad, EntryGenerator } from './$types';

// Define which slugs should be prerendered
export const entries: EntryGenerator = () => {
	return regions.map((region) => ({
		region: region.slug
	}));
};

export const load: PageLoad = ({ params }) => {
	const slugifiedRegion = params.region;

	// Find the region
	const region = regions.find((r) => r.slug === slugifiedRegion);

	if (!region) {
		throw error(404, 'Region not found');
	}

	// Get localities in this region
	const localitiesInRegion = localities.filter((l) => l.region.name === region.name);

	// Get other regions (excluding the current one)
	const otherRegions = regions.filter((r) => r.slug !== region.slug);

	return {
		region,
		localities: localitiesInRegion,
		otherRegions,
		title: `${region.name} Local Business Directory`,
		description: `Browse businesses in ${region.name}`
	};
};
