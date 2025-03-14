export interface Address {
	streetAddress: string;
	addressLocality: string; // City
	addressRegion: string; // State/Province
	addressRegionShort?: string; // State/Province abbreviation (e.g., CA, NY)
	postalCode?: string;
	addressCountry?: string;
}

export interface Business {
	id: number;
	name: string;
	slug: string; // URL-friendly version of the name
	category: string;
	address: string; // Legacy field for backward compatibility
	addressObj: Address; // Structured address object
	phone: string;
	website?: string;
	openingHours?: {
		dayOfWeek: string[];
		opens: string;
		closes: string;
	};
	priceRange?: string;
}
