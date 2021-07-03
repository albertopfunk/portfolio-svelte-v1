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
		left: 0;
		right: 0;
		top: 92%;
		z-index: 10;
		background-color: rgba(11, 3, 43, 0.95);
	}

	ul {
		height: 100%;
		display: flex;
	}

	li {
		flex-grow: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		border: solid 1px transparent;
		border-top-color: rgb(89, 170, 202);
		border-right-color: rgb(89, 170, 202);
	}

	li:last-child {
		border-right-color: transparent;
	}

	li.current {
		border: solid 1px yellow;
	}

	a {
		flex-grow: 1;
		text-align: center;
	}

	@media (min-width: 1000px) {
		nav {
			top: 0;
			left: 70%;
		}

		ul {
			flex-direction: column;
		}

		li {
			border: solid 1px transparent;
			border-left-color: rgb(89, 170, 202);
			border-bottom-color: rgb(89, 170, 202);
		}

		li:last-child {
			border-bottom-color: transparent;
		}

		a {
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}

	@media (min-width: 1450px) {
		nav {
			left: 60%;
		}
	}

	@media (min-width: 2050px) {
		nav {
			left: 50%;
		}
	}
</style>
