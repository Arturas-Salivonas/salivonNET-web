import type { ClientInit } from '@sveltejs/kit/hooks';

/** A page opened in a background tab never paints, so the wait has a limit. */
const GIVE_UP_AFTER_MS = 3000;

/**
 * The page arrives fully rendered, so the visitor should see it before the app wakes up.
 * SvelteKit waits for `init` before it hydrates: this resolves once the first frame is on
 * screen, which keeps the scripts out of the way of the first paint.
 */
export const init: ClientInit = () => {
	if (!PerformanceObserver.supportedEntryTypes.includes('paint')) return;

	return new Promise<void>((resolve) => {
		const timer = setTimeout(resolve, GIVE_UP_AFTER_MS);

		new PerformanceObserver((entries, observer) => {
			if (entries.getEntriesByName('first-contentful-paint').length === 0) return;

			observer.disconnect();
			clearTimeout(timer);
			resolve();
		}).observe({ type: 'paint', buffered: true });
	});
};
