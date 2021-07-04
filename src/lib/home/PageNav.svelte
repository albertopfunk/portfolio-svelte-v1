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
		<li class={currentSection === "intro" ? "current" : ""}>
			<a href="#intro">
				<span> Intro </span>
			</a>
		</li>
		<li class={currentSection === "projects" ? "current" : ""}>
			<a href="#projects"><span>Projects</span></a>
		</li>
		<li class={currentSection === "contact" ? "current" : ""}>
			<a href="#contact"><span>Contact</span></a>
		</li>
	</ul>
</nav>

<style>
	nav {
		position: fixed;
		bottom: 0;
		left: 50%;
		transform: translate(-50%, 0);
		z-index: 20;
		width: 90%;
		overflow: hidden;
		border-top-left-radius: 15px;
		border-top-right-radius: 15px;
		background: linear-gradient(
			to bottom,
			hsla(60, 100%, 60.98%, 0.9) 0%,
			hsla(59.18, 100%, 61.01%, 0.9) 8.1%,
			hsla(56.86, 100%, 61.08%, 0.9) 15.5%,
			hsla(53.25, 100%, 61.18%, 0.9) 22.5%,
			hsla(48.58, 100%, 61.32%, 0.9) 29%,
			hsla(43.05, 100%, 61.49%, 0.9) 35.3%,
			hsla(36.88, 100%, 61.67%, 0.9) 41.2%,
			hsla(30.29, 100%, 61.86%, 0.9) 47.1%,
			hsla(23.51, 100%, 62.06%, 0.9) 52.9%,
			hsla(16.78, 100%, 62.25%, 0.9) 58.8%,
			hsla(10.36, 100%, 62.43%, 0.9) 64.7%,
			hsla(4.5, 100%, 62.6%, 0.9) 71%,
			hsla(359.47, 100%, 62.4%, 0.9) 77.5%,
			hsla(355.84, 100%, 60.08%, 0.9) 84.5%,
			hsla(353.71, 100%, 58.57%, 0.9) 91.9%,
			hsla(352.99, 100%, 58.04%, 0.9) 100%
		);
	}

	ul {
		height: 100%;
		display: flex;
	}

	li {
		padding: 5px 0;
		flex-grow: 1;
	}

	li.current {
		background-color: rgba(39, 2, 69,.5);
	}

	a {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
