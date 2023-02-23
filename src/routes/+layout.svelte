<script lang="ts">
	import AOS from 'aos';
	import 'aos/dist/aos.css';
	import '../styles/app.scss';
	import type { Nav, Metadatum } from '$lib/payload-types';
	import Navbar from 'components/Navbar.svelte';
	import type { LayoutData } from './$types';
	export let data: LayoutData;
	import { onMount, setContext } from 'svelte';
	import Footer from 'components/Footer.svelte';

	setContext('nav', data.nav);
	setContext('meta', data.metadata);
	
	onMount(() => {
        AOS.init({
			easing: 'ease-out-back',
			duration: 1000,
			anchorPlacement: 'top-bottom'
		});
    });

</script>

<Navbar />

<slot />

<Footer />
