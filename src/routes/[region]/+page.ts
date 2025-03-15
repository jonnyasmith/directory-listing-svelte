import { regions, localities } from '$lib/data/data';
import { error } from '@sveltejs/kit';
import type { PageLoad, EntryGenerator } from './$types';
import HomeIcon from '@lucide/svelte/icons/home';
import type { BreadcrumbItem } from '$lib/types';

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

	// Create breadcrumb data
	const breadcrumbs: BreadcrumbItem[] = [
		{ label: 'Home', href: '/', icon: HomeIcon },
		{ label: region.name, href: `/${region.slug}` }
	];

	return {
		region,
		localities: localitiesInRegion,
		otherRegions,
		breadcrumbs,
		title: `${region.name} Local Business Directory`,
		description: `Browse businesses in ${region.name}`
	};
};
