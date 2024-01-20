<script>
	import { Instagram, Linkedin } from 'lucide-svelte';
</script>

<footer class="flex flex-col w-full h-80 bg-background text-text mt-48">
	<div class="w-full flex items-center justify-center h-16 mb-12">
		<div class="w-1/5 h-full flex items-center justify-center border-b-2 text-3xl font-bold">
			<p>CONTACT</p>
		</div>
	</div>
	<div
		class="w-full h-auto flex-col md:flex-row items-center md:items-center flex uppercase font-bold"
	>
		<div class="w-1/2 h-auto flex flex-col items-center justify-center">
			<div class="flex flex-col max-w-md gap-8">
				<p>Please take action and contact and togerther we can bring your ideas to life.</p>
				<p>Looking forward to working with you</p>
			</div>
		</div>
		<div class="w-1/2 h-auto flex flex-col items-center justify-center">
			<div class="flex flex-col max-w-md gap-8">
				<p>email: Joshuasaitong77@gmail.com</p>
				<div class="flex gap-16">
					<a
						href="/"
						class="flex w-10 h-10 bg-text text-background rounded items-center justify-center"
					>
						<Instagram />
					</a>
					<a
						href="/"
						class="flex w-10 h-10 font-black text-xl bg-text text-background rounded items-center justify-center"
					>
						G
					</a>
					<a
						href="/"
						class="flex w-10 h-10 bg-text text-background rounded items-center justify-center"
					>
						<Linkedin fill="black" />
					</a>
				</div>
			</div>
		</div>
	</div>
</footer>
