import type { Action } from 'svelte/action';

interface RevealOptions {
	threshold?: number;
	rootMargin?: string;
	once?: boolean;
}

const defaultOptions: Required<RevealOptions> = {
	threshold: 0.18,
	rootMargin: '0px 0px -12% 0px',
	once: true
};

export const reveal: Action<HTMLElement, RevealOptions> = (node, options = {}) => {
	const settings = { ...defaultOptions, ...options };

	if (typeof window === 'undefined') {
		node.dataset.revealed = 'true';
		return {};
	}

	const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	if (reduceMotion || typeof IntersectionObserver === 'undefined') {
		node.dataset.revealed = 'true';
		return {};
	}

	const observer = new IntersectionObserver(
		(entries) => {
			const [entry] = entries;

			if (!entry) {
				return;
			}

			if (entry.isIntersecting) {
				node.dataset.revealed = 'true';

				if (settings.once) {
					observer.disconnect();
				}
			} else if (!settings.once) {
				node.dataset.revealed = 'false';
			}
		},
		{
			threshold: settings.threshold,
			rootMargin: settings.rootMargin
		}
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
};