import type { Business } from '$lib/types';
import { getStateAbbreviation, slugify } from '$lib/utils';

export const businesses: Business[] = [
	// Illinois - Springfield
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
			addressRegionShort: getStateAbbreviation('Illinois'),
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
			addressRegionShort: getStateAbbreviation('Illinois'),
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
			addressRegionShort: getStateAbbreviation('Illinois'),
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
	},
	// Illinois - Chicago
	{
		id: 4,
		name: 'Windy City Pizza',
		slug: slugify('Windy City Pizza'),
		category: 'Restaurant',
		address: '234 Michigan Ave, Chicago, Illinois 60601',
		addressObj: {
			streetAddress: '234 Michigan Ave',
			addressLocality: 'Chicago',
			addressRegion: 'Illinois',
			addressRegionShort: getStateAbbreviation('Illinois'),
			postalCode: '60601',
			addressCountry: 'US'
		},
		phone: '555-2345',
		website: 'https://windycitypizza.example.com',
		priceRange: '$$',
		openingHours: {
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
			opens: '11:00',
			closes: '23:00'
		}
	},
	// California - Los Angeles
	{
		id: 5,
		name: 'Sunset Yoga Studio',
		slug: slugify('Sunset Yoga Studio'),
		category: 'Fitness',
		address: '567 Sunset Blvd, Los Angeles, California 90028',
		addressObj: {
			streetAddress: '567 Sunset Blvd',
			addressLocality: 'Los Angeles',
			addressRegion: 'California',
			addressRegionShort: getStateAbbreviation('California'),
			postalCode: '90028',
			addressCountry: 'US'
		},
		phone: '555-3456',
		website: 'https://sunsetyoga.example.com',
		priceRange: '$$$',
		openingHours: {
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			opens: '07:00',
			closes: '20:00'
		}
	},
	// California - San Francisco
	{
		id: 6,
		name: 'Golden Gate Books',
		slug: slugify('Golden Gate Books'),
		category: 'Retail',
		address: '890 Market St, San Francisco, California 94102',
		addressObj: {
			streetAddress: '890 Market St',
			addressLocality: 'San Francisco',
			addressRegion: 'California',
			addressRegionShort: getStateAbbreviation('California'),
			postalCode: '94102',
			addressCountry: 'US'
		},
		phone: '555-4567',
		website: 'https://goldengatebooks.example.com',
		priceRange: '$$',
		openingHours: {
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
			opens: '09:00',
			closes: '21:00'
		}
	},
	// New York - New York City
	{
		id: 7,
		name: 'Central Park Cafe',
		slug: slugify('Central Park Cafe'),
		category: 'Cafe',
		address: '123 Fifth Ave, New York, New York 10001',
		addressObj: {
			streetAddress: '123 Fifth Ave',
			addressLocality: 'New York',
			addressRegion: 'New York',
			addressRegionShort: getStateAbbreviation('New York'),
			postalCode: '10001',
			addressCountry: 'US'
		},
		phone: '555-5678',
		website: 'https://centralparkcafe.example.com',
		priceRange: '$$$',
		openingHours: {
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
			opens: '07:00',
			closes: '22:00'
		}
	},
	// New York - Buffalo
	{
		id: 8,
		name: 'Niagara Fitness Center',
		slug: slugify('Niagara Fitness Center'),
		category: 'Fitness',
		address: '456 Main St, Buffalo, New York 14202',
		addressObj: {
			streetAddress: '456 Main St',
			addressLocality: 'Buffalo',
			addressRegion: 'New York',
			addressRegionShort: getStateAbbreviation('New York'),
			postalCode: '14202',
			addressCountry: 'US'
		},
		phone: '555-6789',
		website: 'https://niagarafitness.example.com',
		priceRange: '$$',
		openingHours: {
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			opens: '05:00',
			closes: '23:00'
		}
	},
	// Texas - Houston
	{
		id: 9,
		name: 'Space City Tech',
		slug: slugify('Space City Tech'),
		category: 'Retail',
		address: '789 Texas Ave, Houston, Texas 77002',
		addressObj: {
			streetAddress: '789 Texas Ave',
			addressLocality: 'Houston',
			addressRegion: 'Texas',
			addressRegionShort: getStateAbbreviation('Texas'),
			postalCode: '77002',
			addressCountry: 'US'
		},
		phone: '555-7890',
		website: 'https://spacecitytech.example.com',
		priceRange: '$$$',
		openingHours: {
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			opens: '10:00',
			closes: '20:00'
		}
	},
	// Texas - Austin
	{
		id: 10,
		name: 'Live Music Bar',
		slug: slugify('Live Music Bar'),
		category: 'Entertainment',
		address: '321 Sixth St, Austin, Texas 78701',
		addressObj: {
			streetAddress: '321 Sixth St',
			addressLocality: 'Austin',
			addressRegion: 'Texas',
			addressRegionShort: getStateAbbreviation('Texas'),
			postalCode: '78701',
			addressCountry: 'US'
		},
		phone: '555-8901',
		website: 'https://livemusicbar.example.com',
		priceRange: '$$',
		openingHours: {
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			opens: '16:00',
			closes: '02:00'
		}
	},
	// Florida - Miami
	{
		id: 11,
		name: 'Beach Yoga Studio',
		slug: slugify('Beach Yoga Studio'),
		category: 'Fitness',
		address: '123 Ocean Dr, Miami, Florida 33139',
		addressObj: {
			streetAddress: '123 Ocean Dr',
			addressLocality: 'Miami',
			addressRegion: 'Florida',
			addressRegionShort: getStateAbbreviation('Florida'),
			postalCode: '33139',
			addressCountry: 'US'
		},
		phone: '555-9012',
		website: 'https://beachyoga.example.com',
		priceRange: '$$$',
		openingHours: {
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			opens: '06:00',
			closes: '20:00'
		}
	},
	// Florida - Orlando
	{
		id: 12,
		name: 'Theme Park Souvenirs',
		slug: slugify('Theme Park Souvenirs'),
		category: 'Retail',
		address: '456 International Dr, Orlando, Florida 32819',
		addressObj: {
			streetAddress: '456 International Dr',
			addressLocality: 'Orlando',
			addressRegion: 'Florida',
			addressRegionShort: getStateAbbreviation('Florida'),
			postalCode: '32819',
			addressCountry: 'US'
		},
		phone: '555-0123',
		website: 'https://themeparksouvenirs.example.com',
		priceRange: '$$',
		openingHours: {
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
			opens: '09:00',
			closes: '23:00'
		}
	},
	// Washington - Seattle
	{
		id: 13,
		name: 'Rain City Coffee',
		slug: slugify('Rain City Coffee'),
		category: 'Cafe',
		address: '789 Pike St, Seattle, Washington 98101',
		addressObj: {
			streetAddress: '789 Pike St',
			addressLocality: 'Seattle',
			addressRegion: 'Washington',
			addressRegionShort: getStateAbbreviation('Washington'),
			postalCode: '98101',
			addressCountry: 'US'
		},
		phone: '555-1234',
		website: 'https://raincitycoffee.example.com',
		priceRange: '$$',
		openingHours: {
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
			opens: '06:00',
			closes: '20:00'
		}
	},
	// Washington - Spokane
	{
		id: 14,
		name: 'Riverfront Restaurant',
		slug: slugify('Riverfront Restaurant'),
		category: 'Restaurant',
		address: '321 Riverfront Ave, Spokane, Washington 99201',
		addressObj: {
			streetAddress: '321 Riverfront Ave',
			addressLocality: 'Spokane',
			addressRegion: 'Washington',
			addressRegionShort: getStateAbbreviation('Washington'),
			postalCode: '99201',
			addressCountry: 'US'
		},
		phone: '555-2345',
		website: 'https://riverfrontrestaurant.example.com',
		priceRange: '$$$',
		openingHours: {
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			opens: '11:00',
			closes: '22:00'
		}
	},
	// Colorado - Denver
	{
		id: 15,
		name: 'Mountain Sports Shop',
		slug: slugify('Mountain Sports Shop'),
		category: 'Retail',
		address: '123 Larimer St, Denver, Colorado 80202',
		addressObj: {
			streetAddress: '123 Larimer St',
			addressLocality: 'Denver',
			addressRegion: 'Colorado',
			addressRegionShort: getStateAbbreviation('Colorado'),
			postalCode: '80202',
			addressCountry: 'US'
		},
		phone: '555-3456',
		website: 'https://mountainsports.example.com',
		priceRange: '$$$',
		openingHours: {
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
			opens: '09:00',
			closes: '21:00'
		}
	},
	// Colorado - Boulder
	{
		id: 16,
		name: 'Boulder Yoga Center',
		slug: slugify('Boulder Yoga Center'),
		category: 'Fitness',
		address: '456 Pearl St, Boulder, Colorado 80302',
		addressObj: {
			streetAddress: '456 Pearl St',
			addressLocality: 'Boulder',
			addressRegion: 'Colorado',
			addressRegionShort: getStateAbbreviation('Colorado'),
			postalCode: '80302',
			addressCountry: 'US'
		},
		phone: '555-4567',
		website: 'https://boulderyoga.example.com',
		priceRange: '$$',
		openingHours: {
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			opens: '07:00',
			closes: '20:00'
		}
	},
	// Arizona - Phoenix
	{
		id: 17,
		name: 'Desert Cafe',
		slug: slugify('Desert Cafe'),
		category: 'Cafe',
		address: '789 Central Ave, Phoenix, Arizona 85004',
		addressObj: {
			streetAddress: '789 Central Ave',
			addressLocality: 'Phoenix',
			addressRegion: 'Arizona',
			addressRegionShort: getStateAbbreviation('Arizona'),
			postalCode: '85004',
			addressCountry: 'US'
		},
		phone: '555-5678',
		website: 'https://desertcafe.example.com',
		priceRange: '$$',
		openingHours: {
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
			opens: '06:00',
			closes: '22:00'
		}
	},
	// Arizona - Tucson
	{
		id: 18,
		name: 'Sonoran Restaurant',
		slug: slugify('Sonoran Restaurant'),
		category: 'Restaurant',
		address: '321 Congress St, Tucson, Arizona 85701',
		addressObj: {
			streetAddress: '321 Congress St',
			addressLocality: 'Tucson',
			addressRegion: 'Arizona',
			addressRegionShort: getStateAbbreviation('Arizona'),
			postalCode: '85701',
			addressCountry: 'US'
		},
		phone: '555-6789',
		website: 'https://sonoranrestaurant.example.com',
		priceRange: '$$$',
		openingHours: {
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			opens: '11:00',
			closes: '23:00'
		}
	},
	// Oregon - Portland
	{
		id: 19,
		name: 'Portland Bookstore',
		slug: slugify('Portland Bookstore'),
		category: 'Retail',
		address: '123 Burnside St, Portland, Oregon 97209',
		addressObj: {
			streetAddress: '123 Burnside St',
			addressLocality: 'Portland',
			addressRegion: 'Oregon',
			addressRegionShort: getStateAbbreviation('Oregon'),
			postalCode: '97209',
			addressCountry: 'US'
		},
		phone: '555-7890',
		website: 'https://portlandbookstore.example.com',
		priceRange: '$$',
		openingHours: {
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
			opens: '09:00',
			closes: '21:00'
		}
	},
	// Oregon - Eugene
	{
		id: 20,
		name: 'Eugene Fitness Center',
		slug: slugify('Eugene Fitness Center'),
		category: 'Fitness',
		address: '456 Willamette St, Eugene, Oregon 97401',
		addressObj: {
			streetAddress: '456 Willamette St',
			addressLocality: 'Eugene',
			addressRegion: 'Oregon',
			addressRegionShort: getStateAbbreviation('Oregon'),
			postalCode: '97401',
			addressCountry: 'US'
		},
		phone: '555-8901',
		website: 'https://eugenefitness.example.com',
		priceRange: '$$',
		openingHours: {
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			opens: '05:00',
			closes: '23:00'
		}
	},
	// Nevada - Las Vegas
	{
		id: 21,
		name: 'Strip Entertainment',
		slug: slugify('Strip Entertainment'),
		category: 'Entertainment',
		address: '789 Las Vegas Blvd, Las Vegas, Nevada 89109',
		addressObj: {
			streetAddress: '789 Las Vegas Blvd',
			addressLocality: 'Las Vegas',
			addressRegion: 'Nevada',
			addressRegionShort: getStateAbbreviation('Nevada'),
			postalCode: '89109',
			addressCountry: 'US'
		},
		phone: '555-9012',
		website: 'https://stripentertainment.example.com',
		priceRange: '$$$',
		openingHours: {
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
			opens: '20:00',
			closes: '04:00'
		}
	},
	// Nevada - Reno
	{
		id: 22,
		name: 'Reno Sports Bar',
		slug: slugify('Reno Sports Bar'),
		category: 'Entertainment',
		address: '321 Virginia St, Reno, Nevada 89501',
		addressObj: {
			streetAddress: '321 Virginia St',
			addressLocality: 'Reno',
			addressRegion: 'Nevada',
			addressRegionShort: getStateAbbreviation('Nevada'),
			postalCode: '89501',
			addressCountry: 'US'
		},
		phone: '555-0123',
		website: 'https://renosportsbar.example.com',
		priceRange: '$$',
		openingHours: {
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
			opens: '11:00',
			closes: '02:00'
		}
	},
	// Utah - Salt Lake City
	{
		id: 23,
		name: 'Mountain View Cafe',
		slug: slugify('Mountain View Cafe'),
		category: 'Cafe',
		address: '123 State St, Salt Lake City, Utah 84111',
		addressObj: {
			streetAddress: '123 State St',
			addressLocality: 'Salt Lake City',
			addressRegion: 'Utah',
			addressRegionShort: getStateAbbreviation('Utah'),
			postalCode: '84111',
			addressCountry: 'US'
		},
		phone: '555-1234',
		website: 'https://mountainviewcafe.example.com',
		priceRange: '$$',
		openingHours: {
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			opens: '07:00',
			closes: '19:00'
		}
	},
	// Utah - Provo
	{
		id: 24,
		name: 'Provo Tech Store',
		slug: slugify('Provo Tech Store'),
		category: 'Retail',
		address: '456 Center St, Provo, Utah 84601',
		addressObj: {
			streetAddress: '456 Center St',
			addressLocality: 'Provo',
			addressRegion: 'Utah',
			addressRegionShort: getStateAbbreviation('Utah'),
			postalCode: '84601',
			addressCountry: 'US'
		},
		phone: '555-2345',
		website: 'https://provotech.example.com',
		priceRange: '$$$',
		openingHours: {
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			opens: '10:00',
			closes: '20:00'
		}
	},
	// Idaho - Boise
	{
		id: 25,
		name: 'Boise Fitness Center',
		slug: slugify('Boise Fitness Center'),
		category: 'Fitness',
		address: '789 Main St, Boise, Idaho 83702',
		addressObj: {
			streetAddress: '789 Main St',
			addressLocality: 'Boise',
			addressRegion: 'Idaho',
			addressRegionShort: getStateAbbreviation('Idaho'),
			postalCode: '83702',
			addressCountry: 'US'
		},
		phone: '555-3456',
		website: 'https://boisefitness.example.com',
		priceRange: '$$',
		openingHours: {
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			opens: '05:00',
			closes: '22:00'
		}
	},
	// Idaho - Idaho Falls
	{
		id: 26,
		name: 'Falls Cafe',
		slug: slugify('Falls Cafe'),
		category: 'Cafe',
		address: '321 Broadway St, Idaho Falls, Idaho 83402',
		addressObj: {
			streetAddress: '321 Broadway St',
			addressLocality: 'Idaho Falls',
			addressRegion: 'Idaho',
			addressRegionShort: getStateAbbreviation('Idaho'),
			postalCode: '83402',
			addressCountry: 'US'
		},
		phone: '555-4567',
		website: 'https://fallscafe.example.com',
		priceRange: '$$',
		openingHours: {
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
			opens: '06:00',
			closes: '20:00'
		}
	},
	// Montana - Billings
	{
		id: 27,
		name: 'Billings Bookstore',
		slug: slugify('Billings Bookstore'),
		category: 'Retail',
		address: '123 Montana Ave, Billings, Montana 59101',
		addressObj: {
			streetAddress: '123 Montana Ave',
			addressLocality: 'Billings',
			addressRegion: 'Montana',
			addressRegionShort: getStateAbbreviation('Montana'),
			postalCode: '59101',
			addressCountry: 'US'
		},
		phone: '555-5678',
		website: 'https://billingsbookstore.example.com',
		priceRange: '$$',
		openingHours: {
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			opens: '09:00',
			closes: '21:00'
		}
	},
	// Montana - Missoula
	{
		id: 28,
		name: 'Missoula Yoga Studio',
		slug: slugify('Missoula Yoga Studio'),
		category: 'Fitness',
		address: '456 Higgins Ave, Missoula, Montana 59802',
		addressObj: {
			streetAddress: '456 Higgins Ave',
			addressLocality: 'Missoula',
			addressRegion: 'Montana',
			addressRegionShort: getStateAbbreviation('Montana'),
			postalCode: '59802',
			addressCountry: 'US'
		},
		phone: '555-6789',
		website: 'https://missoulayoga.example.com',
		priceRange: '$$',
		openingHours: {
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			opens: '07:00',
			closes: '20:00'
		}
	},
	// Wyoming - Cheyenne
	{
		id: 29,
		name: 'Cheyenne Restaurant',
		slug: slugify('Cheyenne Restaurant'),
		category: 'Restaurant',
		address: '789 Lincolnway, Cheyenne, Wyoming 82001',
		addressObj: {
			streetAddress: '789 Lincolnway',
			addressLocality: 'Cheyenne',
			addressRegion: 'Wyoming',
			addressRegionShort: getStateAbbreviation('Wyoming'),
			postalCode: '82001',
			addressCountry: 'US'
		},
		phone: '555-7890',
		website: 'https://cheyennerestaurant.example.com',
		priceRange: '$$$',
		openingHours: {
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			opens: '11:00',
			closes: '22:00'
		}
	},
	// Wyoming - Casper
	{
		id: 30,
		name: 'Casper Sports Shop',
		slug: slugify('Casper Sports Shop'),
		category: 'Retail',
		address: '321 Center St, Casper, Wyoming 82601',
		addressObj: {
			streetAddress: '321 Center St',
			addressLocality: 'Casper',
			addressRegion: 'Wyoming',
			addressRegionShort: getStateAbbreviation('Wyoming'),
			postalCode: '82601',
			addressCountry: 'US'
		},
		phone: '555-8901',
		website: 'https://caspersports.example.com',
		priceRange: '$$',
		openingHours: {
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			opens: '09:00',
			closes: '21:00'
		}
	},
	// New Mexico - Albuquerque
	{
		id: 31,
		name: 'Albuquerque Cafe',
		slug: slugify('Albuquerque Cafe'),
		category: 'Cafe',
		address: '123 Central Ave, Albuquerque, New Mexico 87102',
		addressObj: {
			streetAddress: '123 Central Ave',
			addressLocality: 'Albuquerque',
			addressRegion: 'New Mexico',
			addressRegionShort: getStateAbbreviation('New Mexico'),
			postalCode: '87102',
			addressCountry: 'US'
		},
		phone: '555-9012',
		website: 'https://albuquerquecafe.example.com',
		priceRange: '$$',
		openingHours: {
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
			opens: '06:00',
			closes: '20:00'
		}
	},
	// New Mexico - Santa Fe
	{
		id: 32,
		name: 'Santa Fe Art Gallery',
		slug: slugify('Santa Fe Art Gallery'),
		category: 'Retail',
		address: '456 Canyon Rd, Santa Fe, New Mexico 87501',
		addressObj: {
			streetAddress: '456 Canyon Rd',
			addressLocality: 'Santa Fe',
			addressRegion: 'New Mexico',
			addressRegionShort: getStateAbbreviation('New Mexico'),
			postalCode: '87501',
			addressCountry: 'US'
		},
		phone: '555-0123',
		website: 'https://santafeart.example.com',
		priceRange: '$$$',
		openingHours: {
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			opens: '10:00',
			closes: '18:00'
		}
	},
	// Oklahoma - Oklahoma City
	{
		id: 33,
		name: 'OKC Fitness Center',
		slug: slugify('OKC Fitness Center'),
		category: 'Fitness',
		address: '789 Broadway Ave, Oklahoma City, Oklahoma 73102',
		addressObj: {
			streetAddress: '789 Broadway Ave',
			addressLocality: 'Oklahoma City',
			addressRegion: 'Oklahoma',
			addressRegionShort: getStateAbbreviation('Oklahoma'),
			postalCode: '73102',
			addressCountry: 'US'
		},
		phone: '555-1234',
		website: 'https://okcfitness.example.com',
		priceRange: '$$',
		openingHours: {
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			opens: '05:00',
			closes: '23:00'
		}
	},
	// Oklahoma - Tulsa
	{
		id: 34,
		name: 'Tulsa Tech Store',
		slug: slugify('Tulsa Tech Store'),
		category: 'Retail',
		address: '321 Main St, Tulsa, Oklahoma 74103',
		addressObj: {
			streetAddress: '321 Main St',
			addressLocality: 'Tulsa',
			addressRegion: 'Oklahoma',
			addressRegionShort: getStateAbbreviation('Oklahoma'),
			postalCode: '74103',
			addressCountry: 'US'
		},
		phone: '555-2345',
		website: 'https://tulsatech.example.com',
		priceRange: '$$$',
		openingHours: {
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			opens: '10:00',
			closes: '20:00'
		}
	},
	// Kansas - Wichita
	{
		id: 35,
		name: 'Wichita Coffee House',
		slug: slugify('Wichita Coffee House'),
		category: 'Cafe',
		address: '123 Douglas Ave, Wichita, Kansas 67202',
		addressObj: {
			streetAddress: '123 Douglas Ave',
			addressLocality: 'Wichita',
			addressRegion: 'Kansas',
			addressRegionShort: getStateAbbreviation('Kansas'),
			postalCode: '67202',
			addressCountry: 'US'
		},
		phone: '555-3456',
		website: 'https://wichitacoffee.example.com',
		priceRange: '$$',
		openingHours: {
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
			opens: '06:00',
			closes: '22:00'
		}
	},
	// Kansas - Overland Park
	{
		id: 36,
		name: 'Overland Park Restaurant',
		slug: slugify('Overland Park Restaurant'),
		category: 'Restaurant',
		address: '456 Metcalf Ave, Overland Park, Kansas 66212',
		addressObj: {
			streetAddress: '456 Metcalf Ave',
			addressLocality: 'Overland Park',
			addressRegion: 'Kansas',
			addressRegionShort: getStateAbbreviation('Kansas'),
			postalCode: '66212',
			addressCountry: 'US'
		},
		phone: '555-4567',
		website: 'https://overlandparkrestaurant.example.com',
		priceRange: '$$$',
		openingHours: {
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			opens: '11:00',
			closes: '23:00'
		}
	},
	// Nebraska - Omaha
	{
		id: 37,
		name: 'Omaha Bookstore',
		slug: slugify('Omaha Bookstore'),
		category: 'Retail',
		address: '789 Dodge St, Omaha, Nebraska 68102',
		addressObj: {
			streetAddress: '789 Dodge St',
			addressLocality: 'Omaha',
			addressRegion: 'Nebraska',
			addressRegionShort: getStateAbbreviation('Nebraska'),
			postalCode: '68102',
			addressCountry: 'US'
		},
		phone: '555-5678',
		website: 'https://omahabookstore.example.com',
		priceRange: '$$',
		openingHours: {
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
			opens: '09:00',
			closes: '21:00'
		}
	},
	// Nebraska - Lincoln
	{
		id: 38,
		name: 'Lincoln Yoga Studio',
		slug: slugify('Lincoln Yoga Studio'),
		category: 'Fitness',
		address: '321 O St, Lincoln, Nebraska 68508',
		addressObj: {
			streetAddress: '321 O St',
			addressLocality: 'Lincoln',
			addressRegion: 'Nebraska',
			addressRegionShort: getStateAbbreviation('Nebraska'),
			postalCode: '68508',
			addressCountry: 'US'
		},
		phone: '555-6789',
		website: 'https://lincolnyoga.example.com',
		priceRange: '$$',
		openingHours: {
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			opens: '07:00',
			closes: '20:00'
		}
	},
	// Iowa - Des Moines
	{
		id: 39,
		name: 'Des Moines Cafe',
		slug: slugify('Des Moines Cafe'),
		category: 'Cafe',
		address: '123 Grand Ave, Des Moines, Iowa 50309',
		addressObj: {
			streetAddress: '123 Grand Ave',
			addressLocality: 'Des Moines',
			addressRegion: 'Iowa',
			addressRegionShort: getStateAbbreviation('Iowa'),
			postalCode: '50309',
			addressCountry: 'US'
		},
		phone: '555-7890',
		website: 'https://desmoinescafe.example.com',
		priceRange: '$$',
		openingHours: {
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
			opens: '06:00',
			closes: '22:00'
		}
	},
	// Iowa - Cedar Rapids
	{
		id: 40,
		name: 'Cedar Rapids Tech Store',
		slug: slugify('Cedar Rapids Tech Store'),
		category: 'Retail',
		address: '456 First Ave, Cedar Rapids, Iowa 52401',
		addressObj: {
			streetAddress: '456 First Ave',
			addressLocality: 'Cedar Rapids',
			addressRegion: 'Iowa',
			addressRegionShort: getStateAbbreviation('Iowa'),
			postalCode: '52401',
			addressCountry: 'US'
		},
		phone: '555-8901',
		website: 'https://cedarrapidstech.example.com',
		priceRange: '$$$',
		openingHours: {
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			opens: '10:00',
			closes: '20:00'
		}
	},
	// Missouri - Kansas City
	{
		id: 41,
		name: 'KC Jazz Club',
		slug: slugify('KC Jazz Club'),
		category: 'Entertainment',
		address: '789 18th St, Kansas City, Missouri 64108',
		addressObj: {
			streetAddress: '789 18th St',
			addressLocality: 'Kansas City',
			addressRegion: 'Missouri',
			addressRegionShort: getStateAbbreviation('Missouri'),
			postalCode: '64108',
			addressCountry: 'US'
		},
		phone: '555-9012',
		website: 'https://kcjazz.example.com',
		priceRange: '$$$',
		openingHours: {
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			opens: '19:00',
			closes: '02:00'
		}
	},
	// Missouri - St. Louis
	{
		id: 42,
		name: 'St. Louis Fitness Center',
		slug: slugify('St. Louis Fitness Center'),
		category: 'Fitness',
		address: '321 Market St, St. Louis, Missouri 63102',
		addressObj: {
			streetAddress: '321 Market St',
			addressLocality: 'St. Louis',
			addressRegion: 'Missouri',
			addressRegionShort: getStateAbbreviation('Missouri'),
			postalCode: '63102',
			addressCountry: 'US'
		},
		phone: '555-0123',
		website: 'https://stlouisfitness.example.com',
		priceRange: '$$',
		openingHours: {
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			opens: '05:00',
			closes: '23:00'
		}
	},
	// Arkansas - Little Rock
	{
		id: 43,
		name: 'Little Rock Bookstore',
		slug: slugify('Little Rock Bookstore'),
		category: 'Retail',
		address: '123 Main St, Little Rock, Arkansas 72201',
		addressObj: {
			streetAddress: '123 Main St',
			addressLocality: 'Little Rock',
			addressRegion: 'Arkansas',
			addressRegionShort: getStateAbbreviation('Arkansas'),
			postalCode: '72201',
			addressCountry: 'US'
		},
		phone: '555-1234',
		website: 'https://littlerockbookstore.example.com',
		priceRange: '$$',
		openingHours: {
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			opens: '09:00',
			closes: '21:00'
		}
	},
	// Arkansas - Fayetteville
	{
		id: 44,
		name: 'Fayetteville Cafe',
		slug: slugify('Fayetteville Cafe'),
		category: 'Cafe',
		address: '456 Dickson St, Fayetteville, Arkansas 72701',
		addressObj: {
			streetAddress: '456 Dickson St',
			addressLocality: 'Fayetteville',
			addressRegion: 'Arkansas',
			addressRegionShort: getStateAbbreviation('Arkansas'),
			postalCode: '72701',
			addressCountry: 'US'
		},
		phone: '555-2345',
		website: 'https://fayettevillecafe.example.com',
		priceRange: '$$',
		openingHours: {
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
			opens: '06:00',
			closes: '22:00'
		}
	},
	// Louisiana - New Orleans
	{
		id: 45,
		name: 'French Quarter Restaurant',
		slug: slugify('French Quarter Restaurant'),
		category: 'Restaurant',
		address: '789 Bourbon St, New Orleans, Louisiana 70116',
		addressObj: {
			streetAddress: '789 Bourbon St',
			addressLocality: 'New Orleans',
			addressRegion: 'Louisiana',
			addressRegionShort: getStateAbbreviation('Louisiana'),
			postalCode: '70116',
			addressCountry: 'US'
		},
		phone: '555-3456',
		website: 'https://frenchquarterrestaurant.example.com',
		priceRange: '$$$',
		openingHours: {
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
			opens: '11:00',
			closes: '23:00'
		}
	},
	// Louisiana - Baton Rouge
	{
		id: 46,
		name: 'Baton Rouge Fitness',
		slug: slugify('Baton Rouge Fitness'),
		category: 'Fitness',
		address: '321 Third St, Baton Rouge, Louisiana 70801',
		addressObj: {
			streetAddress: '321 Third St',
			addressLocality: 'Baton Rouge',
			addressRegion: 'Louisiana',
			addressRegionShort: getStateAbbreviation('Louisiana'),
			postalCode: '70801',
			addressCountry: 'US'
		},
		phone: '555-4567',
		website: 'https://batonrougefitness.example.com',
		priceRange: '$$',
		openingHours: {
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			opens: '05:00',
			closes: '22:00'
		}
	},
	// Mississippi - Jackson
	{
		id: 47,
		name: 'Jackson Tech Store',
		slug: slugify('Jackson Tech Store'),
		category: 'Retail',
		address: '123 Capitol St, Jackson, Mississippi 39201',
		addressObj: {
			streetAddress: '123 Capitol St',
			addressLocality: 'Jackson',
			addressRegion: 'Mississippi',
			addressRegionShort: getStateAbbreviation('Mississippi'),
			postalCode: '39201',
			addressCountry: 'US'
		},
		phone: '555-5678',
		website: 'https://jacksontech.example.com',
		priceRange: '$$$',
		openingHours: {
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			opens: '10:00',
			closes: '20:00'
		}
	},
	// Mississippi - Gulfport
	{
		id: 48,
		name: 'Gulfport Cafe',
		slug: slugify('Gulfport Cafe'),
		category: 'Cafe',
		address: '456 Beach Blvd, Gulfport, Mississippi 39501',
		addressObj: {
			streetAddress: '456 Beach Blvd',
			addressLocality: 'Gulfport',
			addressRegion: 'Mississippi',
			addressRegionShort: getStateAbbreviation('Mississippi'),
			postalCode: '39501',
			addressCountry: 'US'
		},
		phone: '555-6789',
		website: 'https://gulfportcafe.example.com',
		priceRange: '$$',
		openingHours: {
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
			opens: '06:00',
			closes: '22:00'
		}
	},
	// Alabama - Birmingham
	{
		id: 49,
		name: 'Birmingham Yoga Studio',
		slug: slugify('Birmingham Yoga Studio'),
		category: 'Fitness',
		address: '789 20th St, Birmingham, Alabama 35203',
		addressObj: {
			streetAddress: '789 20th St',
			addressLocality: 'Birmingham',
			addressRegion: 'Alabama',
			addressRegionShort: getStateAbbreviation('Alabama'),
			postalCode: '35203',
			addressCountry: 'US'
		},
		phone: '555-7890',
		website: 'https://birminghamyoga.example.com',
		priceRange: '$$',
		openingHours: {
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			opens: '07:00',
			closes: '20:00'
		}
	},
	// Alabama - Mobile
	{
		id: 50,
		name: 'Mobile Restaurant',
		slug: slugify('Mobile Restaurant'),
		category: 'Restaurant',
		address: '321 Dauphin St, Mobile, Alabama 36602',
		addressObj: {
			streetAddress: '321 Dauphin St',
			addressLocality: 'Mobile',
			addressRegion: 'Alabama',
			addressRegionShort: getStateAbbreviation('Alabama'),
			postalCode: '36602',
			addressCountry: 'US'
		},
		phone: '555-8901',
		website: 'https://mobilerestaurant.example.com',
		priceRange: '$$$',
		openingHours: {
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			opens: '11:00',
			closes: '23:00'
		}
	}
];
