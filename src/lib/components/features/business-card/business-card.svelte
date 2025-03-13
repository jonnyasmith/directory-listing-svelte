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
	class="bg-white rounded-lg shadow-md hover:shadow-xl transition-all relative duration-300 p-6 h-full border border-gray-100 hover:border-gray-200 hover:-translate-y-1"
>
	<Link href={`${base}/business/${business.slug}`} class="group" aria-label={business.name}>
		<h2 class="text-xl font-semibold text-gray-900 mb-2 transition-colors">
			{business.name}
		</h2>
		<span class="absolute inset-0"></span>
	</Link>
	<div class="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm mb-3">
		{business.category}
	</div>
	<div class="text-gray-600">
		{business.address}
	</div>
</article>
