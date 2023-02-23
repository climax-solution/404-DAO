<script lang="ts">
	import type { BlockByType } from 'lib/types';
	import Common from './common/Common.svelte';

	export let testimonies: BlockByType<'testimoniesBlock'>;
	export const getTestimonyId = (index: number) => `testimony-${index}`;
</script>

<div class="flex overflow-x-auto gap-6 snap-x snap-mandatory">
	{#each testimonies as t, index}
		<div 
			id="testimony-{index}"
			class="w-fit flex flex-shrink-0 snap-center flex-row items-center justify-center p-8 border border-white gap-8">
			<img 
				class="rounded-full bg-gray-800 w-60 h-60"
				src={t.testimony.image.url}
				alt={t.testimony.name}
			/>
			<div>
				<p class="pb-2 text-2xl font-bold">{t.testimony.name}</p>
				<p class="pb-2 text-lg font-light">{t.testimony.role}, {t.testimony.company}</p>
				"
				{t.testimony.description}
				"
			</div>
		</div>
	{/each}
</div>
<div class="flex mx-auto my-8">
	<ul>
		{#each testimonies as t, index}
			<li class="inline-block mx-2">
				<a 
					
					href={`#${getTestimonyId(index)}`}
				>
					<button class="bg-white w-4 h-4 rounded-full"></button>
				</a>
			</li>
		{/each}
	</ul>
</div>
