<script lang="ts">
	import { type PageData } from './$types';
	import { config } from '$lib/config';
	import { CompactCard } from '$lib/components/features/compact-card';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Find {config.itemPlural} By State | {config.siteName}</title>
	<meta name="description" content="Browse {config.itemPlural} by state across the United States" />
</svelte:head>

<div class="mx-auto max-w-6xl px-4 py-12">
	<h1 class="mb-8 text-center text-3xl font-bold">Find {config.itemPlural} By State</h1>

	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
		{#each data.regions as region}
			<CompactCard label={region.region} href="/{region.regionSlug}" />
		{/each}
	</div>
</div>
