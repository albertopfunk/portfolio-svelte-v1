<div>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 75">
		<defs>
			<linearGradient
				id="RepeatGradient"
				gradientTransform="rotate(90)"
				spreadMethod="repeat"
				x1="0"
				x2="15%"
			>
				<stop offset="0%" stop-color="rgb(251, 247, 255)" />
				<stop offset="10%" stop-color="rgba(222, 190, 253, .7)" />
				<stop offset="20%" stop-color="rgba(66, 6, 241, .5)" />
				<stop offset="50%" stop-color="transparent" />
			</linearGradient></defs
		>
		<polygon points="0,0 100,0 50,75" fill="url('#RepeatGradient')" />
	</svg>
</div>

<style>
	div {
		width: 100%;
		height: 15vh;
		text-align: center;
	}
	svg {
		height: 75%;
		width: auto;
	}

	@media (max-width: 1250px) {
		div {
			display: none;
		}
	}
</style>
