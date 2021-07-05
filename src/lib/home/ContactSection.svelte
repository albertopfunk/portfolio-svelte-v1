<script>
	export let contactPosition;
</script>

<section id="contact" data-section="contact" bind:this={contactPosition}>
	<h2>Hello Contact</h2>
	<div class="mountains-container">
		<svg class="mountains" xmlns="http://www.w3.org/2000/svg" viewBox="1 91 1437 230">
			<path fill="#19012c" fill-opacity="1" d="M0,128L144,224L288,128L432,256L576,96L720,160L864,288L1008,128L1152,128L1296,160L1440,96L1440,320L1296,320L1152,320L1008,320L864,320L720,320L576,320L432,320L288,320L144,320L0,320Z"></path>
		</svg>
	</div>
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

	.mountains-container {
    position: absolute;
		bottom: 0;
    width: 100%;
    height: 10%;
    background-color: #19012c;
  }

  .mountains {
    width: 100%;
    height: auto;
    position: absolute;
    bottom: 80%;
		left: 0;
    z-index: 10;
  }
</style>
