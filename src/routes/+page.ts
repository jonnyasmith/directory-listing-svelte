import { localities } from '$lib/data/data';
import { config } from '$lib/config';

export function load() {
	const cities = localities;

	// Sort cities by popularity (for now just alphabetically)
	cities.sort((a, b) => a.name.localeCompare(b.name));

	return {
		cities,
		title: config.seoTitle,
		description: config.seoDescription
	};
}
