<script>
	import oned from '$lib/assets/1D.png';
	import foreme from '$lib/assets/4ME.png';
	import gol from '$lib/assets/GOL.png';
	import lk from '$lib/assets/lemonkiss.png';
	import designfest from '$lib/assets/designfestivalen.png';
	import Button from '$lib/components/Button.svelte';
	import { ChevronLeftIcon } from 'lucide-svelte';
	import ProjectShowcase from '../../lib/components/ProjectShowcase.svelte';
</script>

<section class="w-full h-full flex flex-col gap-12 pt-48 text-text">
	<div class="w-full h-auto flex flex-col items-center justify-center gap-3">
		<h1 class="text-7xl uppercase font-title">PROJECTS OF JOSHUA SAITONG</h1>
		<p class="text-2xl">Click on a poster to see project</p>
	</div>
	<div class="w-full h-auto flex items-center justify-center">
		<div class="w-full max-w-4xl flex flex-col items-center gap-6">
			<ProjectShowcase />

			<div class="w-full h-auto flex items-center justify-start pl-14">
				<a
					class="border-4 text-text px-24 py-4 rounded-lg flex items-center justify-center gap-4 font-bold uppercase text-xl"
					href="/"
				>
					<ChevronLeftIcon />
					Back</a
				>
			</div>
		</div>
	</div>
</section>
