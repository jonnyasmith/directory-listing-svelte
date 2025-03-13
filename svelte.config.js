import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'build', // Where static files go
			assets: 'build',
			fallback: '404.html', // Set to '404.html' for better SEO than SPA fallback
			precompress: true // Gzip files for faster delivery
		}),
		prerender: {
			entries: ['*'] // Prerender all routes
		}
	}
};

export default config;
