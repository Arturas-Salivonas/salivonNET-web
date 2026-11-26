import type { Handle } from '@sveltejs/kit/hooks';

/**
 * Runs at build time, while the pages are prerendered.
 *
 * The page is readable before any script runs, so its scripts are fetched at low priority:
 * the HTML, the fonts and the portrait get the connection first.
 */
export const handle: Handle = ({ event, resolve }) =>
	resolve(event, {
		transformPageChunk: ({ html }) =>
			html.replaceAll('rel="modulepreload"', 'rel="modulepreload" fetchpriority="low"')
	});
