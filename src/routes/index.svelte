<script>
  import { onMount } from "svelte";
  import { browser } from '$app/env';
	import PageNav from "../components/home/PageNav.svelte";
	import IntroSection from "../components/home/IntroSection.svelte";
	import ProjectsSection from "../components/home/ProjectsSection.svelte";
	import ContactSection from "../components/home/ContactSection.svelte";

	let currentSection = null;
	let introPosition;
	let projectsPosition;
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
      observer.observe(projectsPosition);
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

<h1>Hello and welcome to my site!</h1>
<PageNav {currentSection} />
<IntroSection bind:introPosition />
<ProjectsSection bind:projectsPosition />
<ContactSection bind:contactPosition />

<style>
</style>
