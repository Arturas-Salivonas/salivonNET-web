import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit({
			// The whole site is prerendered to plain files in `build/`. `404.html` is the page
			// the server shows for anything that does not exist (see static/.htaccess).
			adapter: adapter({ fallback: '404.html' }),
			// One page and about 9 KB of CSS: put it in the HTML, so the first paint needs no
			// second trip to the server.
			inlineStyleThreshold: Infinity,
			compilerOptions: {
				// Runes mode for our own code; dependencies keep whatever mode they ship with.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			}
		})
	]
});
