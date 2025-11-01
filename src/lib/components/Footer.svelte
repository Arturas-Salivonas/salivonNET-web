<script lang="ts">
	let currentYear = new Date().getFullYear();
</script>

<footer>
	<div class="footer-content">
		<p>© {currentYear} Arturas Salivonas. All rights reserved.</p>
	</div>
</footer>

<style>
	footer {
		background: rgba(0, 0, 0, 0.3);
		border-top: 1px solid rgba(245, 225, 89, 0.1);
		padding: var(--spacing-lg) var(--spacing-md);
		margin-top: var(--spacing-2xl);
	}

	.footer-content {
		max-width: var(--max-width);
		margin: 0 auto;
		text-align: center;
	}

	.footer-content p {
		margin: 0.5rem 0;
		color: #fff;
		font-size: 0.95rem;
	}

	@media (max-width: 768px) {
		footer {
			padding: var(--spacing-md) var(--spacing-sm);
		}

		.footer-content p {
			font-size: 0.85rem;
		}
	}
</style>
