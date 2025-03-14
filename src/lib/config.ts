export interface DirectoryConfig {
	// Core site identity
	siteName: string;

	// Item terminology (business, dog park, etc.)
	itemSingular: string;
	itemPlural: string;

	// Hero section
	heroTitle: string;
	heroSubtitle: string;
	heroDescription1: string;
	heroDescription2: string;

	// Locations section
	locationSectionTitle: string;

	// Navigation
	navLocationLabel: string;
	navAboutLabel: string;

	// SEO
	seoTitle: string;
	seoDescription: string;
}

// Default configuration for a business directory
export const config: DirectoryConfig = {
	siteName: 'Local Business Directory',

	itemSingular: 'business',
	itemPlural: 'businesses',

	heroTitle: 'Find the Best',
	heroSubtitle: 'Local Businesses Near You',
	heroDescription1: 'Tired of wasting time searching for quality local businesses? We get it.',
	heroDescription2:
		"That's why we've mapped out every detail for local businesses across America. From cafes to retail shops, service providers and more. Stop guessing and find the perfect business for your needs.",

	locationSectionTitle: 'Businesses in Popular Cities',

	navLocationLabel: 'Find Businesses By State',
	navAboutLabel: 'About Us',

	seoTitle: 'Local Business Directory - Find Businesses Near You',
	seoDescription:
		'Browse our comprehensive directory of local businesses including cafes, retail stores, and fitness centers.'
};

// Example alternative configuration for a dog park directory
// Uncomment and modify to switch themes
/*
export const config: DirectoryConfig = {
  siteName: "Dog Parks Directory",
  
  itemSingular: "dog park",
  itemPlural: "dog parks",
  
  heroTitle: "Find the Best",
  heroSubtitle: "Dog Parks Near You",
  heroDescription1: "Tired of wasting time at dog parks that don't cut it? We get it.",
  heroDescription2: "That's why we've mapped out every little detail for over 4800 dog parks across America —from space to run, water fountains, and separate areas for big and small dogs, to indoor parks and more. Stop guessing and find the perfect spot for you and your pup.",
  
  locationSectionTitle: "Dog Parks in Popular Cities",
  
  navLocationLabel: "Find Dog Parks By State",
  navAboutLabel: "About Us",
  
  seoTitle: "Dog Parks Directory - Find Dog Parks Near You",
  seoDescription: "Browse our comprehensive directory of dog parks with details on amenities, size, and features for every dog park."
};
*/
