<script lang="ts">
	import { page } from '$app/stores';
</script>

<main class="max-w-screen-lg mx-auto py-48 px-10">
	<h1 class="font-mono" style="font-size: 100px;">
		{$page.error?.message}
	</h1>
	<p>Not found</p>
</main>
