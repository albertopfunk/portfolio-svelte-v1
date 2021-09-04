<script>
	import { onMount } from "svelte";
	import { browser } from "$app/env";

	import PageNav from "$lib/home/PageNav.svelte";
	import IntroSection from "$lib/home/IntroSection.svelte";
	import ProjectsSection from "$lib/home/ProjectsSection.svelte";
	import ContactSection from "$lib/home/ContactSection.svelte";
	import PalmTreesSpacer from "$lib/PalmTreesSpacer.svelte";
	import IntroSpacer from "$lib/IntroSpacer.svelte";
	import ContentSpacer from "$lib/ContentSpacer.svelte";

	let currentSection = null;
	let heroPosition;
	let introPosition;
	let projectsPosition;
	let contactPosition;

	const positions = {
		hero: null,
		intro: null,
		projects: null,
		contact: null
	};

	// dynamic threshold based on height of section
	function observeEl(el, key) {
		let threshold = 0.9;
		const elHeight = el.getBoundingClientRect().height;
		let th = threshold;

		if (elHeight > window.innerHeight * threshold) {
			th = ((window.innerHeight * threshold) / elHeight) * threshold;
		}

		const options = {
			root: null,
			rootMargin: "0px",
			threshold: th
		};

		positions[key] = new IntersectionObserver(onIntersection, options);
		positions[key].observe(el);
	}

	function onIntersection(entries, observer) {
		let current = entries.filter((entry) => entry.isIntersecting);
		if (current.length > 0) {
			// uses elements data-section value
			current = current[0].target.dataset.section;
			switch (current) {
				case "hero":
					currentSection = null;
					break;
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

	function unObserveEl(el, key) {
		positions[key].unobserve(el);
		observeEl(el, key);
	}

	if (browser) {
		// observe sections
		onMount(() => {
			observeEl(heroPosition, "hero");
			observeEl(introPosition, "intro");
			observeEl(projectsPosition, "projects");
			observeEl(contactPosition, "contact");
		});
	}
</script>

<svelte:head>
	<title>Alberto | Front-End Developer</title>
</svelte:head>

<PageNav {currentSection} />
<main>
	<div bind:this={heroPosition} data-section="hero">
		<div class="hero-intro">
			<ContentSpacer size="sm" />
			<h1 class="hero-heading">Alberto Preciado</h1>
			<p class="hero-subheading">Front-End Developer</p>
			<ContentSpacer size="xxlg-d" />
			<div class="hero-sun" />
		</div>
		<PalmTreesSpacer />
		<IntroSpacer />
	</div>
	<ContentSpacer size="xxlg-d" />
	<IntroSection bind:introPosition {unObserveEl} />
	<PalmTreesSpacer />
	<ContentSpacer size="lg" />
	<ProjectsSection bind:projectsPosition />
	<PalmTreesSpacer />
	<ContentSpacer size="lg" />
	<ContactSection bind:contactPosition />
</main>

<style>
	.hero-intro {
		height: 45vh;
		overflow: hidden;
		text-align: center;
		padding: 0 2px;
	}

	.hero-heading {
		text-shadow: 0 0 30px rgba(var(--yellow-value), 0.5),
			7px 7px 0px var(--darkest-violet-color);
	}

	.hero-subheading {
		line-height: 0.9;
		text-shadow: 0 0 30px rgba(var(--yellow-value), 0.8),
			1px 1px 0px var(--darkest-violet-color);
	}

	.hero-sun {
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
		box-shadow: 0 5px 30px rgba(var(--yellow-value), 0.8);
	}

	@media (min-width: 650px) {
		.hero-intro {
			height: 55vh;
		}

		.hero-subheading {
			line-height: 0.4;
			font-size: 1.333rem;
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

		.hero-subheading {
			line-height: 0;
			font-size: 1.777rem;
		}
	}
</style>
