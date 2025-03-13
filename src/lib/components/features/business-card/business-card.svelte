<script lang="ts">
	import { type Business } from '$lib/types';
	import { base } from '$app/paths';
	import { Link } from '$lib/components/ui/link';

	export type PropTypes = {
		business: Business;
	};

	let { business }: PropTypes = $props();
</script>

<article
	class="relative h-full rounded-lg border border-border bg-card p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-xl"
>
	<Link
		href={`${base}/${business.addressObj.addressRegion.toLowerCase()}/${business.addressObj.addressLocality.toLowerCase()}/${business.slug}`}
		class="group"
		aria-label={business.name}
	>
		<h2
			class="mb-2 text-xl font-semibold text-card-foreground transition-colors group-hover:text-primary"
		>
			{business.name}
		</h2>
		<span class="absolute inset-0"></span>
	</Link>
	<div
		class="mb-3 inline-block rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground"
	>
		{business.category}
	</div>
	<div class="text-muted-foreground">
		{business.address}
	</div>
</article>
