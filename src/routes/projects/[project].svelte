<script context="module">
	export const load = ({ page }) => {
		const project = page.params.project;
		const paramsCheck = {
			"tech-profiles": "Tech Profiles",
			nomcue: "NomCue",
			portfolio: "Portfolio",
			"rollup-start-fresh": "Rollup Start Fresh"
		};

		if (!paramsCheck[project]) {
			return {
				status: 404,
				error: new Error(`Could not find ${project}`)
			};
		}

		return {
			props: {
				project: {
					param: project,
					name: paramsCheck[project]
				}
			}
		};
	};
</script>

<script>
	export let project;
</script>

<svelte:head>
	<title>{project.name} Project | Alberto</title>
</svelte:head>

<main>
	<h1>{project.name} page</h1>
	<p>Under construction</p>
</main>

<style>
	main {
		min-height: 100vh;
	}
</style>
