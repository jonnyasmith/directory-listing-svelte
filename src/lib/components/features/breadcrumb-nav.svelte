<script lang="ts">
	import { page } from '$app/state';
	import { config } from '$lib/config';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb';
	import HomeIcon from '@lucide/svelte/icons/home';
	import ChevronRightIcon from '@lucide/svelte/icons/chevron-right';
	import type { BreadcrumbItem } from '$lib/types';

	let { data } = $props();

	console.log(data);

	// Use the breadcrumb data from page data if available, otherwise generate fallback breadcrumbs
	let breadcrumbItems = $derived(
		page.data.breadcrumbs || generateFallbackBreadcrumbs(page.url.pathname, page.data)
	);

	// Fallback function to generate breadcrumbs from URL path if none are provided in page data
	function generateFallbackBreadcrumbs(pathname: string, pageData: any): BreadcrumbItem[] {
		const segments = pathname.split('/').filter(Boolean);
		const items: BreadcrumbItem[] = [{ label: 'Home', href: '/', icon: HomeIcon }];

		// No additional segments, just return home
		if (segments.length === 0) {
			return items;
		}

		// Handle known routes
		if (segments[0] === 'by-region') {
			items.push({ label: config.navLocationLabel, href: '/by-region' });
			return items;
		}

		if (segments[0] === 'about') {
			items.push({ label: config.navAboutLabel, href: '/about' });
			return items;
		}

		// Handle dynamic [region] routes
		if (segments.length >= 1 && pageData?.region) {
			items.push({
				label: pageData.region.name,
				href: `/${pageData.region.slug}`
			});
		}

		// Handle dynamic [region]/[locality] routes
		if (segments.length >= 2 && pageData?.locality) {
			items.push({
				label: pageData.locality.name,
				href: `/${segments[0]}/${segments[1]}`
			});
		}

		return items;
	}
</script>

{#if breadcrumbItems.length > 0}
	<div class="mx-auto w-full max-w-7xl px-4 py-3">
		<Breadcrumb.Root>
			<Breadcrumb.List>
				{#each breadcrumbItems as item, index}
					<Breadcrumb.Item>
						{#if index === breadcrumbItems.length - 1}
							<Breadcrumb.Page>
								{#if index === 0 && item.icon}
									<svelte:component this={item.icon} class="mr-1 h-4 w-4" />
								{/if}
								{item.label}
							</Breadcrumb.Page>
						{:else}
							<Breadcrumb.Link href={item.href}>
								{#if index === 0 && item.icon}
									<svelte:component this={item.icon} class="mr-1 h-4 w-4" />
								{/if}
								{item.label}
							</Breadcrumb.Link>
						{/if}

						{#if index < breadcrumbItems.length - 1}
							<Breadcrumb.Separator>
								<ChevronRightIcon class="h-4 w-4" />
							</Breadcrumb.Separator>
						{/if}
					</Breadcrumb.Item>
				{/each}
			</Breadcrumb.List>
		</Breadcrumb.Root>
	</div>
{/if}
