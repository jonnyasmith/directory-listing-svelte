<script lang="ts">
	import type { PageProps } from './$types';
	import { page } from '$app/state';
	import { generateLocalBusinessJsonLd, slugify } from '$lib/utils';
	import BackButton from '$lib/components/ui/back-button.svelte';
	import BusinessDetails from '$lib/components/features/business-details/business-details.svelte';
	import type { Business } from '$lib/types';

	let { data }: PageProps = $props();

	const { business }: { business: Business } = data;
	const jsonLd = JSON.stringify(generateLocalBusinessJsonLd(business));
	const backHref = `/${page.params.region}/${page.params.locality}`;
</script>

<svelte:head>
	{@html `<script type="application/ld+json">${jsonLd}</script>`}
</svelte:head>

<div class="mx-auto max-w-4xl px-4 py-8">
	<div class="mb-6">
		<BackButton backText="Back to {business.addressObj.addressLocality}" href={backHref} />
	</div>

	<BusinessDetails {business} />
</div>
