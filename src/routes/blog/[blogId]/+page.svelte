<script lang="ts">
	import type { Post } from '$lib/payload-types';
	import BlockRenderer from 'components/BlockRenderer.svelte';
	import type { PageData } from './$types';
	export let data: PageData;

	let post = data.post;

	const bannerUrl = (post.bannerImage as { url: string }).url;
</script>

<header
	style="background: linear-gradient(180.0deg, rgba(18,18,18,0.4) 0%, rgba(18,18,18,0.4) 20%,  rgba(0,0,0,0.0) 33%, rgba(0,0,0,0.0) 60%, rgba(23,23,23,1) 100%), url('{bannerUrl}'); backdrop-size: cover; background-size: cover; background-position: center"
	class="pb-40 pt-56"
>
	<div class="max-w-screen-2xl container px-10 mx-auto">
		<h1 class="text-7xl font-bold">
			{post.title}
		</h1>
	</div>
</header>

<article class="px-10 my-20 mx-auto max-w-screen-lg space-y-8">
	<a href="/blog">&larr; Blog</a>
	<BlockRenderer blocks={post.content} />
</article>
