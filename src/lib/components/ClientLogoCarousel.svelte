<script lang="ts">
	const logos = [
		{ name: 'Odeon',               src: '/logos/odeon-logo-web.svg' },
		{ name: 'PMI',                 src: '/logos/pmi-logo-web.svg' },
		{ name: 'Tyk',                 src: '/logos/tyk-logo-web.svg' },
		{ name: 'Money20/20',          src: '/logos/Money_Global.avif' },
		{ name: 'GlobalData',          src: '/logos/gd-logo.png' },
		{ name: 'Elite Traveler',      src: '/logos/elite-logo-web.svg' },
		{ name: 'London Gynaecology',  src: '/logos/gyno-logo.png' },
		{ name: 'Cinema City',         src: '/logos/city-logo-web.svg' },
	] as const;

	// Duplicate for seamless infinite loop
	const track = [...logos, ...logos];
</script>

<div class="clients">
	<div class="carousel" aria-hidden="true">
		<div class="carousel__track">
			{#each track as logo}
				<div class="carousel__item">
					<img
						src={logo.src}
						alt={logo.name}
						loading="lazy"
						width="auto"
						height="36"
					/>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.clients {
		margin-bottom: 3rem;
        margin-top: 3rem;
	}

	.clients__label {
		font-family: var(--font-mono);
		font-size: 0.72rem;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: var(--muted);
		margin-bottom: 1.4rem;
	}

	/* Fade edges */
	.carousel {
		overflow: hidden;
		mask-image: linear-gradient(
			to right,
			transparent 0%,
			black 8%,
			black 92%,
			transparent 100%
		);
		-webkit-mask-image: linear-gradient(
			to right,
			transparent 0%,
			black 8%,
			black 92%,
			transparent 100%
		);
	}

	.carousel__track {
		display: flex;
		align-items: center;
		width: max-content;
		gap: 0;
		animation: marquee 32s linear infinite;
		will-change: transform;
	}

	.carousel:hover .carousel__track {
		animation-play-state: paused;
	}

	.carousel__item {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0 1.8rem;
		flex-shrink: 0;
		height: 36px;
	}

	.carousel__item img {
		height: 36px;
		width: auto;

		object-fit: contain;
		/* Greyscale + lift brightness so logos are visible on dark bg */
		filter: grayscale(1) brightness(0) invert(1) opacity(0.45);
		transition: filter 300ms ease;
		display: block;
	}

	.carousel:hover .carousel__item img {
		filter: grayscale(1) brightness(0) invert(1) opacity(0.72);
	}

	@keyframes marquee {
		0%   { transform: translateX(0); }
		100% { transform: translateX(-50%); }
	}

	/* Respect reduced-motion preference */
	@media (prefers-reduced-motion: reduce) {
		.carousel__track {
			animation: none;
		}
		.carousel {
			mask-image: none;
			-webkit-mask-image: none;
			overflow-x: auto;
			scrollbar-width: none;
		}
		.carousel::-webkit-scrollbar {
			display: none;
		}
	}

	/* Separator line below carousel */

</style>
