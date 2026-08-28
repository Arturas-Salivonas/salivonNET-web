<script lang="ts">
	import type { Stat } from '$lib/data/site';

	interface Props {
		stats: Stat[];
	}

	let { stats }: Props = $props();

	const sparkHeights = [9, 13, 17, 22, 28];
</script>

<div class="container">
	<div class="stats">
		{#each stats as stat}
			<div class="stat">
				<div class="stat__key">{stat.key}</div>
				<div class="stat__row">
					{#if stat.kind === 'status'}
						<div class="stat__status"><span class="dot"></span>{stat.value}</div>
					{:else}
						<div class="stat__value">{stat.value}</div>
					{/if}

					{#if stat.kind === 'spark'}
						<div class="spark" aria-hidden="true">
							{#each sparkHeights as h, i}
								<i style="height: {h}px; animation-delay: {i * 0.1}s;"></i>
							{/each}
						</div>
					{:else if stat.kind === 'live'}
						<div class="live" aria-hidden="true"><i></i><i></i><i></i></div>
					{:else if stat.kind === 'nodes'}
						<svg class="nodes" width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
							<path d="M6 22 L17 6 L28 22" stroke="rgba(160,182,227,0.4)" stroke-width="1.2" />
							<rect x="3" y="19" width="6" height="6" fill="var(--accent)" />
							<rect x="14" y="3" width="6" height="6" fill="var(--accent)" />
							<rect x="25" y="19" width="6" height="6" fill="var(--accent)" />
						</svg>
					{/if}
				</div>
				<div class="stat__sub">{stat.sub}</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.stats {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		border-top: 1px solid rgba(160, 182, 227, 0.12);
		border-bottom: 1px solid rgba(160, 182, 227, 0.12);
	}

	.stat {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		padding: 1.5rem 1.6rem 1.65rem;
		border-left: 1px solid rgba(160, 182, 227, 0.12);
	}

	.stat:first-child {
		border-left: none;
	}

	.stat__key {
		font-family: var(--font-mono);
		font-size: 0.66rem;
		text-transform: uppercase;
		letter-spacing: 0.2em;
		color: rgba(191, 203, 230, 0.5);
	}

	.stat__row {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		gap: 0.75rem;
		min-height: 28px;
	}

	.stat__value {
		font-family: var(--font-mono);
		font-size: 1.8rem;
		color: var(--accent);
		line-height: 1;
	}

	.stat__status {
		display: flex;
		align-items: center;
		gap: 0.625rem;
		font-family: var(--font-mono);
		font-size: 1rem;
		color: var(--text-main);
	}

	.stat__sub {
		font-size: 0.78rem;
		color: rgba(191, 203, 230, 0.62);
	}

	.dot {
		width: 9px;
		height: 9px;
		background: var(--live);
		box-shadow: 0 0 12px rgba(70, 217, 143, 0.7);
		animation: stat-breathe 2.2s ease-in-out infinite;
	}

	.spark {
		display: flex;
		align-items: flex-end;
		gap: 3px;
		height: 28px;
	}

	.spark i {
		width: 5px;
		background: var(--accent);
		transform-origin: bottom;
		animation: stat-grow 0.9s cubic-bezier(0.2, 0.7, 0.2, 1) both;
	}

	.live {
		display: flex;
		gap: 6px;
		padding-bottom: 5px;
	}

	.live i {
		width: 8px;
		height: 8px;
		background: var(--live);
		animation: stat-breathe 2.2s ease-in-out infinite;
	}

	.live i:nth-child(2) {
		animation-delay: 0.4s;
	}

	.live i:nth-child(3) {
		animation-delay: 0.8s;
	}

	.nodes {
		align-self: flex-end;
	}

	@keyframes stat-grow {
		from {
			transform: scaleY(0);
		}
	}

	@keyframes stat-breathe {
		0%,
		100% {
			opacity: 0.4;
		}
		50% {
			opacity: 1;
		}
	}

	@media (max-width: 720px) {
		.stats {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}

		.stat {
			border-left: none;
			border-top: 1px solid rgba(160, 182, 227, 0.12);
		}

		.stat:nth-child(odd) {
			border-right: 1px solid rgba(160, 182, 227, 0.12);
		}

		.stat:nth-child(1),
		.stat:nth-child(2) {
			border-top: none;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.spark i,
		.live i,
		.dot {
			animation: none;
		}
	}
</style>
