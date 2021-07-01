<script>
	import PageNav from "../components/home/PageNav.svelte";
	import IntroSection from "../components/home/IntroSection.svelte";
	import ProjectsSection from "../components/home/ProjectsSection.svelte";
	import ContactSection from "../components/home/ContactSection.svelte";

	let currentSection = null;
  let introPosition;
  let projectsPosition;
  let contactPosition;
</script>

<svelte:head>
	<title>Welcome</title>
</svelte:head>

<h1>Hello and welcome to my site!</h1>
<PageNav {currentSection} />
<IntroSection bind:introPosition />
<ProjectsSection bind:projectsPosition />
<ContactSection bind:contactPosition />

<style>

</style>