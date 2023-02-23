<!-- copy pasta from columns -->
<section class="partners-section max-w-screen-lg lg:max-w-screen-xl mx-auto container space-y-4 min-h-screen flex flex-col justify-center">
	<slot />
</section>

<style lang="scss">
	.partners-section {
		:global(h1) {
			@apply font-mono text-base font-normal uppercase text-center;
		}
	}
</style>