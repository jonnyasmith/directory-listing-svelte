import type { Business } from '$lib/types';

// Generate a URL-friendly slug from a business name
function slugify(text: string): string {
	return text
		.toString()
		.toLowerCase()
		.replace(/\s+/g, '-') // Replace spaces with -
		.replace(/[^\w\-]+/g, '') // Remove all non-word chars
		.replace(/\-\-+/g, '-') // Replace multiple - with single -
		.replace(/^-+/, '') // Trim - from start
		.replace(/-+$/, ''); // Trim - from end
}

export const businesses: Business[] = [
	{
		id: 1,
		name: "Joe's Coffee",
		slug: slugify("Joe's Coffee"),
		category: 'Cafe',
		address: '123 Main St',
		phone: '555-1234'
	},
	{
		id: 2,
		name: 'Tech Store',
		slug: slugify('Tech Store'),
		category: 'Retail',
		address: '456 Oak Ave',
		phone: '555-5678'
	},
	{
		id: 3,
		name: 'Green Gym',
		slug: slugify('Green Gym'),
		category: 'Fitness',
		address: '789 Pine Rd',
		phone: '555-9012'
	}
];
