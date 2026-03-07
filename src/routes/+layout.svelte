<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
	<link rel="icon" href="/as-favicon.png" />
	<meta name="format-detection" content="telephone=no" />

	<!-- Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-E63W60ZT7G"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());
		gtag('config', 'G-E63W60ZT7G');
	</script>

	<style>
		*, *::before, *::after {
			box-sizing: border-box;
			margin: 0;
			padding: 0;
		}
		html {
			scroll-behavior: smooth;
			overflow-x: hidden;
		}
		body {
			background: #07090d;
			color: #f5f7fb;
			overflow-x: hidden;
			min-height: 100vh;
		}
		img {
			max-width: 100%;
			height: auto;
			display: block;
		}
	</style>
</svelte:head>

{@render children?.()}
