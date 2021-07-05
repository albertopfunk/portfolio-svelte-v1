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
			<a href="#about-me">
				<span>About Me</span>
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
		bottom: 8px;
		left: 50%;
		transform: translate(-50%, 0);
		z-index: 20;
		width: 90%;
		overflow: hidden;
		background-color: rgb(	39, 2, 69);
		border: 1px solid rgb(254,255,56);
		outline: 1px solid rgb(254,255,56);
		outline-offset: 3px;
		box-shadow: 0 0 20px rgba(254, 255, 56, .8);	
	}

	ul {
		height: 100%;
		display: flex;
	}

	li {
		padding: 5px 0;
		flex-grow: 1;
		border-right: 1px solid rgb(254,255,56);
	}

	li:last-child {
		border-right: none;
	}

	li.current {
		color: rgb(254,24,211);
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

</style>
