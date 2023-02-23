<script lang="ts">
	import type { BlockByType } from 'lib/types';
	import Common from './common/Common.svelte';

	type PartnerBlock = BlockByType<'partnersBlock'>;
	export let partners: PartnerBlock;

</script>

<Common>
	<div class="flex flex-row justify-center pt-8">
		{#each partners as partner}
			<a href={partner.organization.link} target="_blank" rel="noreferrer" data-aos="fade-left">
				<img
					class="h-36 w-36 mx-6 grayscale hover:grayscale-0" 
					src={partner.organization.logo.url} 
					alt={partner.organization.logo.url}
				/>
			</a>
		{/each}
	</div>
</Common>
