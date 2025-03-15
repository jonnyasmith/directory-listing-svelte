import { businesses, localities } from '$lib/data/data';
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

	// Find the locality (which includes its region)
	const locality = localities.find(
		(l) => l.slug === slugifiedLocality && slugify(l.region.slug) === slugifiedRegion
	);

	if (!locality) {
		throw error(404, 'Location not found');
	}

	// Get businesses in this locality
	const businessesInLocality = businesses.filter(
		(business) =>
			business.addressObj.addressRegion === locality.region.name &&
			business.addressObj.addressLocality === locality.name
	);

	// Get other localities in this region
	const otherLocalities = localities.filter(
		(l) => l.region.name === locality.region.name && l.name !== locality.name
	);

	return {
		locality,
		businesses: businessesInLocality,
		otherLocalities,
		title: `${locality.name}, ${locality.region.name} Business Directory`,
		description: `Browse businesses in ${locality.name}, ${locality.region.name}`
	};
};
