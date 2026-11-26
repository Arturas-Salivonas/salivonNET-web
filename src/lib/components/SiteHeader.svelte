<script lang="ts">
	import Button from '#lib/components/Button.svelte';
	import Logo from '#lib/components/Logo.svelte';
	import { navLinks, site } from '#lib/content/site.ts';
</script>

<header class="header">
	<div class="wrap bar">
		<a class="brand" href="/#top" aria-label="{site.company}, back to top">
			<Logo />
			<span>Salivon <span class="suffix">Ltd</span></span>
		</a>

		<nav class="nav" aria-label="Sections">
			{#each navLinks as link (link.href)}
				<a href={link.href}>{link.label}</a>
			{/each}
		</nav>

		<Button href="/#contact" variant="primary" size="sm">Let's talk</Button>
	</div>
</header>

<style>
	.header {
		position: sticky;
		top: 0;
		z-index: 20;
		border-bottom: 1px solid var(--color-line);
		background: var(--color-bg);
	}

	.bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 16px;
		min-height: var(--header-height);
	}

	.brand {
		display: flex;
		align-items: center;
		gap: 11px;
		/* A comfortable tap target on touch screens. */
		min-height: 44px;
		color: var(--color-ink);
		font-family: var(--font-display);
		font-size: 19px;
		font-weight: 800;
		letter-spacing: -0.01em;
		white-space: nowrap;
	}

	.suffix {
		color: var(--color-muted);
	}

	.nav {
		display: flex;
		gap: 4px;
	}

	.nav a {
		padding: 10px 14px;
		border-radius: 3px;
		font-size: 15.5px;
		font-weight: 600;
	}

	.nav a:hover {
		background: var(--color-surface);
		color: var(--color-ink);
	}

	@media (max-width: 640px) {
		.nav {
			display: none;
		}
	}
</style>
