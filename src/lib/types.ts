export interface Address {
	streetAddress: string;
	addressLocality: string; // City
	addressLocalitySlug: string; // City slug
	addressRegion: string; // State/Province
	addressRegionSlug: string; // State/Province
	addressRegionShort?: string; // State/Province abbreviation (e.g., CA, NY)
	postalCode?: string;
	addressCountry?: string;
}

export interface Business {
	id: number;
	name: string;
	slug: string; // URL-friendly version of the name
	category: string;
	schemaType?: string; // Optional specific Schema.org business type (e.g., "Restaurant", "Store")
	address: string; // Legacy field for backward compatibility
	addressObj: Address; // Structured address object
	phone: string;
	website?: string;
	images?: string[]; // Array of image URLs for the business
	geo?: {
		latitude: number;
		longitude: number;
	}; // Geo coordinates for the business
	openingHours?: {
		dayOfWeek: string[];
		opens: string;
		closes: string;
	};
	priceRange?: string;
}

export interface Region {
	name: string;
	shortName: string;
	slug: string;
}

export interface Locality {
	name: string;
	slug: string;
	region: Region;
}

/**
 * Represents a breadcrumb item in the navigation trail
 */
export interface BreadcrumbItem {
	/** The display text for the breadcrumb item */
	label: string;

	/** The URL the breadcrumb item links to */
	href: string;

	/** Optional icon component to display with the breadcrumb (typically used for Home) */
	icon?: any; // Using any to accommodate Lucide icon components
}
