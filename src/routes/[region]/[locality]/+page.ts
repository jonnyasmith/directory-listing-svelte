import { businesses } from '$lib/data';
import { error } from '@sveltejs/kit';
import type { PageLoad, EntryGenerator } from './$types';
import { slugify } from '$lib/utils';

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

	return {
		region,
		locality,
		businesses: businessesInLocality,
		title: `${locality}, ${region} Business Directory`,
		description: `Browse businesses in ${locality}, ${region}`
	};
};
