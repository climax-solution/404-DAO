<script lang="ts">
	import { enhance } from '$app/forms';
	import type { Metadatum } from 'lib/payload-types';
	import { getContext } from 'svelte';
	import Icon from '@iconify/svelte';

	const metadata = getContext<Metadatum>('meta');
	let socials = [
		{
			url: metadata.twitter,
			icon: 'ph:twitter-logo-light'
		},
		{
			url: metadata.linkedIn,
			icon: 'ph:linkedin-logo'
		},
		{
			url: metadata.youtube,
			icon: 'ph:youtube-logo'
		},
		{
			url: metadata.discord,
			icon: 'ph:discord-logo'
		}
	];

	let submitted = false;
	let timeOut = null;
</script>

<footer class="text-black bg-white flex justify-between px-8 md:px-20 py-8 mt-20">
	<form
		action="/contact"
		class="flex flex-col"
		method="POST"
		use:enhance={() => {
			return ({ result, update }) => {
				if (result.status === 200) {
					submitted = true;
				} else if (result.status === 500) {
					alert(result.data.message);
				}
				update();
			};
		}}
	>
		<h2 class="font-bold text-2xl pb-4">Contact Us</h2>
		<input type="hidden" name="type" value="contact" />
		<input
			type="text"
			class="flex-grow border-black border-b-2 focus:border-gray-200 outline-none pt-2"
			placeholder="Name"
			name="name"
		/>
		<input
			type="text"
			class="flex-grow border-black border-b-2 focus:border-gray-200 outline-none pt-2"
			placeholder="Organization"
			name="organization"
		/>
		<input
			type="text"
			class="flex-grow border-black border-b-2 focus:border-gray-200 outline-none pt-2"
			placeholder="Email"
			name="email"
		/>
		<textarea
			placeholder="Send us a special message"
			name="message"
			id=""
			cols="30"
			rows="10"
			class="resize-none border-black border-b-2 focus:border-gray-200 outline-none pt-2"
		/>
		<button type="submit" class="button hover:bg-black hover:text-white">Submit</button>
		{#if submitted}
			{(timeOut = setTimeout(() => {
				submitted = false;
			}, 5000))}
			<div class="py-4 bg-green-300">
				Thank you! Someone from our team will get back to you soon!
			</div>
		{/if}
	</form>
	<ul class="flex gap-4">
		{#each socials as social}
			<li>
				<a
					class="bg-black hover:bg-transparent hover:text-black rounded-full w-10 h-10 flex items-center justify-center text-white"
					href={social.url}
					target="_blank"
					rel="noreferrer"
				>
					<Icon icon={social.icon} />
				</a>
			</li>
		{/each}
	</ul>
</footer>
