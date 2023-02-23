<script lang="ts">
	import { serialize, type RichTextType } from 'lib/html';

	export let richText: RichTextType[] | undefined;
	export let prose = true;
</script>

{#if richText}
	<div class={prose ? 'prose prose-invert' : 'rich-text'}>
		{@html serialize(richText)}
	</div>
{/if}
