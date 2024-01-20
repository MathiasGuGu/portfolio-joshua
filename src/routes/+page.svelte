<script>
	import heroImage from '$lib/assets/portrait.png';
	import { ChevronUp } from 'lucide-svelte';
	import Carousel from '../lib/components/Carousel.svelte';
</script>

<a
	href="#top"
	class="w-12 h-12 border-4 border-text text-text rounded-full fixed right-36 bottom-32 z-50 flex items-center justify-center"
>
	<ChevronUp strokeWidth={3} />
</a>

<section id="top" class="flex items-center justify-center h-[850px] w-full overflow-hidden">
	<div class="w-full h-full relative flex items-center justify-center">
		<h1 class="z-40 text-7xl font-black text-center">JOSHUA SAITONG</h1>

		<div
			class="absolute bottom-0 left-0 bg-gradient-to-t from-background to-transparent w-full h-36 z-30"
		></div>
		<img
			src={heroImage}
			alt="Portrait of Joshua"
			class="w-full min-h-screen object-cover absolute top-0 left-0"
		/>
	</div>
</section>
<section
	class="flex flex-col items-center justify-center text-center w-full h-96 bg-background text-text"
>
	<div class="max-w-xl">
		<h2>Hello</h2>
		<p>
			My name is Joshua Saitong, and I specialize in assisting brands in establishing a distinctive
			presence in the digital age. Together, we can redefine industry norms. My primary objective is
			to serve as your representative in digital communications, effectively engaging with your
			desired demographic and target audience. I eagerly anticipate the opportunity to engage with
			you further.
		</p>
	</div>
</section>
<Carousel />
