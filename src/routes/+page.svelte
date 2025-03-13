<script lang="ts">
	import { businesses } from '$lib/data';
	import { base } from '$app/paths';
</script>

<section class="max-w-6xl mx-auto px-4 py-12">
	<div class="text-center mb-12">
		<h1 class="text-4xl font-bold text-gray-900 mb-3">Local Business Directory</h1>
		<p class="text-xl text-gray-600 max-w-2xl mx-auto">
			Find and connect with quality local businesses in your area.
		</p>
	</div>

	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
		{#each businesses as business}
			<article
				class="bg-white rounded-lg shadow-md hover:shadow-xl transition-all relative duration-300 p-6 h-full border border-gray-100 hover:border-gray-200 hover:-translate-y-1"
			>
				<a href={`${base}/business/${business.slug}`} class="group" aria-label={business.name}>
					<h2 class="text-xl font-semibold text-gray-900 mb-2 transition-colors">
						{business.name}
					</h2>
					<span class="absolute inset-0"></span>
				</a>
				<div class="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm mb-3">
					{business.category}
				</div>
				<div class="text-gray-600">
					{business.address}
				</div>
			</article>
		{/each}
	</div>
</section>
