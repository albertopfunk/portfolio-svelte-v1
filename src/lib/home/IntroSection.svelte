<script>
	export let introPosition;
</script>

<section id="intro" data-section="intro" bind:this={introPosition}>
	<h2>Hello Intro</h2>
</section>

<style>
	section {
		height: 100vh;
		width: 100%;
	}

	@media (min-width: 1000px) {
		section {
			padding-right: 30%;
		}
	}

	@media (min-width: 1450px) {
		section {
			padding-right: 40%;
		}
	}

	@media (min-width: 2050px) {
		section {
			padding-right: 50%;
		}
	}
</style>
