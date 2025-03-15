import { config } from '$lib/config';
import HomeIcon from '@lucide/svelte/icons/home';
import type { BreadcrumbItem } from '$lib/types';

export function load() {
	// Create breadcrumb data
	const breadcrumbs: BreadcrumbItem[] = [
		{ label: 'Home', href: '/', icon: HomeIcon },
		{ label: config.navAboutLabel, href: '/about' }
	];

	return {
		breadcrumbs,
		title: `About ${config.siteName}`,
		description: `Learn more about ${config.siteName} and how we help you find local ${config.itemPlural}`
	};
}
