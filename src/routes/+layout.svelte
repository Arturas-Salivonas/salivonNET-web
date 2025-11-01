<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
	<link rel="icon" href="/as-favicon.png" />
	<title>Portfolio - CV Website</title>

	<!-- Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-E63W60ZT7G"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());
		gtag('config', 'G-E63W60ZT7G');
	</script>

	<!-- Preconnect to speed up external resources -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="dns-prefetch" href="https://fonts.googleapis.com" />

	<!-- Critical CSS to prevent layout shift and render blocking -->
	<style>
		:root {
			--color-primary: #f5e159;
			--color-dark: #11151b;
			--color-white: #fff;
			--color-gray: #2a3038;
			--spacing-xs: 0.5rem;
			--spacing-sm: 1rem;
			--spacing-md: 1.5rem;
			--spacing-lg: 3rem;
			--spacing-xl: 4rem;
			--transition-speed: 0.3s;
			--border-radius: 12px;
		}
		*, *::before, *::after {
			box-sizing: border-box;
			margin: 0;
			padding: 0;
		}
		html {
			scroll-behavior: smooth;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			overflow-x: hidden;
		}
		body {
			font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
			background-color: var(--color-dark);
			color: var(--color-white);
			line-height: 1.6;
			overflow-x: hidden;
			min-height: 100vh;
			text-rendering: optimizeLegibility;
			-webkit-text-size-adjust: 100%;
		}
		main {
			min-height: 100vh;
			opacity: 1;
		}
		.container {
			max-width: 1200px;
			margin: 0 auto;
			padding: 0 var(--spacing-md);
		}
		img {
			max-width: 100%;
			height: auto;
			display: block;
		}
	</style>
</svelte:head>

{@render children?.()}
