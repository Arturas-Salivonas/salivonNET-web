<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';

	type Props = {
		/** Renders a link when set, a button otherwise. */
		href?: string;
		variant?: 'primary' | 'outline';
		size?: 'md' | 'sm';
		/** What the button sits on, so its colours can match the surface behind it. */
		surface?: 'page' | 'panel' | 'accent';
		children: Snippet;
	} & Omit<HTMLAnchorAttributes, 'href' | 'type'> &
		Omit<HTMLButtonAttributes, 'type'>;

	let {
		href,
		variant = 'outline',
		size = 'md',
		surface = 'page',
		children,
		class: className,
		...rest
	}: Props = $props();

	const classes = $derived(['button', `is-${variant}`, `is-${size}`, `on-${surface}`, className]);
</script>

{#if href}
	<a class={classes} {href} {...rest}>{@render children()}</a>
{:else}
	<button class={classes} type="button" {...rest}>{@render children()}</button>
{/if}

<style>
	/*
	 * The cut corner again (see styles/shape.css), built from two layers so an outline
	 * button keeps its border along the diagonal: the element paints the edge colour and
	 * `::before` paints the fill 1.5px inside it.
	 */
	.button {
		--cut: 8px;
		--edge: var(--color-line-strong);
		--fill: var(--color-bg);
		position: relative;
		isolation: isolate;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
		min-height: 52px;
		padding: 0 24px 0 22px;
		border: 0;
		border-radius: 3px;
		background: linear-gradient(
			-45deg,
			transparent calc(var(--cut) - 0.5px),
			var(--edge) var(--cut)
		);
		color: var(--color-ink);
		font: 700 16.5px/1 var(--font-body);
		cursor: pointer;
	}

	.button::before {
		content: '';
		position: absolute;
		inset: 1.5px;
		z-index: -1;
		border-radius: 2px;
		background: linear-gradient(
			-45deg,
			transparent calc(var(--cut) - 1.1px),
			var(--fill) calc(var(--cut) - 0.6px)
		);
	}

	.button:hover {
		--edge: var(--color-ink);
	}

	/* A trailing icon leans forward on hover. */
	.button :global(.icon:last-child) {
		transition: transform 0.25s ease;
	}

	.button:hover :global(.icon:last-child) {
		transform: translateX(4px);
	}

	.is-sm {
		min-height: 44px;
		padding: 0 18px 0 16px;
		font-size: 15px;
	}

	/* Primary: solid, with the loose corner piece that snaps in on hover. */
	.is-primary {
		--edge: var(--color-accent);
		--fill: var(--color-accent);
		--piece: var(--color-accent-bright);
		color: var(--color-on-accent);
	}

	.is-primary:hover {
		--edge: var(--color-accent);
	}

	.is-primary::after {
		--side: calc(var(--cut) * 1.4142);
		content: '';
		position: absolute;
		right: 0;
		bottom: 0;
		z-index: -1;
		width: var(--side);
		height: var(--side);
		background: var(--piece);
		clip-path: polygon(100% 0, 100% 100%, 0 100%);
		transform: translate(5px, 5px);
		transition: transform 0.28s var(--ease-snap);
	}

	.is-primary:is(:hover, :focus-visible)::after {
		transform: none;
	}

	/* Surfaces */
	.is-outline.on-panel {
		--fill: var(--color-surface);
	}

	.on-accent {
		--edge: #ffffff;
		--fill: var(--color-accent);
		color: #ffffff;
	}

	.on-accent:hover {
		--edge: #ffffff;
		--fill: #2450d6;
	}

	.on-accent.is-primary,
	.on-accent.is-primary:hover {
		--fill: #ffffff;
		--piece: #ffffff;
		color: var(--panel-ink);
	}

	.on-accent:focus-visible {
		outline-color: #ffffff;
	}
</style>
