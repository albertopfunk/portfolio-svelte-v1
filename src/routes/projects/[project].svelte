<script context="module">
	export const load = ({ page }) => {
		const project = page.params.project;
		const paramsCheck = {
			"tech-profiles": true,
			nomcue: true,
			portfolio: true,
			"rollup-start-fresh": true
		};

		if (!paramsCheck[project]) {
			return {
				status: 404,
				error: new Error(`Could not find ${project}`)
			};
		}

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
	<title>{project} Project | Alberto</title>
</svelte:head>

<main>
	<h1>{project} page</h1>
	<p>Under construction</p>
</main>

<style>
	main {
		min-height: 100vh;
	}
</style>