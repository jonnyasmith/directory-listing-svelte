import { regions } from '$lib/data/data';
import { config } from '$lib/config';
import HomeIcon from '@lucide/svelte/icons/home';
import type { BreadcrumbItem } from '$lib/types';

export function load() {
	// Create breadcrumb data
	const breadcrumbs: BreadcrumbItem[] = [
		{ label: 'Home', href: '/', icon: HomeIcon },
		{ label: config.navLocationLabel }
	];

	return {
		regions,
		breadcrumbs,
		title: `Find ${config.itemPlural} By State | ${config.siteName}`,
		description: `Browse ${config.itemPlural} by state across the United States`
	};
}
