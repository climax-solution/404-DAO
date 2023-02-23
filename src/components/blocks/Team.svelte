<script lang="ts">
	import type { BlockByType } from 'lib/types';
	import Common from './common/Common.svelte';

	export let team: BlockByType<'teamBlock'>;
</script>

<Common>
	<ul class="grid grid-cols-1 sm:grid-cols-2 gap-8">
		{#each team as teamMember}
			<li class="flex items-center justify-center p-8 border border-white flex-col gap-8" data-aos="fade-up" data-aos-duration="2100">
				<img 
					class="rounded-full bg-gray-800 w-60 h-60"
					src={teamMember.person.image.url}
					alt={teamMember.person.name}
				/>
				{teamMember.person.name}
				<br/>
				{teamMember.person.title} - {teamMember.person.organization}
				<br/>
				<br/>
				{teamMember.person.description}
			</li>
		{/each}
	</ul>
</Common>
