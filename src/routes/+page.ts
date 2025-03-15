import { localities } from '$lib/data/data';
import { config } from '$lib/config';

export function load() {
	return {
		localities,
		title: config.seoTitle,
		description: config.seoDescription
	};
}
