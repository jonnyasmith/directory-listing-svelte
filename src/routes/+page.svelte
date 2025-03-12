<script lang="ts">
	import { businesses } from '$lib/data';
	import { base } from '$app/paths';
</script>

<h1>Local Business Directory</h1>

<ul>
	{#each businesses as business}
		<li>
			<a href={`${base}/listing/${business.id}`}>{business.name}</a> - {business.category}
		</li>
	{/each}
</ul>

<style>
	ul {
		list-style: none;
		padding: 0;
	}
	li {
		margin: 1rem 0;
	}
	a {
		color: #007bff;
		text-decoration: none;
	}
	a:hover {
		text-decoration: underline;
	}
</style>
