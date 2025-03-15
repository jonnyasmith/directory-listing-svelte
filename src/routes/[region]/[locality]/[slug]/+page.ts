import type { EntryGenerator, PageLoad } from './$types';
import { businesses } from '$lib/data/data';
import { error } from '@sveltejs/kit';
import type { BreadcrumbItem } from '$lib/types';

// Define which slugs should be prerendered
export const entries: EntryGenerator = () => {
	return businesses.map((business) => ({
		slug: business.slug,
		region: business.addressObj.addressRegionSlug,
		locality: business.addressObj.addressLocalitySlug
	}));
};

// This will be executed at build time for static generation
export const load: PageLoad = ({ params }) => {
	const { slug, region: slugifiedRegion, locality: slugifiedLocality } = params;

	// Find business matching slug, region, and locality
	const business = businesses.find(
		(b) =>
			b.slug === slug &&
			b.addressObj.addressRegionSlug === slugifiedRegion &&
			b.addressObj.addressLocalitySlug === slugifiedLocality
	);

	if (!business) {
		throw error(404, 'Business not found');
	}

	const breadcrumbs: BreadcrumbItem[] = [
		{ label: 'Home', href: '/' },
		{ label: business.addressObj.addressRegion, href: `/${business.addressObj.addressRegionSlug}` },
		{
			label: business.addressObj.addressLocality,
			href: `/${business.addressObj.addressRegionSlug}/${business.addressObj.addressLocalitySlug}`
		},
		{ label: business.name }
	];

	return {
		business,
		breadcrumbs,
		title: `${business.name} - ${business.category} in ${business.addressObj.addressLocality}, ${business.addressObj.addressRegion}`,
		description: `Contact ${business.name}, a ${business.category.toLowerCase()} business located at ${business.address}. Call ${business.phone} for more information.`
	};
};
