<script lang="ts">
	import type { Nav } from 'lib/payload-types';
	import { getContext } from 'svelte';

	const navData = getContext<Nav['links']>('nav');

	let navOpen = false;
</script>

<nav class="fixed flex justify-between px-10 w-full pt-4 pb-2 mix-blend-exclusion bg-opacity-90">
	<a href="/">
		<img
			src={'/404.png'}
			alt="404 DAO"
			class="aspect-video object-contain -mt-2"
			width="100px"
			height="75px"
		/>
	</a>

	<ul class="gap-4 font-semibold items-center hidden md:flex">
		{#each navData as nav}
			<li>
				<!-- TODO: check nav.url is safe -->
				<a href={nav.url} class="hover:font-light">
					{nav.text}
				</a>
			</li>
		{/each}
	</ul>

	<button on:click={() => (navOpen = !navOpen)} class="block md:hidden"> Open </button>

	{#if navOpen}
		<div class="absolute bg-black z-10 h-screen w-screen inset-0">
			<ul class="font-semibold items-center flex flex-col gap-8">
				{#each navData as nav}
					<li>
						<!-- TODO: check nav.url is safe -->
						<a href={nav.url}>
							{nav.text}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</nav>
