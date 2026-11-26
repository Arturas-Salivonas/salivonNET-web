<script lang="ts">
	import { moreSites, shots } from '#lib/content/sites.ts';
</script>

<section class="wrap section" id="sites" aria-labelledby="sites-title">
	<div class="section-head">
		<h2 id="sites-title">Public websites</h2>
		<p>
			Websites I built and launched on my own, or played a big part in, including their internal
			systems and tools.
		</p>
	</div>

	<ul class="wall">
		{#each shots as shot (shot.url)}
			<li>
				<a class="shot" href={shot.url} target="_blank" rel="noopener">
					<span class="frame">
						<img
							src="/images/sites/{shot.image}"
							alt=""
							width={shot.width}
							height={shot.height}
							loading="lazy"
							decoding="async"
						/>
					</span>
					<span class="name">{shot.name}</span>
					<span class="sr-only">(opens in a new tab)</span>
				</a>
			</li>
		{/each}
	</ul>

	<ul class="more">
		<li>Plus</li>
		{#each moreSites as site (site.name)}
			<li>
				<a href={site.url} target="_blank" rel="noopener">
					{site.name}<span class="sr-only"> (opens in a new tab)</span>
				</a>
			</li>
		{/each}
	</ul>
</section>

<style>
	.wall {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: 26px 20px;
	}

	.shot {
		display: flex;
		flex-direction: column;
		gap: 10px;
		min-width: 0;
	}

	/* The cut corner needs `clip-path` here because an image fills the box. */
	.frame {
		--side: 16px;
		position: relative;
		display: block;
	}

	.frame img {
		width: 100%;
		height: auto;
		aspect-ratio: 16 / 10;
		border-radius: var(--radius);
		background: var(--color-surface);
		object-fit: cover;
		object-position: top center;
		clip-path: polygon(
			0 0,
			100% 0,
			100% calc(100% - var(--side)),
			calc(100% - var(--side)) 100%,
			0 100%
		);
	}

	.frame::after {
		content: '';
		position: absolute;
		right: 0;
		bottom: 0;
		width: var(--side);
		height: var(--side);
		background: var(--color-accent);
		clip-path: polygon(100% 0, 100% 100%, 0 100%);
		transform: translate(5px, 5px);
		transition: transform 0.3s var(--ease-snap);
	}

	.shot:is(:hover, :focus-visible) .frame::after {
		transform: none;
	}

	.name {
		color: var(--color-ink);
		font-family: var(--font-display);
		font-size: 17px;
		font-weight: 800;
		line-height: 1.2;
		letter-spacing: -0.01em;
	}

	.more {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 12px 26px;
		margin-top: clamp(28px, 4vw, 40px);
		padding-top: 24px;
		border-top: 1px solid var(--color-line);
	}

	.more li {
		position: relative;
		padding-left: 17px;
		color: var(--color-ink);
		font-family: var(--font-display);
		font-size: 19px;
		font-weight: 800;
		line-height: 1.2;
		letter-spacing: -0.01em;
	}

	.more li::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0.32em;
		width: 10px;
		height: 9px;
		background: var(--color-accent);
		clip-path: polygon(50% 0, 100% 100%, 0 100%);
	}

	.more a:hover {
		text-decoration: underline;
		text-decoration-color: var(--color-accent-bright);
		text-decoration-thickness: 2px;
		text-underline-offset: 4px;
	}

	.more li:first-child {
		padding-left: 0;
		color: var(--color-muted);
		font-family: var(--font-body);
		font-size: 14.5px;
		font-weight: 700;
		letter-spacing: 0;
	}

	.more li:first-child::before {
		content: none;
	}

	@media (max-width: 980px) {
		.wall {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}

	@media (max-width: 700px) {
		.wall {
			grid-template-columns: repeat(2, minmax(0, 1fr));
			gap: 22px 14px;
		}

		.name {
			font-size: 16px;
		}

		.more li {
			font-size: 17px;
		}
	}
</style>
