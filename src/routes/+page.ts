import { localities } from '$lib/data/data';
import { config } from '$lib/config';
import HomeIcon from '@lucide/svelte/icons/home';
import type { BreadcrumbItem } from '$lib/types';

export function load() {
	// Create breadcrumb data - for the homepage, we just show Home
	const breadcrumbs: BreadcrumbItem[] = [{ label: 'Home', href: '/', icon: HomeIcon }];

	return {
		localities,
		breadcrumbs,
		title: config.seoTitle,
		description: config.seoDescription
	};
}
