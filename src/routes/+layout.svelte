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

<main>
	<slot />
</main>

<footer>
	<p>© {new Date().getFullYear()} Local Business Directory</p>
</footer>

<style>
	main {
		max-width: 1200px;
		margin: 0 auto;
		padding: 1rem;
	}
	footer {
		text-align: center;
		margin-top: 2rem;
		padding: 1rem;
		border-top: 1px solid #eee;
	}
</style>
