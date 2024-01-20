<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import oned from '$lib/assets/1D.png';
	import threeu from '$lib/assets/3u_showcase.png';
	import foreme from '$lib/assets/4ME.png';
	import lemonkiss from '$lib/assets/lemonkiss.png';
	// Default theme
	import '@splidejs/svelte-splide/css';
	import Button from '$lib/components/Button.svelte';
</script>

<section class="w-full h-auto flex flex-col items-center justify-center">
	<Splide aria-label="My Favorite Images" class="md:w-2/3 h-[500px]">
		<SplideSlide class="flex items-center justify-center">
			<img src={oned} alt="Image 1" />
		</SplideSlide>
		<SplideSlide class="flex items-center justify-center">
			<img src={threeu} alt="Image 2" />
		</SplideSlide>
		<SplideSlide class="flex items-center justify-center">
			<img src={foreme} alt="Image 2" />
		</SplideSlide>
		<SplideSlide class="flex items-center justify-center">
			<img src={lemonkiss} alt="Image 2" />
		</SplideSlide>
	</Splide>

	<Button link="/projects">VIEW PROJECTS</Button>
</section>
