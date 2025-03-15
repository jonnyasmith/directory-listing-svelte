// Tell SvelteKit to prerender all routes
export const prerender = true;

// Configure trailing slashes - 'never' removes trailing slashes from all URLs
export const trailingSlash = 'never';

import { config } from '$lib/config';
import type { LayoutLoad } from './$types';
import HomeIcon from '@lucide/svelte/icons/home';
// Global load function that runs for all routes
export const load: LayoutLoad = ({ url }) => {
	// Default title and description if page doesn't define its own
	const defaultData = {
		title: config.seoTitle,
		description: config.seoDescription,
		breadcrumbs: [{ label: 'Home', href: '/', icon: HomeIcon }]
	};

	// For about page, customize the title and description
	if (url.pathname === '/about') {
		return {
			...defaultData,
			title: `About ${config.siteName} - ${config.seoTitle}`,
			description: `Learn more about ${config.siteName}, your comprehensive directory for finding local ${config.itemPlural}.`,
			breadcrumbs: [...defaultData.breadcrumbs, { label: 'About', href: '/about' }]
		};
	}

	// Return default data for other pages that don't define their own
	return defaultData;
};
