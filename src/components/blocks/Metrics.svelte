<script lang="ts">
	import type { RichTextType } from 'lib/html';
	import RichText from './RichText.svelte';

	export let metrics: {
		value?: RichTextType[];
		description?: RichTextType[];
	}[];
</script>

<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
	{#each metrics as metric}
		<div class="p-2 flex flex-col justify-between gap-4">
			<div class="p-2">
				<RichText richText={metric.value} prose={false} />
				<RichText richText={metric.description} prose={false} />
			</div>
		</div>
	{/each}
</div>
