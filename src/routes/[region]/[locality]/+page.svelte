<script lang="ts">
	import { type PageData } from './$types';
	import { BusinessCard } from '$lib/components/features/business-card';
	import BackButton from '$lib/components/ui/back-button.svelte';

	let { data }: { data: PageData } = $props();
</script>

<section class="mx-auto max-w-6xl px-4 py-12">
	<div class="mb-12 text-center">
		<h1 class="mb-3 text-4xl font-bold text-foreground">
			{data.locality}, {data.region} Business Directory
		</h1>
		<p class="mx-auto max-w-2xl text-xl text-muted-foreground">
			Find and explore the best local businesses in {data.locality}, {data.region}
		</p>
	</div>
	<div class="mb-8">
		<BackButton />
	</div>

	<!-- Businesses in Locality -->
	<div class="mt-12">
		<h2 class="mb-6 text-2xl font-semibold text-foreground">Businesses in {data.locality}</h2>
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each data.businesses as business}
				<BusinessCard {business} />
			{/each}
		</div>
	</div>
</section>
