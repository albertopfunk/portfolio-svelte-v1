<script>
	import { projectSectionData } from "../../data/projectsStore.js";

	export let projectsPosition;
</script>

<section id="projects">
	<h2>Hello Projects</h2>

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
		padding-top: 10px;
		text-align: center;
	}

	article {
		height: 75vh;
		width: 100%;
	}
</style>
