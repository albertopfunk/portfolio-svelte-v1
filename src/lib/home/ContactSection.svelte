<script>
	export let contactPosition;
</script>

<section id="contact" data-section="contact" bind:this={contactPosition}>
	<h2>Get in Touch</h2>
	<div class="mountains-container">
		<svg
			class="mountains"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="1 91 1437 230"
		>
			<path
				d="M0,128L144,224L288,128L432,256L576,96L720,160L864,288L1008,128L1152,128L1296,160L1440,96L1440,320L1296,320L1152,320L1008,320L864,320L720,320L576,320L432,320L288,320L144,320L0,320Z"
			/>
		</svg>

		<svg
			class="mountains-bg"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="1 91 1437 230"
		>
			<path
				d="M0,64L130.9,224L261.8,128L392.7,192L523.6,256L654.5,96L785.5,128L916.4,192L1047.3,96L1178.2,128L1309.1,224L1440,64L1440,320L1309.1,320L1178.2,320L1047.3,320L916.4,320L785.5,320L654.5,320L523.6,320L392.7,320L261.8,320L130.9,320L0,320Z"
			/>
		</svg>
	</div>
</section>

<style>
	section {
		min-height: 100vh;
		width: 100%;
		padding-top: 15px;
		padding-bottom: 20%;
		text-align: center;
	}

	h2 {
		color: var(--yellow-color);
		-webkit-text-fill-color: var(--yellow-color);
		-webkit-text-stroke-width: 0.5px;
		-webkit-text-stroke-color: var(--darker-magenta-color);
		text-shadow: 5px 5px 0px var(--darkest-violet-color);
	}

	.mountains-container {
		position: absolute;
		bottom: 0;
		z-index: 20;
		width: 100%;
		height: 10%;
		background-color: var(--darker-violet-color);
	}

	.mountains {
		width: 100%;
		height: auto;
		position: absolute;
		bottom: 90%;
		left: 0;
		z-index: 20;
		fill: var(--darker-violet-color);
	}

	.mountains-bg {
		width: 100%;
		height: auto;
		position: absolute;
		bottom: 100%;
		left: 0%;
		z-index: 15;
		fill: var(--dark-violet-color);
		fill-opacity: 0.1;
	}

	@media (min-width: 850px) {
		section {
			padding-bottom: 15%;
		}
	}

	@media (min-width: 1250px) {
		.mountains {
			bottom: 80%;
		}
		.mountains-bg {
			bottom: 90%;
		}
	}

	@media (min-width: 1650px) {
		.mountains {
			bottom: 65%;
		}
		.mountains-bg {
			bottom: 75%;
		}
	}
</style>
