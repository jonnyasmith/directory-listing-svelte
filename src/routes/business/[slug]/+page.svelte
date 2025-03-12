<script lang="ts">
	import { base } from '$app/paths';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const { business } = data;
</script>

<article class="business-details" itemscope itemtype="http://schema.org/LocalBusiness">
	<h1 itemprop="name">{business.name}</h1>
	<div class="business-category" itemprop="category">{business.category}</div>

	<div class="business-info">
		<div class="info-row">
			<strong>Address:</strong>
			<address itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
				<span itemprop="streetAddress">{business.address}</span>
			</address>
		</div>
		<div class="info-row">
			<strong>Phone:</strong>
			<a href="tel:{business.phone}" itemprop="telephone">{business.phone}</a>
		</div>
	</div>

	<a href={`${base}/`} class="back-link">Back to Directory</a>
</article>

<style>
	.business-details {
		background: #fff;
		border-radius: 8px;
		padding: 2rem;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
		max-width: 800px;
		margin: 2rem auto;
	}

	h1 {
		margin-top: 0;
		color: #333;
	}

	.business-category {
		display: inline-block;
		background: #f0f0f0;
		padding: 0.3rem 0.8rem;
		border-radius: 20px;
		font-size: 0.9rem;
		margin-bottom: 1.5rem;
	}

	.business-info {
		margin: 1.5rem 0;
	}

	.info-row {
		margin: 0.8rem 0;
	}

	.back-link {
		display: inline-block;
		color: #007bff;
		text-decoration: none;
		margin-top: 1rem;
		font-weight: 500;
	}

	.back-link:hover {
		text-decoration: underline;
	}
</style>
