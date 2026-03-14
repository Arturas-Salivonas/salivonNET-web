<script lang="ts">
	import '../app.css';
	// Vite resolves these to hashed build-output URLs, enabling accurate preload hints
	import spaceGrotesk400Url from '@fontsource/space-grotesk/files/space-grotesk-latin-400-normal.woff2?url';
	import spaceGrotesk700Url from '@fontsource/space-grotesk/files/space-grotesk-latin-700-normal.woff2?url';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/as-favicon.png" />
	<meta name="format-detection" content="telephone=no" />
	<!-- Preload the two most critical font weights:
	     400 = all body text (most rendered characters),
	     700 = hero H1 headline (LCP element) -->
	<link rel="preload" href={spaceGrotesk400Url} as="font" type="font/woff2" crossorigin="anonymous" />
	<link rel="preload" href={spaceGrotesk700Url} as="font" type="font/woff2" crossorigin="anonymous" />
</svelte:head>

{@render children?.()}
