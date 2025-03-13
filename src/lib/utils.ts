import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { Business, Address } from './types';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function generateLocalBusinessJsonLd(business: Business) {
	// Create address object for JSON-LD
	let addressForJsonLd: any = {
		'@type': 'PostalAddress',
		streetAddress: business.address // Fallback to legacy address
	};

	// Use structured address if available
	if (business.addressObj) {
		addressForJsonLd = {
			'@type': 'PostalAddress',
			streetAddress: business.addressObj.streetAddress,
			addressLocality: business.addressObj.addressLocality
		};

		// Add optional address fields if they exist
		if (business.addressObj.addressRegion) {
			addressForJsonLd.addressRegion = business.addressObj.addressRegion;
		}

		if (business.addressObj.postalCode) {
			addressForJsonLd.postalCode = business.addressObj.postalCode;
		}

		if (business.addressObj.addressCountry) {
			addressForJsonLd.addressCountry = business.addressObj.addressCountry;
		}
	}

	// Build the JSON-LD object
	const jsonLd: any = {
		'@context': 'https://schema.org',
		'@type': 'LocalBusiness',
		name: business.name,
		description: `${business.name} is a ${business.category.toLowerCase()} located at ${business.address}`,
		address: addressForJsonLd,
		telephone: business.phone
	};

	// Add area served based on address
	const areaName = business.addressObj?.addressLocality || business.address.split(',')[0];
	jsonLd.areaServed = {
		'@type': 'City',
		name: areaName
	};

	// Add website if available
	if (business.website) {
		jsonLd.url = business.website;
	}

	// Add price range if available, otherwise use default
	jsonLd.priceRange = business.priceRange || '$$';

	// Add opening hours if available, otherwise use default
	if (business.openingHours) {
		jsonLd.openingHoursSpecification = {
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: business.openingHours.dayOfWeek,
			opens: business.openingHours.opens,
			closes: business.openingHours.closes
		};
	} else {
		jsonLd.openingHoursSpecification = {
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
			opens: '09:00',
			closes: '17:00'
		};
	}

	return jsonLd;
}
