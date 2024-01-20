<script>
	import { projects } from '$lib/data.js';

	console.log(projects);
</script>

<section class="w-full h-auto flex flex-wrap items-center justify-between space-y-6 max-w-3xl">
	<!-- For each name in object -->
	{#each Object.entries(projects) as [name, project]}
		<a href={`/${name}`} class="flex group">
			<img
				src={project.image}
				alt="name"
				class="group-hover:scale-[1.02] duration-200 opacity-80 group-hover:opacity-100"
			/>
		</a>
	{/each}
</section>
