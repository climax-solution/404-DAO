<script lang="ts">
	import type { Page } from '$lib/payload-types';
	import BlockRenderer from 'components/BlockRenderer.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

</script>

<!-- <main class="px-10 pt-24"> -->
<BlockRenderer blocks={data.page.sections} />
<!-- </main> -->
