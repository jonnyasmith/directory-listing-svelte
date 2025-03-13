<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { businesses } from '$lib/data';
</script>

<section class="directory">
	<h1>Local Business Directory</h1>
	<p class="intro">Find and connect with quality local businesses in your area.</p>

	<div class="business-list">
		{#each businesses as business}
			<article class="business-card">
				<h2 class="business-name">
					<Button variant="ghost" href={`/business/${business.slug}`}>{business.name}</Button>
				</h2>
				<div class="business-category">{business.category}</div>
				<div class="business-teaser">{business.address}</div>
			</article>
		{/each}
	</div>
</section>

<style>
	.directory {
		max-width: 900px;
		margin: 0 auto;
	}

	.intro {
		font-size: 1.2rem;
		color: #555;
		margin-bottom: 2rem;
	}

	.business-list {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: 1.5rem;
	}

	.business-card {
		background: #fff;
		border-radius: 8px;
		padding: 1.5rem;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
		transition:
			transform 0.2s,
			box-shadow 0.2s;
	}

	.business-card:hover {
		transform: translateY(-3px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
	}

	.business-name {
		margin-top: 0;
		margin-bottom: 0.5rem;
		font-size: 1.5rem;
	}

	.business-link {
		color: #0066cc;
		text-decoration: none;
	}

	.business-link:hover {
		text-decoration: underline;
	}

	.business-category {
		display: inline-block;
		background: #f0f0f0;
		padding: 0.2rem 0.6rem;
		border-radius: 20px;
		font-size: 0.85rem;
		margin: 0.5rem 0;
	}

	.business-teaser {
		color: #666;
		margin-top: 0.5rem;
	}
</style>
