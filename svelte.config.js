import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		// For GitHub Pages deployment - sets the base path to the repository name
		paths: {
			base: process.env.BASE_PATH || ''
		},
		// Static adapter configuration
		adapter: adapter({
			pages: 'build', // Where static files go
			assets: 'build',
			fallback: '404.html', // GitHub Pages uses 404.html as the fallback for SPAs
			precompress: true // Gzip files for faster delivery
		}),
		prerender: {
			entries: ['*'], // Prerender all routes
			handleHttpError: ({ path, referrer, message }) => {
				// Log detailed information about the error to help with debugging
				console.warn(`Prerender error: ${message}`);
				console.warn(`Path: ${path}`);
				console.warn(`Referrer: ${referrer || 'unknown'}`);
			}
		}
	}
};

export default config;
