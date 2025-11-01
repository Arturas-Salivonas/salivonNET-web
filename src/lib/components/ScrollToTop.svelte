<script lang="ts">
	import { fade, scale } from 'svelte/transition';
	import { onMount } from 'svelte';

	let showButton = $state(false);

	onMount(() => {
		const handleScroll = () => {
			showButton = window.scrollY > 500;
		};

		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => window.removeEventListener('scroll', handleScroll);
	});

	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}
</script>

{#if showButton}
	<button
		class="scroll-to-top"
		onclick={scrollToTop}
		in:scale={{ duration: 200 }}
		out:scale={{ duration: 200 }}
		aria-label="Scroll to top"
	>
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
			<polyline points="18 15 12 9 6 15"></polyline>
		</svg>
	</button>
{/if}

<style>
	.scroll-to-top {
		position: fixed;
		bottom: 2rem;
		right: 2rem;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background: var(--color-primary);
		color: var(--color-dark);
		border: none;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 4px 20px rgba(245, 225, 89, 0.3);
		transition: all var(--transition-speed) ease;
		z-index: 1000;
	}

	.scroll-to-top:hover {
		transform: translateY(-4px);
		box-shadow: 0 8px 30px rgba(245, 225, 89, 0.5);
	}

	.scroll-to-top:active {
		transform: translateY(-2px);
	}

	@media (max-width: 768px) {
		.scroll-to-top {
			bottom: 1.5rem;
			right: 1.5rem;
			width: 45px;
			height: 45px;
		}
	}
</style>
