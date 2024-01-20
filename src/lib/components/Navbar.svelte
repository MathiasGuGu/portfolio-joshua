<script>
	import Logo from './Logo.svelte';
</script>

<nav
	class="w-screen h-auto py-2 z-50 flex absolute top-0 left-0 items-center justify-between px-4 md:px-16 text-text"
>
	<Logo />
	<div class=" font-semibold md:text-xl flex gap-3 md:gap-12 flex-wrap">
		<a href="/projects">PROJECTS</a>
		<a href="/about">ABOUT</a>
		<a href="/contact">CONTACT</a>
	</div>
</nav>
