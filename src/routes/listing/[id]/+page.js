// Import the business data
import { businesses } from '$lib/data';

// Define which route IDs should be prerendered
export function entries() {
	// Generate entries for all businesses
	return businesses.map((business) => ({
		id: business.id.toString()
	}));
}

// This will be executed at build time for static generation
export function load({ params }) {
	const id = params.id;
	const business = businesses.find((b) => b.id.toString() === id);

	if (!business) {
		return {
			status: 404,
			error: new Error(`Business with ID ${id} not found`)
		};
	}

	// Return data with SEO-friendly metadata
	return {
		id,
		business,
		title: `${business.name} - ${business.category} in ${business.address.split(',')[0]}`,
		description: `Contact ${business.name}, a ${business.category.toLowerCase()} business located at ${business.address}. Call ${business.phone} for more information.`
	};
}
