<script lang="ts">
	import { page } from '$app/state';
	import { businesses } from '$lib/data';
	import { base } from '$app/paths';

	const business = businesses.find((b) => b.id === Number(page.params.id));

	// Handle 404
	if (!business) throw new Error('Business not found');
</script>

<h1>{business.name}</h1>
<p><strong>Category:</strong> {business.category}</p>
<p><strong>Address:</strong> {business.address}</p>
<p><strong>Phone:</strong> {business.phone}</p>
<a href="{base}/">Back to Directory</a>

<style>
	p {
		margin: 0.5rem 0;
	}
	a {
		color: #007bff;
	}
</style>
