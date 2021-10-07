<script context="module">
	export const prerender = true;
</script>

<script>
	import { onMount } from "svelte";
	import { browser } from "$app/env";

	import PageNav from "$lib/home/PageNav.svelte";
	import HeroIntro from "$lib/home/HeroIntro.svelte";
	import IntroSection from "$lib/home/IntroSection.svelte";
	import ProjectsSection from "$lib/home/ProjectsSection.svelte";
	import ContactSection from "$lib/home/ContactSection.svelte";
	import PalmTreesSpacer from "$lib/PalmTreesSpacer.svelte";
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
	<HeroIntro bind:heroPosition />
	<ContentSpacer size="xlg-d" />
	<IntroSection bind:introPosition {unObserveEl} />
	<PalmTreesSpacer />
	<ContentSpacer size="lg" />
	<ProjectsSection bind:projectsPosition />
	<PalmTreesSpacer />
	<ContentSpacer size="lg" />
	<ContactSection bind:contactPosition />
</main>
