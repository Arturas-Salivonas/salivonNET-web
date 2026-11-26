<script lang="ts">
	import { site } from '#lib/content/site.ts';
</script>

<!-- A short word from me, set apart from the pitch above it. -->
<section class="wrap" aria-labelledby="intro-title">
	<div class="intro cut cut-piece">
		<img class="portrait" src="/{site.portrait}" alt="" width="200" height="200" />

		<div class="headline">
			<h2 id="intro-title">Hi, I'm {site.name}.</h2>
			<p>
				For 10+ years I've built websites, booking systems and internal tools that save companies
				money and staff hours.
			</p>
		</div>

		<div class="more">
			<p>
				I enjoy technical challenges and finding creative solutions where standard software falls
				short.
			</p>
			<p>
				I'm flexible in how I work: with the systems you already have or from scratch, on a single
				project or long term, on my own or alongside your team. Tell me what's slowing you down and
				I'll tell you honestly what it takes to fix it.
			</p>
		</div>
	</div>
</section>

<style>
	/* Photo, the headline statement, then the detail: three columns that fill the card. */
	.intro {
		--cut: 16px;
		--cut-fill: var(--color-surface);
		display: grid;
		grid-template-columns: auto minmax(0, 1fr) minmax(0, 1fr);
		gap: clamp(20px, 3.5vw, 48px);
		align-items: center;
		padding: clamp(20px, 3.5vw, 40px);
	}

	.portrait {
		--side: 20px;
		width: clamp(96px, 12vw, 136px);
		height: auto;
		border-radius: var(--radius);
		clip-path: polygon(
			0 0,
			100% 0,
			100% calc(100% - var(--side)),
			calc(100% - var(--side)) 100%,
			0 100%
		);
	}

	.headline {
		display: grid;
		gap: 10px;
	}

	h2 {
		font-size: clamp(26px, 7vw, 30px);
	}

	.headline p {
		color: var(--color-ink);
		font-size: 18px;
		font-weight: 600;
		line-height: 1.4;
	}

	.more {
		display: grid;
		gap: 12px;
		font-size: 17px;
	}

	@media (max-width: 980px) {
		/* The photo keeps its column; the two blocks of text stack beside it. */
		.intro {
			grid-template-columns: auto minmax(0, 1fr);
			row-gap: 16px;
		}

		.portrait {
			grid-row: span 2;
			align-self: start;
		}
	}

	@media (max-width: 640px) {
		/* The photo sits beside the greeting; everything else runs full width below. */
		.intro {
			row-gap: 14px;
			column-gap: 14px;
		}

		.portrait {
			--side: 12px;
			grid-row: auto;
			align-self: center;
			width: 68px;
		}

		.headline {
			display: contents;
		}

		h2 {
			align-self: center;
		}

		.headline p,
		.more {
			grid-column: 1 / -1;
		}
	}
</style>
