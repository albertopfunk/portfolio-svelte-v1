<script>
	export let hidden = false;
	export let lightViolet = false;
	export let redViolet = false;
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 24 24"
	aria-hidden={hidden}
	class:lightViolet
	class:redViolet
>
	<defs>
		<linearGradient id="light-violet-gradient" gradientTransform="rotate(90)">
			<stop offset="0%" stop-color="rgba(var(--lighter-violet-value), 0.7)" />
			<stop offset="75%" stop-color="rgba(var(--light-violet-value), 0.8)" />
		</linearGradient></defs
	>
	<defs>
		<linearGradient id="violet-gradient" gradientTransform="rotate(90)">
			<stop offset="0%" stop-color="rgba(var(--light-violet-value), 0.7)" />
			<stop offset="75%" stop-color="rgba(var(--violet-value), 0.9)" />
		</linearGradient></defs
	>
	<slot />
</svg>

<style>
	svg {
		fill: var(--lighter-violet-color);
	}

	svg:hover {
		fill: var(--red-color);
	}

	svg.lightViolet {
		fill: url("#light-violet-gradient");
	}

	svg.lightViolet:hover {
		fill: url("#violet-gradient");
	}

	svg.redViolet {
		fill: var(--lighter-violet-color);
		filter: drop-shadow(0 0 10px rgba(var(--red-value), 0.8));
	}

	svg.redViolet:hover {
		fill: var(--red-color);
		filter: drop-shadow(0 0 10px rgba(var(--red-value), 0.5));
	}
</style>
