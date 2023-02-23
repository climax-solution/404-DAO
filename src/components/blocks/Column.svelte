<script lang="ts">
	import type { RichTextType } from 'lib/html';
	import RichText from './RichText.svelte';

	export let columns: {
		title?: RichTextType[];
		description?: RichTextType[];
		// Can we get a button type?
		primary: {
			buttonDisplayText?: string;
			buttonUrl?: string;
		};
		formatOption?: 'transparent' | 'border' | 'card'; // interesting
		// the idea for card is that is has either border and/or background
	}[];

	const formatToClassName = (format: string | undefined) => {
		switch (format) {
			case 'transparent':
				return 'bg-transparent';
			case 'border':
				return 'border border-gray-200';
			case 'card':
				return 'bg-white shadow-lg text-black';
			default:
				return '';
		}
	};
</script>

<!-- TODO: dynamic grid count -->
<div class="grid grid-cols-1 md:grid-cols-4 gap-4" data-aos="fade-up" data-aos-duration="3000">
	{#each columns as column}
		{@const format = column.formatOption}

		<div class="{formatToClassName(format)} p-2 flex flex-col justify-between gap-4">
			<div class="p-2">
				<RichText richText={column.title} prose={false} />
				<RichText richText={column.description} prose={false} />
			</div>

			<a
				href={column.primary.buttonUrl}
				class="hover:bg-white font-mono hover:text-black p-2 border border-white text-center"
				>{column.primary.buttonDisplayText}
			</a>
		</div>
	{/each}
</div>
