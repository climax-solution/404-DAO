<script lang="ts">
	type Button = {
		buttonDisplayText?: string;
		buttonUrl?: string;
	};

	export let primary: Button | undefined;
	export let secondary: Button | undefined;
	export let tertiary: Button | undefined;
</script>

<div class="flex gap-3 pt-10">
	{#if primary?.buttonDisplayText}
		<button class="button primary">
			{primary.buttonDisplayText}
		</button>
	{/if}

	{#if secondary?.buttonDisplayText}
		<button class="button secondary">
			{secondary.buttonDisplayText}
		</button>
	{/if}

	{#if tertiary?.buttonDisplayText}
		<button class="button tertiary">
			{tertiary.buttonDisplayText}
		</button>
	{/if}
</div>
