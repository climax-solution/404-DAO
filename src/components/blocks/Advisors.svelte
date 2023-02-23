<script lang="ts">
	import type { BlockByType } from 'lib/types';
	import Common from './common/Common.svelte';

	export let advisors: BlockByType<'advisorsBlock'>;
</script>

<Common>
	<ul class="grid grid-cols-1 sm:grid-cols-2 gap-8">
		{#each advisors as advisor}
			<li class="flex items-center justify-center p-8 border border-white flex-col gap-8" data-aos="fade-up" data-aos-duration="2100">
				<img 
					class="rounded-full bg-gray-800 w-60 h-60"
					src={advisor.person.image.url}
					alt={advisor.person.name}
				/>
				{advisor.person.name}
				<br/>
				{advisor.person.title} - {advisor.person.organization}
				<br/>
				<br/>
				{advisor.person.description}
			</li>
		{/each}
	</ul>
</Common>
