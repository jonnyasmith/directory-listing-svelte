import { config } from '$lib/config';

/**
 * Generates Website schema for JSON-LD
 * @param currentUrl - Current page URL
 * @returns Website schema object
 */
export function generateWebsiteJsonLd(currentUrl: string) {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: config.siteName,
		url: currentUrl,
		potentialAction: {
			'@type': 'SearchAction',
			target: `${new URL('/', currentUrl).origin}/search?q={search_term_string}`,
			'query-input': 'required name=search_term_string'
		}
	};
}

/**
 * Generates Organization schema for JSON-LD
 * @param currentUrl - Current page URL
 * @returns Organization schema object
 */
export function generateOrganizationJsonLd(currentUrl: string) {
	const baseUrl = new URL('/', currentUrl).origin;

	return {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: config.siteName,
		url: baseUrl,
		logo: `${baseUrl}/logo.png`,
		// Add your social links here if available
		sameAs: [
			// 'https://facebook.com/yourbusiness',
			// 'https://twitter.com/yourbusiness',
			// 'https://linkedin.com/company/yourbusiness'
		]
	};
}

interface BreadcrumbItem {
	name: string;
	url: string;
}

/**
 * Generates BreadcrumbList schema for JSON-LD
 * @param items - Array of breadcrumb items with name and URL
 * @returns BreadcrumbList schema object
 */
export function generateBreadcrumbJsonLd(items: BreadcrumbItem[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: items.map((item, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: item.name,
			item: item.url
		}))
	};
}

interface FAQItem {
	question: string;
	answer: string;
}

/**
 * Generates FAQ schema for JSON-LD
 * @param faqs - Array of FAQ items with question and answer
 * @returns FAQPage schema object
 */
export function generateFAQJsonLd(faqs: FAQItem[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: faqs.map((faq) => ({
			'@type': 'Question',
			name: faq.question,
			acceptedAnswer: {
				'@type': 'Answer',
				text: faq.answer
			}
		}))
	};
}
