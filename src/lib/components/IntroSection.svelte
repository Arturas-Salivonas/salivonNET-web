<script lang="ts">
	import { onMount } from 'svelte';
	import ParticleBackground from './ParticleBackground.svelte';

	let visible = $state(false);

	interface Props {
		name?: string;
		description?: string;
		linkedin?: string;
		github?: string;
		facebook?: string;
		profileImage?: string;
	}

	let {
		name = "Your Name",
		description = "Your professional description",
		linkedin = "",
		github = "",
		facebook = "",
		profileImage = ""
	}: Props = $props();

	const socials = [
		{ name: 'LinkedIn', url: linkedin, icon: 'linkedin' },
		{ name: 'GitHub', url: github, icon: 'github' },
		{ name: 'Facebook', url: facebook, icon: 'facebook' }
	].filter(s => s.url);

	onMount(() => {
		// Immediate render to prevent layout shift
		visible = true;
	});
</script>

{#if visible}
	<section class="intro-section section" style="opacity: 1;">
		<ParticleBackground />
		<div class="container">
			<div class="intro-content">
				{#if profileImage}
					<div class="profile-image-wrapper">
						<img
							src={profileImage}
							alt={name}
							class="profile-image"
							width="120"
							height="120"
							loading="eager"
							decoding="async"
						/>
					</div>
				{/if}
				<h1 class="name">
					{name}
				</h1>
				<p class="description">
					{description}
				</p>

				{#if socials.length > 0}
					<div class="social-links">
						{#each socials as social}
							<a
								href={social.url}
								target="_blank"
								rel="noopener noreferrer"
								class="social-link"
								aria-label={social.name}
							>
								<span class="social-icon" data-icon={social.icon}></span>
							</a>
						{/each}
					</div>
				{/if}

				<div class="accent-line"></div>
			</div>
		</div>
	</section>
{:else}
	<!-- Placeholder to prevent layout shift -->
	<section class="intro-section section" style="opacity: 0; pointer-events: none;" aria-hidden="true">
		<div class="container">
			<div class="intro-content">
				<div class="profile-image-wrapper">
					<div style="width: 120px; height: 120px;"></div>
				</div>
				<h1 class="name">Loading...</h1>
				<p class="description">Loading...</p>
			</div>
		</div>
	</section>
{/if}

<style>
	.intro-section {
		min-height: 50vh;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		background: linear-gradient(135deg, var(--color-dark) 0%, #1a1f28 100%);
		padding: var(--spacing-xl) 0;
		z-index: 1;
	}

	.intro-content {
		text-align: center;
		max-width: 800px;
		margin: 0 auto;
		position: relative;
		z-index: 2;
	}

	.profile-image-wrapper {
		margin-bottom: var(--spacing-md);
		display: flex;
		justify-content: center;
	}

	.profile-image {
		width: 120px;
		height: 120px;
		border-radius: 50%;
		object-fit: cover;
		border: 4px solid var(--color-primary);
		box-shadow: 0 8px 24px rgba(245, 225, 89, 0.3);
		transition: all var(--transition-speed) ease;
	}

	.profile-image:hover {
		transform: scale(1.05);
		box-shadow: 0 12px 32px rgba(245, 225, 89, 0.4);
	}

	.name {
		font-size: clamp(2.5rem, 8vw, 4.5rem);
		font-weight: 800;
		margin-bottom: var(--spacing-sm);
		color: var(--color-white);
		letter-spacing: -0.02em;
		line-height: 1.1;
	}

	.description {
		font-size: clamp(1rem, 2.5vw, 1.3rem);
		color: rgba(255, 255, 255, 0.8);
		max-width: 700px;
		margin: 0 auto var(--spacing-md);
		line-height: 1.6;
	}

	.social-links {
		display: flex;
		justify-content: center;
		gap: var(--spacing-sm);
		margin: var(--spacing-md) 0;
	}

	.social-link {
		width: 44px;
		height: 44px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--color-gray);
		border-radius: 50%;
		transition: all var(--transition-speed) ease;
		border: 2px solid transparent;
	}

	.social-link:hover {
		transform: translateY(-4px);
		border-color: var(--color-primary);
		box-shadow: 0 8px 20px rgba(245, 225, 89, 0.3);
	}

	.social-icon {
		width: 20px;
		height: 20px;
		display: inline-block;
		position: relative;
	}

	.social-icon::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: var(--color-white);
		mask-size: contain;
		mask-repeat: no-repeat;
		mask-position: center;
		transition: background-color var(--transition-speed) ease;
	}

	.social-link:hover .social-icon::before {
		background-color: var(--color-primary);
	}

	.social-icon[data-icon="linkedin"]::before {
		mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'%3E%3Cpath d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/%3E%3C/svg%3E");
	}

	.social-icon[data-icon="github"]::before {
		mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'%3E%3Cpath d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'/%3E%3C/svg%3E");
	}

	.social-icon[data-icon="facebook"]::before {
		mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'%3E%3Cpath d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'/%3E%3C/svg%3E");
	}

	.accent-line {
		width: 80px;
		height: 3px;
		background: linear-gradient(90deg, var(--color-primary) 0%, rgba(245, 225, 89, 0.4) 100%);
		margin: var(--spacing-md) auto 0;
		border-radius: 2px;
	}

	@media (max-width: 768px) {
		.intro-section {
			min-height: 60vh;
			padding: var(--spacing-lg) 0;
		}

		.social-link {
			width: 40px;
			height: 40px;
		}

		.social-icon {
			width: 18px;
			height: 18px;
		}
	}
</style>
