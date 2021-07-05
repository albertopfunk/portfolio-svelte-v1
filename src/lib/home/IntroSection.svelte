<script>
	export let introPosition;
</script>

<section id="about-me" data-section="intro" bind:this={introPosition}>
	<h2>About Me</h2>
</section>

<style>
	section {
		height: 100vh;
		width: 100%;
		padding-top: 15px;
		text-align: center;
	}

	h2 {
		color: rgb(251, 247, 255);
		-webkit-text-fill-color: rgb(251, 247, 255);
		-webkit-text-stroke-width: 0.01px;
		-webkit-text-stroke-color: rgba(66, 6, 241, 0.9);
		text-shadow: 6px 6px 0px #19012c;
	}
</style>
