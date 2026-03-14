<script lang="ts">
	import Reveal from '$lib/components/Reveal.svelte';
	import type { CapabilityGroup } from '$lib/data/site';

	interface Props {
		groups: CapabilityGroup[];
	}

	let { groups }: Props = $props();
</script>

<section class="section capabilities" id="capabilities">
	<div class="container">
		<div class="capability-grid">
			{#each groups as group, index}
				<Reveal className="capability-card" delay={index * 80 + 40}>
					<h3>{group.title}</h3>
					<p>{group.description}</p>
					<ul>
						{#each group.items as item}
							<li>{item}</li>
						{/each}
					</ul>
				</Reveal>
			{/each}
		</div>
	</div>
</section>

<style>
	.capability-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 1rem;
	}

	:global(.capability-card) {
		padding: 1.4rem;

		background:
			linear-gradient(180deg, rgba(14, 17, 24, 0.94), rgba(10, 12, 18, 0.94)),
			radial-gradient(circle at top right, rgba(255, 193, 7, 0.12), transparent 42%);
		border: 1px solid rgba(160, 182, 227, 0.11);
		transition:
			transform 220ms ease,
			border-color 220ms ease,
			background-color 220ms ease;
	}

	:global(.capability-card):hover {
		transform: translateY(-3px);
		border-color: rgba(255, 193, 7, 0.16);
		background:
			linear-gradient(180deg, rgba(17, 20, 28, 0.96), rgba(10, 12, 18, 0.96)),
			radial-gradient(circle at top right, rgba(255, 193, 7, 0.16), transparent 42%);
	}

	:global(.capability-card) h3 {
		font-size: 1.25rem;
		font-weight: 500;
		margin-bottom: 0.7rem;
	}

	:global(.capability-card) p {
		color: var(--text-soft);
		margin-bottom: 1rem;
	}

	:global(.capability-card) ul {
		display: grid;
		gap: 0.7rem;
		list-style: none;
	}

	:global(.capability-card) li {
		position: relative;
		padding-left: 1rem;
		color: var(--text-main);
	}

	:global(.capability-card) li::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0.62rem;
		width: 0.36rem;
		height: 0.36rem;

		background: var(--accent-2);
		box-shadow: 0 0 14px rgba(255, 193, 7, 0.42);
	}

	@media (max-width: 960px) {
		.capability-grid {
			grid-template-columns: 1fr;
		}
	}
</style>