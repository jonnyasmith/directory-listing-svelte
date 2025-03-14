<script lang="ts">
	import type { PageProps } from './$types';
	import { generateLocalBusinessJsonLd } from '$lib/utils';
	import BackButton from '$lib/components/ui/back-button.svelte';
	import BusinessDetails from '$lib/components/features/business-details/business-details.svelte';

	let { data }: PageProps = $props();

	const { business } = data;
	const jsonLd = JSON.stringify(generateLocalBusinessJsonLd(business));
</script>

<svelte:head>
	{@html `<script type="application/ld+json">${jsonLd}</script>`}
</svelte:head>

<div class="mx-auto max-w-4xl px-4 py-8">
	<div class="mb-6">
		<BackButton />
	</div>

	<BusinessDetails {business} />
</div>
