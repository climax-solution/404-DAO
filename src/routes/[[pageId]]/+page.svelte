<script lang="ts">
	import type { Page } from '$lib/payload-types';
	import AOS from 'aos';
	import BlockRenderer from 'components/BlockRenderer.svelte';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	onMount(() => {
        AOS.refresh();
	})

</script>

<!-- <main class="px-10 pt-24"> -->
<BlockRenderer blocks={data.page.sections} />
<!-- </main> -->
