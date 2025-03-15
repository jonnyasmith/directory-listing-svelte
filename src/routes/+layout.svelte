<script>
	import '../app.css';
	import { Button } from '$lib/components/ui/button';
	import { config } from '$lib/config';
	import { page } from '$app/state';
	import { Link } from '$lib/components/ui/link';
	import { ModeWatcher, toggleMode, mode } from 'mode-watcher';
	import SunIcon from '@lucide/svelte/icons/sun';
	import MoonIcon from '@lucide/svelte/icons/moon';
	import { generateOrganizationJsonLd, generateWebsiteJsonLd } from '$lib/utils';
	import BreadcrumbNav from '$lib/components/features/breadcrumb-nav.svelte';

	function toggleTheme() {
		toggleMode();
	}

	// Determine if this is the homepage
	let isHomepage = $derived(page.url.pathname === '/');

	// Generate structured data
	let websiteJsonLd = $derived(generateWebsiteJsonLd(page.url.href));
	let organizationJsonLd = $derived(generateOrganizationJsonLd(page.url.href));

	// Base URL for canonical links - in production this would be your actual domain
	// For local development, we'll use the current origin
	let baseUrl = $derived(page.url.origin);

	// Canonical URL (full URL including pathname)
	let canonicalUrl = $derived(`${baseUrl}${page.url.pathname}`);

	// Social media image URL (you should replace this with your actual image path)
	let socialImageUrl = $derived(`${baseUrl}/social-share.jpg`);
</script>

<svelte:head>
	<!-- Basic Meta Tags -->
	<title>{page.data.title || config.seoTitle}</title>
	<meta name="description" content={page.data.description || config.seoDescription} />
	<meta name="author" content={config.siteName} />
	<meta name="robots" content="index, follow" />
	<meta
		name="keywords"
		content={`${config.itemPlural}, ${config.itemSingular} directory, local ${config.itemPlural}`}
	/>

	<!-- Canonical URL -->
	<link rel="canonical" href={canonicalUrl} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={page.url.href} />
	<meta property="og:title" content={page.data.title || config.seoTitle} />
	<meta property="og:description" content={page.data.description || config.seoDescription} />
	<meta property="og:image" content={socialImageUrl} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:locale" content="en_US" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={page.url.href} />
	<meta name="twitter:title" content={page.data.title || config.seoTitle} />
	<meta name="twitter:description" content={page.data.description || config.seoDescription} />
	<meta name="twitter:image" content={socialImageUrl} />

	<!-- Resource Hints -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="dns-prefetch" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />

	<!-- Alternate Languages -->
	<link rel="alternate" hreflang="en" href={canonicalUrl} />

	<!-- JSON-LD Structured Data -->
	{#if isHomepage}
		{@html `<script type="application/ld+json">${JSON.stringify(websiteJsonLd)}</script>`}
		{@html `<script type="application/ld+json">${JSON.stringify(organizationJsonLd)}</script>`}
	{/if}
</svelte:head>

<ModeWatcher />
<div class="flex min-h-svh flex-col">
	<header class="border-b border-border bg-header">
		<div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
			<div class="flex items-center">
				<!-- Logo placeholder - you can replace with actual logo component later -->
				<Link href="/" class="transition-colors hover:text-primary">
					<div class="text-xl font-bold text-header-foreground">{config.siteName}</div>
				</Link>
			</div>
			<div class="flex items-center space-x-8">
				<nav>
					<ul class="flex items-center space-x-8">
						<li>
							<Link href="/by-region" class="font-medium text-header-foreground hover:text-primary">
								{config.navLocationLabel}
							</Link>
						</li>
						<li>
							<Link href="/about" class="font-medium text-header-foreground hover:text-primary">
								{config.navAboutLabel}
							</Link>
						</li>
						<li>
							<Button
								variant="ghost"
								size="icon"
								class="text-header-foreground"
								onclick={toggleTheme}
							>
								{#if $mode === 'dark'}
									<SunIcon class="h-8 w-8" />
								{:else}
									<MoonIcon class="h-8 w-8" />
								{/if}
							</Button>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</header>

	<main class="w-full flex-1" id="main-content">
		<slot />
	</main>

	<footer class="bg-header text-header-foreground">
		<div class="mx-auto max-w-7xl px-4 py-6">
			<p class="text-center">© {new Date().getFullYear()} {config.siteName}</p>
		</div>
	</footer>
</div>
