<script>
	export let data;

	const project = data.props.currentProject;
	let { name, description, showcase } = project;
</script>

{#if name}
	<section class="text-text w-screen h-auto flex flex-col items-center pt-48 gap-24">
		<h1 class="font-bold text-6xl uppercase text-center">
			{name}
		</h1>
		<div class="w-full h-auto flex flex-col md:flex-row px-6 gap-12">
			<div class="md:w-1/2 flex flex-col items-center">
				<p class="max-w-md text-xl">
					{description}
				</p>
			</div>
			<div class="md:w-1/2 flex flex-col items-center justify-center">
				<img src={showcase} alt={name} />
			</div>
		</div>
	</section>
{:else}
	<section class="w-screen h-screen flex flex-col items-center justify-center text-text">
		No project found...
	</section>
{/if}
