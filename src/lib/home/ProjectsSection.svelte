<script>
	import { projectSectionData } from "../../data/projectsStore.js";
	import GithubIcon from "$lib/icons/GithubIcon.svelte";
	import WebPageIcon from "$lib/icons/WebPageIcon.svelte";
	import ContentSpacer from "$lib/ContentSpacer.svelte";

	export let projectsPosition;
</script>

<section id="projects" bind:this={projectsPosition} data-section="projects">
	<h2>Current Projects</h2>
	<ContentSpacer size="sm" />
	{#each $projectSectionData as project, index}
		{#if index !== 0}
			<ContentSpacer size="xxlg" />
		{/if}
		<article>
			<div class="title-container">
				<div class="background">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="-3 -2 105 78">
						<polygon points="0,0 100,0 50,75" />
					</svg>
				</div>

				<div class="title">
					<h3>{project.name}</h3>
					<ContentSpacer size="sm" />
					<div class="title-links">
						{#if project.siteUrl}
							<a
								href={project.siteUrl}
								target="_blank"
								rel="noreferrer"
								class="link"
							>
								<span class="visually-hidden">visit site. opens in new tab</span
								>
								<WebPageIcon hidden redViolet />
							</a>
						{/if}

						{#if project.githubUrl}
							<a
								href={project.githubUrl}
								target="_blank"
								rel="noreferrer"
								class="link"
							>
								<span class="visually-hidden"
									>visit github repo. opens in new tab</span
								>
								<GithubIcon hidden redViolet />
							</a>
						{/if}
					</div>
				</div>
			</div>
			<ContentSpacer size="md" />
			<div class="description-container">
				<h4>Description</h4>
				<ContentSpacer size="xsm" />
				{#each project.description as paragraph, index}
					{#if index !== 0}
						<br />
					{/if}
					<p>{paragraph}</p>
				{/each}
			</div>
			<ContentSpacer size="xlg" />
			{#if project.mediaUrl?.startPath || project.features.length > 0}
				<div class="flex-container" class:even={index % 2 === 0}>
					{#if project.mediaUrl}
						<div class="image-container">
							<picture>
								<source
									srcSet={`${project.mediaUrl.startPath}c_scale,w_550${project.mediaUrl.endPath}.webp`}
									media="(max-width: 550px)"
								/>
								<source
									srcSet={`${project.mediaUrl.startPath}c_scale,w_550${project.mediaUrl.endPath}.png`}
									media="(max-width: 550px)"
								/>

								<source
									srcSet={`${project.mediaUrl.startPath}c_scale,w_750${project.mediaUrl.endPath}.webp`}
									media="(max-width: 750px)"
								/>
								<source
									srcSet={`${project.mediaUrl.startPath}c_scale,w_750${project.mediaUrl.endPath}.png`}
									media="(max-width: 750px)"
								/>

								<source
									srcSet={`${project.mediaUrl.startPath}c_scale,w_1050${project.mediaUrl.endPath}.webp`}
									media="(max-width: 1050px)"
								/>
								<source
									srcSet={`${project.mediaUrl.startPath}c_scale,w_1050${project.mediaUrl.endPath}.png`}
									media="(max-width: 1050px)"
								/>

								<source srcSet={`${project.mediaUrl.startPath}c_scale,w_1250${project.mediaUrl.endPath}.webp`} />
								<img
									src={`${project.mediaUrl.startPath}c_scale,w_1250${project.mediaUrl.endPath}.png`}
									alt=""
								/>
							</picture>
						</div>
					{/if}
					{#if project.features.length > 0}
						<div class="features-container">
							<h4>Features</h4>
							<ContentSpacer size="xsm" />
							<ul>
								{#each project.features as feature}
									<li>
										<span>
											{feature}
										</span>
									</li>
								{/each}
							</ul>
						</div>
					{/if}
				</div>
				<ContentSpacer size="xlg" />
			{/if}
			<div class="tech-container">
				<h4>Tech list</h4>
				<ContentSpacer size="xsm" />
				<dl>
					{#each project.tech as tech}
						<div class="list-items">
							<dt>{tech.name}</dt>
							<dd>{tech.description}</dd>
						</div>
					{/each}
				</dl>
			</div>
		</article>
	{/each}
</section>

<style lang="scss">
	section {
		padding-bottom: 20%;

		@media (min-width: 850px) {
			padding-bottom: 15%;
		}
	}

	h2,
	h3,
	h4,
	.title-container {
		text-align: center;
	}

	h2 {
		text-shadow: 0 0 30px rgba(var(--red-value), 0.5),
			7px 7px 0px var(--darkest-violet-color);
	}

	h3 {
		text-shadow: 4px 4px 0px var(--darkest-violet-color);
	}

	h4 {
		text-shadow: 3px 3px 0px var(--darkest-violet-color);
	}

	dt {
		text-shadow: 2px 2px 0px var(--darkest-violet-color);
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

		.background,
		.title {
			grid-row-start: 1;
			grid-column-start: 1;
		}

		.background {
			svg {
				width: 100%;
				max-width: 350px; /*fit-content fallback*/
				height: auto;
				fill: transparent;
				stroke: rgba(var(--dark-magenta-value), 1);
				stroke-width: 1px;
				filter: drop-shadow(0 0 10px rgba(var(--red-value), 0.8));

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
		}

		.title-links {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 10px;

			@media (min-width: 650px) {
				gap: 15px;
			}

			@media (min-width: 1250px) {
				gap: 20px;
			}

			.link {
				height: 2rem;
				width: 2rem;
				display: flex;

				@media (min-width: 650px) {
					height: 2.5rem;
					width: 2.5rem;
				}

				@media (min-width: 1250px) {
					height: 3rem;
					width: 3rem;
				}
			}

			& :global(a:focus svg.redViolet) {
				fill: var(--red-color);
				filter: drop-shadow(0 0 10px rgba(var(--red-value), 0.5));
			}

			& :global(svg) {
				width: 100%;
				height: auto;
			}
		}
	}

	.description-container {
		width: 95%;
		max-width: 600px;
		text-align: center;
		margin: 0 auto;

		@media (min-width: 1250px) {
			max-width: 700px;
		}
	}

	.flex-container {
		display: flex;
		flex-direction: column;
		gap: 30px;

		@media (min-width: 1050px) {
			flex-direction: row;
			align-items: center;
			gap: 20px;

			&.even {
				flex-direction: row-reverse;
			}
		}

		.image-container {
			@media (min-width: 1050px) {
				flex-basis: 60%;
			}
		}

		.features-container {
			width: 95%;
			margin: 0 auto;

			@media (min-width: 1050px) {
				flex-basis: 40%;
			}

			ul {
				display: flex;
				flex-direction: column;
				gap: 15px;

				@media (min-width: 650px) {
					flex-direction: row;
					flex-wrap: wrap;
					justify-content: center;
					gap: 30px;
				}
			}

			li {
				@media (min-width: 650px) {
					flex-basis: 45%;
					text-align: center;
				}

				span {
					padding-left: 1.5rem;

					&:before {
						content: " ";
						display: block;
						position: absolute;
						left: 0;
						top: 0;
						background-image: url("/static/projects-bullet.svg");
						background-size: 0.8rem 0.8rem;
						height: 0.8rem;
						width: 0.8rem;

						@media (min-width: 1250px) {
							background-size: 0.9rem 0.9rem;
							height: 0.9rem;
							width: 0.9rem;
						}
					}
				}
			}
		}
	}

	.tech-container {
		width: 95%;
		margin: 0 auto;

		@media (min-width: 1050px) {
			width: 100%;
			margin: 0;
		}

		dl {
			display: flex;
			flex-direction: column;
			gap: 25px;

			@media (min-width: 650px) {
				flex-direction: row;
				flex-wrap: wrap;
				justify-content: center;
				gap: 50px;
			}

			@media (min-width: 1250px) {
				gap: 75px;
			}
		}

		.list-items {
			@media (min-width: 650px) {
				flex-basis: 45%;
			}
			@media (min-width: 950px) {
				flex-basis: 40%;
			}
			@media (min-width: 1250px) {
				flex-basis: 35%;
			}
			@media (min-width: 1650px) {
				flex-basis: 25%;
			}

			dd {
				padding-left: 5px;
			}
		}
	}
</style>
