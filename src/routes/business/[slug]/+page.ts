import type { EntryGenerator, PageLoad } from './$types';
import { businesses } from '$lib/data';
import { error } from '@sveltejs/kit';

// Define which slugs should be prerendered
export const entries: EntryGenerator = () => {
	return businesses.map((business) => ({
		slug: business.slug
	}));
};

// This will be executed at build time for static generation
export const load: PageLoad = ({ params }) => {
	const { slug } = params;
	const business = businesses.find((b) => b.slug === slug);

	if (!business) {
		// Use the error helper function instead of returning an object with status
		throw error(404, `Business ${slug} not found`);
	}

	return {
		business,
		title: `${business.name} - ${business.category} in ${business.address.split(',')[0]}`,
		description: `Contact ${business.name}, a ${business.category.toLowerCase()} business located at ${business.address}. Call ${business.phone} for more information.`
	};
};
