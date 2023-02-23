<script lang="ts">
	import type { Post } from '$lib/payload-types';
	import SubscribeForm from 'components/SubscribeForm.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<header class="pt-36 pb-8 bg-asdfwhite text-blackasdf">
	<h1 class="font-bold max-w-screen-lg px-10 mx-auto text-8xl text-center">Blog</h1>
</header>

<main class="px-10 pt-24 max-w-screen-2xl mx-auto space-y-16">
	<SubscribeForm />
	<ol class=" grid grid-cols-1 md:grid-cols-2 gap-16">
		{#each data.posts as post}
			{@const bannerImage = post.bannerImage.url}
			<a
				href={`/blog/${post.id}`}
				class="transition-all border border-white/10 hover:border-white/50 rounded overflow-hidden"
			>
				<img src={bannerImage} alt="" class="aspect-video object-cover w-full" />
				<div class="p-4">
					<h2 class="text-2xl">
						{post.title}
					</h2>
				</div>
			</a>
		{/each}
	</ol>
</main>
