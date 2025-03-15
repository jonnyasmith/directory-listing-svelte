import { regions } from '$lib/data/data';
import { config } from '$lib/config';

export function load() {
	return {
		regions,
		title: `Find ${config.itemPlural} By State | ${config.siteName}`,
		description: `Browse ${config.itemPlural} by state across the United States`
	};
}
