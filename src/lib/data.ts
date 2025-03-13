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
		address: '123 Main St, Springfield, Illinois 62701',
		addressObj: {
			streetAddress: '123 Main St',
			addressLocality: 'Springfield',
			addressRegion: 'Illinois',
			postalCode: '62701',
			addressCountry: 'US'
		},
		phone: '555-1234',
		website: 'https://joescoffee.example.com',
		priceRange: '$$',
		openingHours: {
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			opens: '07:00',
			closes: '19:00'
		}
	},
	{
		id: 2,
		name: 'Tech Store',
		slug: slugify('Tech Store'),
		category: 'Retail',
		address: '456 Oak Ave, Springfield, Illinois 62702',
		addressObj: {
			streetAddress: '456 Oak Ave',
			addressLocality: 'Springfield',
			addressRegion: 'Illinois',
			postalCode: '62702',
			addressCountry: 'US'
		},
		phone: '555-5678',
		website: 'https://techstore.example.com',
		priceRange: '$$$',
		openingHours: {
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
			opens: '10:00',
			closes: '21:00'
		}
	},
	{
		id: 3,
		name: 'Green Gym',
		slug: slugify('Green Gym'),
		category: 'Fitness',
		address: '789 Pine Rd, Springfield, Illinois 62703',
		addressObj: {
			streetAddress: '789 Pine Rd',
			addressLocality: 'Springfield',
			addressRegion: 'Illinois',
			postalCode: '62703',
			addressCountry: 'US'
		},
		phone: '555-9012',
		website: 'https://greengym.example.com',
		priceRange: '$$$',
		openingHours: {
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			opens: '06:00',
			closes: '22:00'
		}
	}
];
