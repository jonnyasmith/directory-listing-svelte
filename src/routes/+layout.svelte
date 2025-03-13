<script>
	import '../app.css';
	import { page } from '$app/state';
	import { Button } from '$lib/components/ui/button';
</script>

<svelte:head>
	<title>{page.data.title || 'BestLinkedInTools'}</title>
	<meta
		name="description"
		content={page.data.description || 'Find the best LinkedIn tools for your needs'}
	/>
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={page.url.href} />
	<meta property="og:title" content={page.data.title || 'BestLinkedInTools'} />
	<meta
		property="og:description"
		content={page.data.description || 'Find the best LinkedIn tools for your needs'}
	/>
	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={page.data.title || 'BestLinkedInTools'} />
	<meta
		name="twitter:description"
		content={page.data.description || 'Find the best LinkedIn tools for your needs'}
	/>
</svelte:head>

	<meta
	<header class="border-b border-border bg-[#10172a]">
		<div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
			<div class="text-xl font-bold text-foreground">BestLinkedInTools</div>
			<div class="flex items-center space-x-4">
				<nav>
					<ul class="flex space-x-4">
						<li><a href="/" class="text-foreground hover:text-primary">Home</a></li>
						<li><a href="/categories" class="text-foreground hover:text-primary">Categories</a></li>
						<li><a href="/popular" class="text-foreground hover:text-primary">Popular</a></li>
						<li><a href="/blog" class="text-foreground hover:text-primary">Blog</a></li>
						<li><a href="/new" class="text-foreground hover:text-primary">New</a></li>
					</ul>
				</nav>
				<Button>Submit Tool</Button>
			</div>
		</div>
	</header>

	<main class="mx-auto w-full max-w-7xl flex-1 px-4 py-6">
		<slot />
	</main>
	<header class="border-b border-border bg-[#10172a]">
		<div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
			<div class="text-xl font-bold text-foreground">BestLinkedInTools</div>
			<p>© {new Date().getFullYear()} Local Business Directory</p>
		</div>
	</footer>
</div>
