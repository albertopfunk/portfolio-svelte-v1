<script>
	// todo
	// smooth scroll w reduced motion no preference
	// css hover,focus

	// active/selected
	// active/selected will be when user clicks on link
	// current/selected will be when user is currently on that section
	// both will have selected styles
	// only current will change url
	// u can prob have subtle active/current styles to show what is the current url section,
  // if none on url = no 'current' styles
	export let currentSection;
</script>

<nav aria-label="page-nav">
	<ul>
		<li>
			<a href="#intro" class={currentSection === "intro" ? "current" : ""}
				>Intro</a
			>
		</li>
		<li>
			<a href="#projects" class={currentSection === "projects" ? "current" : ""}
				>Projects</a
			>
		</li>
		<li>
			<a href="#contact" class={currentSection === "contact" ? "current" : ""}
				>Contact</a
			>
		</li>
	</ul>
</nav>

<style>
	nav {
		position: fixed;
		top: 50%;
		right: 2%;
		z-index: 10;
	}

	.current {
		border: solid;
	}
</style>
