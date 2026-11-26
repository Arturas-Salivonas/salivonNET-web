<script lang="ts">
	import '@fontsource-variable/red-hat-display';
	import '@fontsource-variable/red-hat-text';
	import '#lib/styles/global.css';

	// Resolved to their hashed build URLs, so the preload hints below always point at the real files.
	import displayFont from '@fontsource-variable/red-hat-display/files/red-hat-display-latin-wght-normal.woff2?url';
	import textFont from '@fontsource-variable/red-hat-text/files/red-hat-text-latin-wght-normal.woff2?url';

	import SiteFooter from '#lib/components/SiteFooter.svelte';
	import SiteHeader from '#lib/components/SiteHeader.svelte';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<!-- The headline and the body text both need their font before first paint. -->
	<link rel="preload" href={displayFont} as="font" type="font/woff2" crossorigin="anonymous" />
	<link rel="preload" href={textFont} as="font" type="font/woff2" crossorigin="anonymous" />
</svelte:head>

<a class="skip" href="#main">Skip to content</a>

<SiteHeader />

<main id="main">
	{@render children()}
</main>

<SiteFooter />

<style>
	/* First stop for keyboard users: jump past the header. */
	.skip {
		position: absolute;
		left: 16px;
		top: -80px;
		z-index: 40;
		padding: 12px 16px;
		background: var(--color-ink);
		color: var(--color-bg);
		font-weight: 700;
	}

	.skip:focus {
		top: 12px;
	}
</style>
