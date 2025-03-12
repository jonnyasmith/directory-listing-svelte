// Import the business data
import { businesses } from '$lib/data';

// Define which slugs should be prerendered
export function entries() {
	// Generate entries for all businesses using their slugs
	return businesses.map((business) => ({
		slug: business.slug
	}));
}

// This will be executed at build time for static generation
export function load({ params }) {
	const { slug } = params;
	const business = businesses.find((b) => b.slug === slug);

	if (!business) {
		return {
			status: 404,
			error: new Error(`Business ${slug} not found`)
		};
	}

	// Return data with SEO-friendly metadata
	return {
		business,
		title: `${business.name} - ${business.category} in ${business.address.split(',')[0]}`,
		description: `Contact ${business.name}, a ${business.category.toLowerCase()} business located at ${business.address}. Call ${business.phone} for more information.`
	};
}
