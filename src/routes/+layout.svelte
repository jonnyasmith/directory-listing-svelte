<script>
	import '../app.css';
	import { page } from '$app/state';
	import { Button } from '$lib/components/ui/button';
	import { config } from '$lib/config';
</script>

<svelte:head>
	<title>{page.data.title || config.seoTitle}</title>
	<meta name="description" content={page.data.description || config.seoDescription} />
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={page.url.href} />
	<meta property="og:title" content={page.data.title || config.seoTitle} />
	<meta property="og:description" content={page.data.description || config.seoDescription} />
	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={page.data.title || config.seoTitle} />
	<meta name="twitter:description" content={page.data.description || config.seoDescription} />
</svelte:head>

<div class="flex min-h-svh flex-col">
	<header class="border-b border-border bg-[#10172a]">
		<div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
			<div class="flex items-center">
				<!-- Logo placeholder - you can replace with actual logo component later -->
				<div class="text-xl font-bold text-foreground">{config.siteName}</div>
			</div>
			<div class="flex items-center space-x-8">
				<nav>
					<ul class="flex space-x-8">
						<li>
							<a href="/by-region" class="font-medium text-foreground hover:text-primary"
								>{config.navLocationLabel}</a
							>
						</li>
						<li>
							<a href="/about" class="font-medium text-foreground hover:text-primary"
								>{config.navAboutLabel}</a
							>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</header>

	<main class="w-full flex-1">
		<slot />
	</main>

	<footer class="bg-gray-100">
		<div class="mx-auto max-w-7xl px-4 py-6">
			<p class="text-center">© {new Date().getFullYear()} {config.siteName}</p>
		</div>
	</footer>
</div>
