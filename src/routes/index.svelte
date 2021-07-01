<script>
	import PageNav from "../components/home/PageNav.svelte";
	import IntroSection from "../components/home/IntroSection.svelte";
	import ProjectsSection from "../components/home/ProjectsSection.svelte";
	import ContactSection from "../components/home/ContactSection.svelte";

	let currentSection = null;
</script>

<svelte:head>
	<title>Welcome</title>
</svelte:head>

<h1>Hello and welcome to my site!</h1>
<PageNav {currentSection} />
<IntroSection />
<ProjectsSection />
<ContactSection />

<style>
  
</style>