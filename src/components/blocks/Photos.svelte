<script lang="ts">
	import type { BlockByType } from 'lib/types';
	import Common from './common/Common.svelte';

	export let photos: BlockByType<'photoBlock'>;
	// console.log('photos block')
	// console.log(photos)
</script>

<!-- 	
	Would be cool if we can set the middle image to be the largest
	with the other two being smaller and grayscale on the left and right
	something like this:
	        _____________
	______ |             | ______
	|    | |             | |     |
	|    | |             | |     |
	______ |             | ______
	       |             |
		    _____________
-->
<Common>
	<ul class="grid grid-cols-4 gap-8">
		{#each photos as p}
			<li class="flex items-center justify-center p-8 borderflex-col gap-8">
				<img 
					class=""
					src={p.photo.url}
					alt=""
				/>
			</li>
		{/each}
	</ul>
</Common>
