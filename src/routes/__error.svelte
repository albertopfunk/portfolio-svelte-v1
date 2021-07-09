<svelte:head>
	<title>Error Page | Alberto</title>
</svelte:head>

<main>
	<h1>Error Page</h1>
	<div class="main-container">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="-3 -3 107 107">
			<polygon points="0,0 100,0 50,100" />
		</svg>
		<div class="text-container">
			<p>hello error. this is how text will look with max chars.</p>
		</div>
	</div>
</main>

<style>
	main {
		min-height: 100vh;
		text-align: center;
	}

	h1 {
		text-shadow: 7px 7px 0px var(--darkest-violet-color);
	}

	.main-container {
		width: 90%;
		margin: 0 auto;
	}

	svg {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: auto;
		max-height: 75vh;
		fill: transparent;
		stroke: rgba(var(--red-value), 0.6);
		stroke-width: 2px;
		filter: drop-shadow(6px 6px 0px var(--darker-violet-color));
	}

	.text-container {
		border: solid;
		padding-top: min(30px, 5%);
		width: 90%;
		max-width: 600px;
		margin: 0 auto;
	}
</style>
