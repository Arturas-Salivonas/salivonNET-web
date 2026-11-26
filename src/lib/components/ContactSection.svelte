<script lang="ts">
	import { inView } from '#lib/attachments/in-view.ts';
	import Button from '#lib/components/Button.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { availability, steps } from '#lib/content/contact.ts';
	import { site } from '#lib/content/site.ts';

	const COPIED_MS = 1800;

	// Once the block has been seen, its corner piece clicks in and the step line starts running.
	let seen = $state(false);
	let copied = $state(false);
	let emailText = $state<HTMLElement>();

	async function copyEmail() {
		try {
			await navigator.clipboard.writeText(site.email);
			copied = true;
			setTimeout(() => (copied = false), COPIED_MS);
		} catch {
			// No clipboard access (older browser or blocked): select the address so it can be copied by hand.
			if (emailText) window.getSelection()?.selectAllChildren(emailText);
		}
	}
</script>

<section class="wrap section contact" id="contact" aria-labelledby="contact-title">
	<div
		class="panel cut cut-piece"
		class:is-live={seen}
		{@attach inView((visible) => (seen ||= visible), { threshold: 0.35 })}
	>
		<h2 id="contact-title">Got something slow, manual or messy?</h2>

		<div class="process">
			<span class="runner" aria-hidden="true"></span>
			<ol class="steps">
				{#each steps as step, index (step.title)}
					<li>
						<span class="number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
						<h3>{step.title}</h3>
						<p>{step.detail}</p>
					</li>
				{/each}
			</ol>
		</div>

		<div class="actions">
			<Button href="mailto:{site.email}" variant="primary" surface="accent">
				<Icon name="mail" />
				<span bind:this={emailText}>{site.email}</span>
			</Button>
			<Button surface="accent" onclick={copyEmail}>
				<Icon name="copy" />
				<span aria-live="polite">{copied ? 'Copied' : 'Copy email'}</span>
			</Button>
			{#each site.socials as social (social.href)}
				<Button href={social.href} surface="accent" target="_blank" rel="noopener">
					{social.label}
					<span class="sr-only">(opens in a new tab)</span>
				</Button>
			{/each}
		</div>

		<p class="availability">{availability}</p>
	</div>
</section>

<style>
	.contact {
		padding-top: clamp(8px, 2vw, 24px);
	}

	.panel {
		--cut: 20px;
		--cut-fill: var(--color-accent);
		--cut-piece: var(--color-accent-bright);
		/* A bigger piece that takes a beat longer, so you see it land. */
		--cut-gap: 9px;
		--cut-speed: 0.5s;
		--cut-delay: 0.25s;
		padding: clamp(28px, 5vw, 60px);
		border-radius: 5px;
		color: #ffffff;
	}

	.panel :global(:focus-visible) {
		outline-color: #ffffff;
	}

	h2 {
		max-width: 15em;
		color: #ffffff;
		font-size: clamp(30px, 4vw, 48px);
	}

	.process {
		position: relative;
		margin-top: clamp(30px, 4vw, 44px);
	}

	/* A line across the top of the steps, with a dot that keeps travelling along it. */
	.steps {
		position: relative;
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 28px;
		padding-top: 30px;
	}

	.steps::before {
		content: '';
		position: absolute;
		inset: 0 0 auto;
		height: 2px;
		background: rgb(255 255 255 / 0.4);
	}

	.runner {
		position: absolute;
		inset: 1px 0 auto;
		height: 0;
	}

	.runner::after {
		content: '';
		position: absolute;
		right: -6px;
		top: -6px;
		width: 12px;
		height: 12px;
		border-radius: 50%;
		background: #ffffff;
	}

	.steps li {
		position: relative;
		display: grid;
		align-content: start;
		gap: 6px;
	}

	/* A delta marks where each step starts on the line. */
	.steps li::before {
		content: '';
		position: absolute;
		left: 0;
		top: -37px;
		width: 14px;
		height: 12px;
		background: #ffffff;
		clip-path: polygon(50% 0, 100% 100%, 0 100%);
	}

	.number {
		font-family: var(--font-display);
		font-size: clamp(44px, 5.4vw, 66px);
		font-weight: 900;
		line-height: 1;
		letter-spacing: -0.04em;
	}

	/* Outlined numerals where the browser can draw them, solid ones everywhere else. */
	@supports (-webkit-text-stroke: 1px #ffffff) {
		.number {
			color: transparent;
			-webkit-text-stroke: 2px #ffffff;
		}
	}

	h3 {
		color: #ffffff;
		font-size: 22px;
	}

	.steps p {
		font-size: 16px;
		font-weight: 500;
		line-height: 1.4;
	}

	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: 14px;
		margin-top: clamp(30px, 4vw, 44px);
	}

	.availability {
		margin-top: 20px;
		font-size: 15.5px;
		font-weight: 500;
	}

	@media (prefers-reduced-motion: no-preference) {
		.panel.is-live .runner {
			animation: lap 7s linear infinite both;
		}
	}

	@keyframes lap {
		0% {
			opacity: 0;
			transform: translateX(-100%);
		}

		6% {
			opacity: 1;
		}

		88% {
			opacity: 1;
			transform: none;
		}

		100% {
			opacity: 0;
			transform: none;
		}
	}

	@media (max-width: 700px) {
		/* Steps stack, each with its number on the left. The travelling line is dropped. */
		.steps {
			grid-template-columns: minmax(0, 1fr);
			gap: 0;
			padding-top: 0;
		}

		.steps::before,
		.steps li::before,
		.runner {
			display: none;
		}

		.steps li {
			grid-template-columns: 76px minmax(0, 1fr);
			column-gap: 14px;
			padding-block: 18px;
			border-top: 2px solid rgb(255 255 255 / 0.4);
		}

		.number {
			grid-row: span 2;
			font-size: 46px;
		}

		h3 {
			align-self: end;
			font-size: 20px;
		}
	}

	/* Tablets: the four buttons sit in a tidy two-by-two block. */
	@media (min-width: 561px) and (max-width: 980px) {
		.actions {
			display: grid;
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (max-width: 560px) {
		/* Email and copy each take a full row; the two profile links share the last one. */
		.actions {
			display: grid;
			grid-template-columns: repeat(2, minmax(0, 1fr));
			gap: 12px;
		}

		.actions :global(.button:nth-child(-n + 2)) {
			grid-column: 1 / -1;
		}
	}
</style>
