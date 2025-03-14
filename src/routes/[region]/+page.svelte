<script lang="ts">
	import { type PageData } from './$types';
	import { businesses } from '$lib/data';
	import { BusinessCard } from '$lib/components/features/business-card';
	import { slugify } from '$lib/utils';
	import BackButton from '$lib/components/ui/back-button.svelte';
	import { config } from '$lib/config';

	let { data }: { data: PageData } = $props();
</script>

<section class="mx-auto max-w-6xl px-4 py-12">
	<div class="mb-12 text-center">
		<h1 class="mb-3 text-4xl font-bold text-foreground">{data.region} Business Directory</h1>
		<p class="mx-auto max-w-2xl text-xl text-muted-foreground">
			Find and explore the best local businesses in {data.region}
		</p>
	</div>

	<div class="mb-8">
		<BackButton />
	</div>

	<!-- Localities Section -->
	<div class="mb-10">
		<h2 class="mb-4 text-2xl font-semibold text-foreground">Browse by Locality</h2>
		<div class="flex flex-wrap gap-3">
			{#each data.localities as locality}
				<a
					href="/{slugify(data.region)}/{slugify(locality)}"
					class="inline-block rounded-md bg-primary/10 px-4 py-2 font-medium text-primary transition-colors hover:bg-primary/20"
				>
					{locality}
				</a>
			{/each}
		</div>
	</div>

	<!-- Other States/Regions Section -->
	<div>
		<h2 class="mb-4 text-2xl font-semibold text-foreground">Browse Other States</h2>
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			{#each data.otherRegions as region}
				<a
					href="/{slugify(region)}"
					class="block rounded-md bg-primary/10 p-6 text-center font-medium text-primary transition-colors hover:bg-primary/20"
				>
					{region}
				</a>
			{/each}
		</div>
	</div>
</section>
