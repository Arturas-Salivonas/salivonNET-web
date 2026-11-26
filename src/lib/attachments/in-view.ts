import type { Attachment } from 'svelte/attachments';

/**
 * Reports whether an element is on screen.
 *
 * @example
 * <section {@attach inView((visible) => (seen = visible), { threshold: 0.5 })}>
 */
export function inView(
	onChange: (visible: boolean) => void,
	options?: IntersectionObserverInit
): Attachment<Element> {
	return (node) => {
		const observer = new IntersectionObserver((entries) => {
			// Only the latest reading matters if several arrive together.
			const latest = entries.at(-1);
			if (latest) onChange(latest.isIntersecting);
		}, options);

		observer.observe(node);
		return () => observer.disconnect();
	};
}
