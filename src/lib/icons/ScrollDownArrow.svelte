<script>
	export let hidden = false;
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 100 75"
	aria-hidden={hidden}
>
	<defs>
		<linearGradient
			id="RepeatGradient"
			gradientTransform="rotate(90)"
			spreadMethod="repeat"
			x1="0"
			x2="15%"
		>
			<stop offset="0%" stop-color="rgba(var(--lighter-violet-value), 0.7)" />
			<stop offset="10%" stop-color="rgba(var(--light-violet-value), 0.8)" />
			<stop offset="20%" stop-color="rgba(var(--violet-value), 0.5)" />
			<stop offset="50%" stop-color="transparent" />
		</linearGradient></defs
	>
	<polygon points="0,0 100,0 50,75" fill="url('#RepeatGradient')" />
</svg>
