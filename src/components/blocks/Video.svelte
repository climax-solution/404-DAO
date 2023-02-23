<script lang="ts">
	import Common from './common/Common.svelte';

	export let link: string;
	console.log('video block')
	console.log(link)
</script>

<Common>
	<iframe 
        title="YouTube video player"
        width="1000" 
        height="800" 
        src={link} 
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
    />
</Common>
