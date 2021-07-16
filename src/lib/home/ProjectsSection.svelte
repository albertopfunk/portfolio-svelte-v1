<script>
	import { projectSectionData } from "../../data/projectsStore.js";

	export let projectsPosition;
</script>

<section id="projects" bind:this={projectsPosition} data-section="projects">
	<h2>Current Projects</h2>

	{#each $projectSectionData as project, index}
		<article>
			<div class="title-container">
				<div class="background">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="-3 -3 105 85">
						<polygon points="0,0 100,0 50,75" />
					</svg>
				</div>

				<div class="title">
					<h3>{project.name}</h3>

					<a href={project.siteUrl}>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
							><path
								d="M21 13v10H0V4h12v2H2v15h17v-8h2zm3-12H13.012l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07L24 12V1z"
							/></svg
						>
					</a>

					<a href={project.githubUrl}>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
							><path
								d="M0 0v24h24V0H0zm14.534 19.59c-.406.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.311-1.588-.824-2.147.083-.202.357-1.016-.079-2.117 0 0-.671-.215-2.198.82A7.603 7.603 0 0012 7.868a7.643 7.643 0 00-2.003.269c-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118a3.092 3.092 0 00-.824 2.147c0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385A8 8 0 0112 4a8 8 0 012.534 15.59z"
							/></svg
						>
					</a>
				</div>
			</div>

			<div class="body-container">
				<img src={project.mediaUrl} alt="" height="450px" width="550px" />

				<h4>Description</h4>
				<p>{project.description}</p>

				<h4>Features</h4>
				<p>{project.features}</p>

				<h4>Tech list</h4>
				<dl>
					{#each project.tech as tech}
					<dt>{tech.name}</dt>
					<dd>{tech.description}</dd>	
					{/each}
				</dl>
			</div>
		</article>
	{/each}
</section>

<style lang="scss">
	section {
		width: 100%;
		padding: 15px 0 20%;
		text-align: center;

		@media (min-width: 850px) {
			padding-bottom: 15%;
		}
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

	.title-container {
		width: -moz-fit-content;
		width: fit-content;
		display: grid;
		grid-template-columns: 1fr;
		margin: 0 auto;

		div {
			grid-row-start: 1;
			grid-column-start: 1;
		}

		.background {
			svg {
				width: 100%;
				max-width: 350px; /*fit-content fallback*/
				height: auto;
				fill: transparent;
				stroke: rgba(var(--red-value), 0.5);
				stroke-width: 1px;
				filter: drop-shadow(2px 2px 0 rgba(var(--darkest-violet-value), 0.8));

				@media (min-width: 650px) {
					max-width: 450px;
				}
				@media (min-width: 1250px) {
					max-width: 550px;
				}
			}
		}

		.title {
			padding: 15px 20px 0;

			@media (min-width: 650px) {
				padding: 15px 100px 0;
			}

			svg {
				width: 2rem;
				height: auto;
				fill: var(--lighter-violet-color);

				&:hover {
					fill: var(--red-color)
				}

				@media (min-width: 650px) {
					width: 2.5rem;
				}
			}
		}
	}
</style>
