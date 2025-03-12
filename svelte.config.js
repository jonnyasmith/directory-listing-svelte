import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'build', // Where static files go
			assets: 'build',
			fallback: undefined, // No SPA fallback for now
			precompress: true // Gzip files for faster delivery
		})
	}
};

export default config;
