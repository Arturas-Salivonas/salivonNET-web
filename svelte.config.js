import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			// Output directory for static files
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),

		// Performance optimizations
		prerender: {
			entries: ['*'],
			handleHttpError: 'warn',
			handleMissingId: 'warn'
		},

		// Paths configuration for shared hosting
		paths: {
			base: '', // Change to '/subfolder' if deploying to a subdirectory
		}
	}
};

export default config;
