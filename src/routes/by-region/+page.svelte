<script lang="ts">
	import { type PageData } from './$types';
	import { slugify } from '$lib/utils';
	import { config } from '$lib/config';

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
			<a
				href="/{slugify(region)}"
				class="block rounded-md bg-primary/10 p-6 text-center font-medium text-primary transition-colors hover:bg-primary/20"
			>
				{region}
			</a>
		{/each}
	</div>
</div>
