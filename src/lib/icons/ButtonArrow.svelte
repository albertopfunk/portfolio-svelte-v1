<script>
	let styles = {
		"icon-fill": "white",
		"icon-height": "1.3rem",
		"icon-width": "1.3rem",
		"icon-rotate": "rotate(90deg)"
	};

	$: cssVarStyles = Object.entries(styles)
		.map(([key, value]) => `--${key}:${value}`)
		.join(";");
</script>

<svg style={cssVarStyles} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
	><path
		d="M8.094 2.814L17.186 12l-9.092 9.186-1.244-1.207L14.829 12 6.85 4.021l1.244-1.207zM8.122 0L4 4l8 8-8 8 4.122 4L20 12 8.122 0z"
	/></svg
>

<style>
	svg {
		fill: var(--icon-fill, currentColor);
		width: var(--icon-width, 1rem);
		height: var(--icon-height, 1rem);
		transform: var(--icon-rotate, rotate(90deg));
	}
</style>
