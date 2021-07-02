<script context="module">
	export const load = ({ page }) => {
		const project = page.params.project;
		// check project matches or 404 page

		return {
			props: {
				project
			}
		};
	};
</script>

<script>
	export let project;
</script>

<svelte:head>
	<title>Project</title>
</svelte:head>

<main>
	<h1>Project!</h1>
	<p>{project}</p>
</main>
