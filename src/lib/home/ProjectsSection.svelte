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
		padding-top: 15px;
		text-align: center;
	}

	h2 {
		color: rgb(25, 1, 44);
		-webkit-text-fill-color: rgb(25, 1, 44);
		-webkit-text-stroke-width: 0.01px;
		-webkit-text-stroke-color: rgba(254, 255, 56, 0.6);
		text-shadow: 6px 6px 0px #19012c;
	}

	article {
		height: 75vh;
		width: 100%;
	}
</style>
