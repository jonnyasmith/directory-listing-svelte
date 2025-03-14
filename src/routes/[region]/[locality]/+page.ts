import { businesses } from '$lib/data';
import { error } from '@sveltejs/kit';
import type { PageLoad, EntryGenerator } from './$types';
import { slugify } from '$lib/utils';

export const entries: EntryGenerator = () => {
	// Get all combinations of regions and localities
	const entries: { region: string; locality: string }[] = [];

	// Create a set to track unique combinations
	const seen = new Set<string>();

	businesses.forEach((business) => {
		const region = business.addressObj.addressRegion;
		const locality = business.addressObj.addressLocality;
		const key = `${slugify(region)}-${slugify(locality)}`;

		if (!seen.has(key)) {
			seen.add(key);
			entries.push({
				region: slugify(region),
				locality: slugify(locality)
			});
		}
	});

	return entries;
};

export const load: PageLoad = ({ params }) => {
	const slugifiedRegion = params.region;
	const slugifiedLocality = params.locality;

	// Find the actual region and locality names by matching the slugified versions
	const allRegions = [...new Set(businesses.map((business) => business.addressObj.addressRegion))];
	const region = allRegions.find((r) => slugify(r) === slugifiedRegion);

	if (!region) {
		throw error(404, 'Region not found');
	}

	const businessesInRegion = businesses.filter(
		(business) => business.addressObj.addressRegion === region
	);

	const allLocalities = [
		...new Set(businessesInRegion.map((business) => business.addressObj.addressLocality))
	];
	const locality = allLocalities.find((l) => slugify(l) === slugifiedLocality);

	if (!locality) {
		throw error(404, 'Locality not found');
	}

	const businessesInLocality = businesses.filter(
		(business) =>
			business.addressObj.addressRegion === region &&
			business.addressObj.addressLocality === locality
	);

	// Get all other localities in this region (excluding the current one)
	const otherLocalities = allLocalities.filter((l) => l !== locality);

	// Sort other localities alphabetically
	otherLocalities.sort((a, b) => a.localeCompare(b));

	return {
		region,
		locality,
		businesses: businessesInLocality,
		otherLocalities,
		title: `${locality}, ${region} Business Directory`,
		description: `Browse businesses in ${locality}, ${region}`
	};
};
