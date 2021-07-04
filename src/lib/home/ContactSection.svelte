<script>
	export let contactPosition;
</script>

<section id="contact" data-section="contact" bind:this={contactPosition}>
	<h2>Hello Contact</h2>
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
