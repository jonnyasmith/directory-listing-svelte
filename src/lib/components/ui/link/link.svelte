<script lang="ts" module>
	import { base } from '$app/paths';
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	import { type VariantProps, tv } from 'tailwind-variants';

	export const linkVariants = tv({
		base: 'text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring [&_svg]:size-4 [&_svg]:shrink-0',
		variants: {
			variant: {
				default: 'text-primary',
				destructive: 'text-destructive',
				muted: 'text-muted-foreground hover:text-muted-foreground/80'
			}
		},
		defaultVariants: {
			variant: 'default'
		}
	});

	export type LinkVariant = VariantProps<typeof linkVariants>['variant'];

	export type LinkProps = WithElementRef<HTMLAnchorAttributes> & {
		variant?: LinkVariant;
	};
</script>

<script lang="ts">
	import { cn } from '$lib/utils';

	let {
		class: className,
		variant = 'default',
		ref = $bindable(null),
		href = '#',
		children,
		...restProps
	}: LinkProps = $props();
</script>

<a
	bind:this={ref}
	class={cn(linkVariants({ variant }), className)}
	href={`${base}${href}`}
	{...restProps}
>
	{@render children?.()}
</a>
