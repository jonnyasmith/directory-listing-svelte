import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'build', // Where static files go
			assets: 'build',
			fallback: '404.html', // Set to 'index.html' for SPA fallback
			precompress: true // Gzip files for faster delivery
		}),
		paths: {
			base: process.env.BASE_PATH || ''
		}
	}
};

export default config;
