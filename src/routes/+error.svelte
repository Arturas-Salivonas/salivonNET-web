<script lang="ts">
	import { page } from '$app/state';
	import Button from '#lib/components/Button.svelte';
	import { site } from '#lib/content/site.ts';

	const missing = $derived(page.status === 404);
</script>

<svelte:head>
	<title>{missing ? 'Page not found' : 'Something went wrong'} - {site.company}</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<section class="wrap error">
	<p class="status">{page.status}</p>
	<h1>{missing ? "That page isn't here." : 'Something broke on my side.'}</h1>
	<p>
		{missing
			? 'It may have moved, or the link was mistyped. Everything I do is on the home page.'
			: `Try again in a moment. If it keeps happening, tell me at ${site.email}.`}
	</p>
	<Button href="/" variant="primary">Back to the home page</Button>
</section>

<style>
	.error {
		display: grid;
		gap: 16px;
		justify-items: start;
		padding-block: clamp(56px, 12vw, 140px);
	}

	.status {
		color: var(--color-accent-bright);
		font-family: var(--font-display);
		font-size: 20px;
		font-weight: 800;
	}

	h1 {
		font-size: clamp(34px, 5vw, 56px);
		font-weight: 900;
		line-height: 1.05;
		letter-spacing: -0.03em;
	}

	p {
		max-width: 30em;
		font-size: 18px;
	}
</style>
