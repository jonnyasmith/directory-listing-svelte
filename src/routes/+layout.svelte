<script>
	import '../app.css';
	import { page } from '$app/state';
	import { Button } from '$lib/components/ui/button';
	import { config } from '$lib/config';
	import { base } from '$app/paths';
	import { ModeWatcher, toggleMode, mode } from 'mode-watcher';
	import SunIcon from '@lucide/svelte/icons/sun';
	import MoonIcon from '@lucide/svelte/icons/moon';

	function toggleTheme() {
		toggleMode();
	}
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

<ModeWatcher />
<div class="flex min-h-svh flex-col">
	<header class="bg-header border-b border-border">
		<div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
			<div class="flex items-center">
				<!-- Logo placeholder - you can replace with actual logo component later -->
				<a href="{base}/" class="transition-colors hover:text-primary">
					<div class="text-header-foreground text-xl font-bold">{config.siteName}</div>
				</a>
			</div>
			<div class="flex items-center space-x-8">
				<nav>
					<ul class="flex items-center space-x-8">
						<li>
							<a
								href="{base}/by-region"
								class="text-header-foreground font-medium hover:text-primary"
								>{config.navLocationLabel}</a
							>
						</li>
						<li>
							<a href="{base}/about" class="text-header-foreground font-medium hover:text-primary"
								>{config.navAboutLabel}</a
							>
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

	<main class="w-full flex-1">
		<slot />
	</main>

	<footer class="bg-header text-header-foreground">
		<div class="mx-auto max-w-7xl px-4 py-6">
			<p class="text-center">© {new Date().getFullYear()} {config.siteName}</p>
		</div>
	</footer>
</div>
