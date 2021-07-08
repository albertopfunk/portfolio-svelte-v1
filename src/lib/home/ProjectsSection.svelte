<script>
	import { projectSectionData } from "../../data/projectsStore.js";

	export let projectsPosition;
</script>

<section id="projects">
	<h2>Current Projects</h2>

	<div class="flex-container">
		{#each $projectSectionData as project, index}
			<article data-section="projects" bind:this={projectsPosition[index]}>
				<h3>{project.name}</h3>
				<p>{project.description}</p>
				<!-- <a href="/projects/{project.slug}">{project.name}</a> -->
				<img src="project.image" alt="" />
			</article>
		{/each}
	</div>
</section>

<style>
	section {
		width: 100%;
		padding: 20px 10px 20%;
		text-align: center;
	}

	h2 {
		text-shadow: 5px 5px 0px var(--darkest-violet-color);
	}

	h3 {
		text-shadow: 5px 5px 0px var(--darkest-violet-color);
	}

	article {
		min-height: 75vh;
		width: 100%;
	}

	@media (min-width: 850px) {
		section {
			padding-bottom: 15%;
		}
	}
</style>
