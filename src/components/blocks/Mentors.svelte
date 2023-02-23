<script lang="ts">
	import type { BlockByType } from 'lib/types';
	import Common from './common/Common.svelte';

	export let mentors: BlockByType<'mentorsBlock'>;
</script>

<Common>
	<ul class="grid grid-cols-1 sm:grid-cols-2 gap-8">
		{#each mentors as mentor}
			<li class="flex items-center justify-center p-8 border border-white flex-col gap-8" data-aos="flip-left" data-aos-duration="2000">
				<img 
					class="rounded-full bg-gray-800 w-60 h-60"
					src={mentor.person.image.url}
					alt={mentor.person.name}
				/>
				{mentor.person.name}
				<br/>
				{mentor.person.title} - {mentor.person.organization}
				<br/>
				<br/>
				{mentor.person.description}
			</li>
		{/each}
	</ul>
</Common>
