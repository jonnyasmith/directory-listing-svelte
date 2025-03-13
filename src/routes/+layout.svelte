<script>
	import '../app.css';
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>{page.data.title || 'Local Business Directory'}</title>
	<meta
		name="description"
		content={page.data.description || 'Find local businesses in your area'}
	/>
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={page.url.href} />
	<meta property="og:title" content={page.data.title || 'Local Business Directory'} />
	<meta
		property="og:description"
		content={page.data.description || 'Find local businesses in your area'}
	/>
	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={page.data.title || 'Local Business Directory'} />
	<meta
		name="twitter:description"
		content={page.data.description || 'Find local businesses in your area'}
	/>
</svelte:head>

<div class="min-h-screen flex flex-col">
	<main class="flex-1 max-w-7xl mx-auto px-4 py-6 w-full">
		<slot />
	</main>

	<footer class="py-6 border-t border-gray-200 mt-auto">
		<div class="max-w-7xl mx-auto px-4 text-center text-gray-600">
			<p>© {new Date().getFullYear()} Local Business Directory</p>
		</div>
	</footer>
</div>
