<script lang="ts">
	import type { GenericBlock } from 'lib/blocks';
	import Block from './blocks/Block.svelte';

	export let blocks: GenericBlock[];
	console.log(blocks);
</script>

{#each blocks as block}
	<Block data={block} />
{/each}
