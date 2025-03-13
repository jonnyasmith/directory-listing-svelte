<script lang="ts">
	import { businesses } from '$lib/data';
	import { BusinessCard } from '$lib/components/features/business-card';
</script>

<section class="mx-auto max-w-6xl px-4 py-12">
	<div class="mb-12 text-center">
		<h1 class="mb-3 text-4xl font-bold text-foreground">Local Business Directory</h1>
		<p class="mx-auto max-w-2xl text-xl text-muted-foreground">
			Find and explore the best local businesses by category
		</p>
	</div>

	<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each businesses as business}
			<BusinessCard {business} />
		{/each}
	</div>
</section>
