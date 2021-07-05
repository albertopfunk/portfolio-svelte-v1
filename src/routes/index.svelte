<script>
	import { onMount } from "svelte";
	import { browser } from "$app/env";
	import PageNav from "$lib/home/PageNav.svelte";
	import IntroSection from "$lib/home/IntroSection.svelte";
	import ProjectsSection from "$lib/home/ProjectsSection.svelte";
	import ContactSection from "$lib/home/ContactSection.svelte";
	import PalmTreesSpacer from "$lib/PalmTreesSpacer.svelte"

	let currentSection = null;
	let introPosition;
	let projectsPosition = [];
	let contactPosition;

	const options = {
		root: null,
		rootMargin: "0px",
		threshold: 0.7
	};

	if (browser) {
		// observe sections
		// set current section if 70% of it is in viewport
		const observer = new IntersectionObserver(onIntersection, options);

		onMount(() => {
			observer.observe(introPosition);
			projectsPosition.forEach((project) => observer.observe(project));
			observer.observe(contactPosition);
		});

		function onIntersection(entries, observer) {
			let current = entries.filter((entry) => entry.isIntersecting);

			if (current.length > 0) {
				// uses elements data-section value
				current = current[0].target.dataset.section;

				switch (current) {
					case "intro":
						currentSection = "intro";
						break;
					case "projects":
						currentSection = "projects";
						break;
					case "contact":
						currentSection = "contact";
						break;
					default:
						currentSection = null;
				}
			}
		}
	}
</script>

<svelte:head>
	<title>Alberto | Front-End Developer</title>
</svelte:head>

<PageNav {currentSection} />
<main>
	<div class="hero-intro">
		<h1 class="hero-heading">Alberto Funk</h1>
		<p class="hero-subheading">Front-End Developer</p>
		<div class="hero-sun" />
	</div>
	<PalmTreesSpacer />
	<IntroSection bind:introPosition />
	<PalmTreesSpacer />
	<ProjectsSection bind:projectsPosition />
	<PalmTreesSpacer />
	<ContactSection bind:contactPosition />
	<PalmTreesSpacer />
</main>

<style>
	.hero-intro {
		height: 35vh;
		overflow: hidden;
		text-align: center;
	}

	.hero-heading {
		z-index: 2;
		color: rgb(114,22,112);
		-webkit-text-fill-color: rgb(114,22,112);
		-webkit-text-stroke-width: .1px;
		-webkit-text-stroke-color: rgb(251,247,255);
	}

	.hero-subheading {
		color: ghostwhite;
		-webkit-text-fill-color: ghostwhite;
		-webkit-text-stroke-width: .5px;
		-webkit-text-stroke-color: rgba(114,22,112, .7);
	}

	.hero-sun {
		position: absolute;
		top: 40%;
		left: 50%;
    transform: translate(-50%, 0);
		width: 100%;
		height: auto;
		padding-top: 100%;
		border-radius: 50%;
		background: linear-gradient(
			to bottom,
			hsla(60, 100%, 60.98%, 0.6) 0%,
			hsla(59.18, 100%, 61.01%, 0.6) 8.1%,
			hsla(56.86, 100%, 61.08%, 0.6) 15.5%,
			hsla(53.25, 100%, 61.18%, 0.6) 22.5%,
			hsla(48.58, 100%, 61.32%, 0.6) 29%,
			hsla(43.05, 100%, 61.49%, 0.6) 35.3%,
			hsla(36.88, 100%, 61.67%, 0.6) 41.2%,
			hsla(30.29, 100%, 61.86%, 0.6) 47.1%,
			hsla(23.51, 100%, 62.06%, 0.6) 52.9%,
			hsla(16.78, 100%, 62.25%, 0.6) 58.8%,
			hsla(10.36, 100%, 62.43%, 0.6) 64.7%,
			hsla(4.5, 100%, 62.6%, 0.6) 71%,
			hsla(359.47, 100%, 62.4%, 0.6) 77.5%,
			hsla(355.84, 100%, 60.08%, 0.6) 84.5%,
			hsla(353.71, 100%, 58.57%, 0.6) 91.9%,
			hsla(352.99, 100%, 58.04%, 0.6) 100%
		);
		box-shadow: 0 5px 30px rgba(254, 255, 56, .8);		
	}

	@media (min-width: 400px) {
		.hero-intro {
			height: 40vh;
			padding-top: 10px;
		}

		.hero-sun {
			top: 35%;
		}
	}

	@media (min-width: 650px) {
		.hero-intro {
			height: 45vh;
		}

		.hero-sun {
			top: 30%;
		}
	}

	@media (min-width: 850px) {
		.hero-intro {
			height: 50vh;
		}

		.hero-sun {
			top: 25%;
		}
	}

	@media (min-width: 1050px) {
		.hero-intro {
			height: 65vh;
		}
	}

	@media (min-width: 1250px) {
		.hero-intro {
			height: 75vh;
		}
	}
</style>