<script lang="ts">
	import { setContext } from 'svelte';

	setContext('section', {
		type: 'first-fold'
	});
</script>

<section
	class="max-w-screen-lg lg:max-w-screen-xl mx-auto container space-y-4 min-h-screen flex flex-col justify-center"
>
	<slot />
</section>
