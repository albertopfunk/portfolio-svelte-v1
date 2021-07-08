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

<nav
	aria-label="page-nav"
	class:intro={currentSection === "intro"}
	class:projects={currentSection === "projects"}
	class:contact={currentSection === "contact"}
>
	<ul>
		<li class:current={currentSection === "intro"}>
			<a href="#about-me">
				<span>About Me</span>
			</a>
		</li>
		<li class:current={currentSection === "projects"}>
			<a href="#projects"><span>Projects</span></a>
		</li>
		<li class:current={currentSection === "contact"}>
			<a href="#contact"><span>Contact</span></a>
		</li>
	</ul>
</nav>

<style>
	nav {
		position: fixed;
		bottom: 8px;
		left: 50%;
		transform: translate(-50%, 0);
		z-index: 30;
		width: 90%;
		overflow: hidden;
		background-color: var(--dark-violet-color);
		border: 1px solid var(--yellow-color);
		outline: 1px solid var(--yellow-color);
		outline-offset: 3px;
		box-shadow: 0 0 20px rgba(var(--yellow-value), 0.8);
	}

	nav.intro {
		border-color: var(--violet-color);
		outline-color: var(--violet-color);
		box-shadow: 0 0 20px rgba(var(--violet-value), 0.8);
	}

	nav.projects {
		border-color: var(--lighter-violet-color);
		outline-color: var(--lighter-violet-color);
		box-shadow: 0 0 20px rgba(var(--lighter-violet-value), 0.8);
	}

	nav.contact {
		border-color: var(--darker-magenta-color);
		outline-color: var(--darker-magenta-color);
		box-shadow: 0 0 20px rgba(var(--darker-magenta-value), 0.8);
	}

	ul {
		height: 100%;
		display: flex;
	}

	li {
		padding: 5px 0;
		flex-grow: 1;
		border-right: 1px solid var(--yellow-color);
	}

	nav.intro li {
		border-color: var(--violet-color);
	}

	nav.projects li {
		border-color: var(--lighter-violet-color);
	}

	nav.contact li {
		border-color: var(--darker-magenta-color);
	}

	li:last-child {
		border-right: none;
	}

	li.current {
		color: var(--yellow-color);
	}

	a {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	a:hover {
		text-decoration: underline;
		text-decoration-thickness: 2px;
	}

	@media (prefers-reduced-motion: no-preference) {
		nav {
			transition: all 0.5s ease-out;
		}
	}
</style>
