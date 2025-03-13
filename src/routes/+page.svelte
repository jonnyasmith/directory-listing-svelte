<script lang="ts">
	import { businesses } from '$lib/data';
	import { BusinessCard } from '$lib/components/features/business-card';
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
			<BusinessCard {business} />
		{/each}
	</div>
</section>
