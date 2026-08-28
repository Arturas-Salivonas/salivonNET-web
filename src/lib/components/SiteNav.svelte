<script lang="ts">
	import type { NavLink } from '$lib/data/site';

	interface Props {
		links: NavLink[];
	}

	let { links }: Props = $props();
</script>

<div class="container">
	<nav class="nav" aria-label="Primary">
		<a class="nav-logo" href="#top" aria-label="Arturas Salivonas - home">
			<svg width="32" height="32" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
				<path d="M48 10 L88 82 L8 82 Z" stroke="#f5f7fb" stroke-width="8" fill="none" stroke-linejoin="round" />
				<path d="M30 60 L66 60" stroke="var(--accent)" stroke-width="8" />
			</svg>
			<span>salivon.net</span>
		</a>
		<div class="nav-links">
			{#each links as link}
				<a href={link.href}>{link.label}</a>
			{/each}
		</div>
	</nav>
</div>

<style>
	.nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1.35rem 0;
		border-bottom: 1px solid rgba(160, 182, 227, 0.12);
	}

	.nav-logo {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		font-family: var(--font-mono);
		font-size: 0.875rem;
		letter-spacing: 0.08em;
		color: var(--text-main);
	}

	.nav-logo svg {
		display: block;
	}

	.nav-logo:hover {
		color: var(--text-main);
	}

	.nav-links {
		display: flex;
		gap: 1.85rem;
		font-family: var(--font-mono);
		font-size: 0.72rem;
		text-transform: uppercase;
		letter-spacing: 0.16em;
	}

	.nav-links a {
		color: rgba(191, 203, 230, 0.66);
		transition: color 180ms ease;
	}

	.nav-links a:hover {
		color: var(--accent);
	}

	@media (max-width: 760px) {
		.nav-links {
			display: none;
		}
	}
</style>
