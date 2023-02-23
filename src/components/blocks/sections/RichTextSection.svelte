<!-- copy pasta from columns -->
<section class="max-w-screen-lg container mx-auto column-section space-y-4">
	<slot />
</section>

<style lang="scss">
	.column-section {
		:global(h1) {
			@apply font-mono text-base font-normal uppercase text-center;
		}
	}
</style>
