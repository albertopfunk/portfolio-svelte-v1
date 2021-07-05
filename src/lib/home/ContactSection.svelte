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
		padding-top: 15px;
		text-align: center;
	}

	h2 {
		color: rgb(254,255,56);
		-webkit-text-fill-color: rgb(254,255,56);
		-webkit-text-stroke-width: .02px;
		-webkit-text-stroke-color: ghostwhite
	}
</style>
