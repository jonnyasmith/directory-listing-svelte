<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const { business } = data;
</script>

<div class="max-w-4xl mx-auto px-4 py-8">
	<article
		class="bg-white rounded-lg shadow-lg p-8"
		itemscope
		itemtype="http://schema.org/LocalBusiness"
	>
		<h1 class="text-3xl font-bold text-gray-900 mb-3" itemprop="name">{business.name}</h1>

		<div
			class="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm mb-6"
			itemprop="category"
		>
			{business.category}
		</div>

		<div class="space-y-4 mb-8">
			<div class="flex flex-col sm:flex-row sm:items-center gap-2">
				<span class="font-medium text-gray-700 min-w-24">Address:</span>
				<address
					class="not-italic text-gray-600"
					itemprop="address"
					itemscope
					itemtype="http://schema.org/PostalAddress"
				>
					<span itemprop="streetAddress">{business.address}</span>
				</address>
			</div>

			<div class="flex flex-col sm:flex-row sm:items-center gap-2">
				<span class="font-medium text-gray-700 min-w-24">Phone:</span>
				<a href="tel:{business.phone}" class="text-blue-600 hover:underline" itemprop="telephone">
					{business.phone}
				</a>
			</div>
		</div>

		<a
			href="/"
			class="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors font-medium"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-4 w-4 mr-2"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M10 19l-7-7m0 0l7-7m-7 7h18"
				/>
			</svg>
			Back to Directory
		</a>
	</article>
</div>
