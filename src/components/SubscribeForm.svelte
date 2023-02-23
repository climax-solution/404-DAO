<script lang="ts">
	import { enhance } from '$app/forms';

	let submitted = false;
</script>

<div class="bg-white py-6 px-6 max-w-lg mx-auto text-black">
	<h3 class="text-3xl font-semibold">Stay up to date</h3>
	<form
		action="/contact"
		method="POST"
		use:enhance={() => {
			return ({ result, update }) => {
				if (result.status === 200) {
					submitted = true;
				}
				update();
			};
		}}
	>
		{#if submitted}
			<div class="py-4">Thank you for subscribing! ❤️</div>
		{:else}
			<div class="flex gap-4 w-full justify-between mt-4">
				<input
					type="email"
					name="email"
					class="flex-grow border-b border-gray-200 focus:border-black outline-none"
					placeholder="Email"
				/>
				<input type="hidden" name="type" value="subscribe" />
				<button type="submit" class="button primary">Get Updates</button>
			</div>
		{/if}
	</form>
</div>
