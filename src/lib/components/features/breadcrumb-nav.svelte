<script lang="ts">
	import { page } from '$app/state';
	import { config } from '$lib/config';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb';
	import HomeIcon from '@lucide/svelte/icons/home';
	import ChevronRightIcon from '@lucide/svelte/icons/chevron-right';
	import type { BreadcrumbItem } from '$lib/types';
</script>

{#if page.data.breadcrumbs.length > 0}
	<div class="py-4">
		<Breadcrumb.Root>
			<Breadcrumb.List>
				{#each page.data.breadcrumbs as item, index}
					<Breadcrumb.Item>
						{#if item.href}
							<Breadcrumb.Link href={item.href}>
								{item.label}
							</Breadcrumb.Link>
						{:else}
							<Breadcrumb.Page>
								{item.label}
							</Breadcrumb.Page>
						{/if}
						{#if index < page.data.breadcrumbs.length - 1}
							<Breadcrumb.Separator />
						{/if}
					</Breadcrumb.Item>
				{/each}
			</Breadcrumb.List>
		</Breadcrumb.Root>
	</div>
{/if}
