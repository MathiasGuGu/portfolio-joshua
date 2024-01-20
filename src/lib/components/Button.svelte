<script>
	import { cn } from '$lib/utils';

	export let link;
</script>

<a
	href={link}
	class={cn({
		'border-4 border-text text-text rounded-lg px-16 md:px-32 py-4  md:text-4xl flex items-center justify-center': true
	})}
>
	<slot />
</a>
