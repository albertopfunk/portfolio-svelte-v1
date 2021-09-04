<script>
	import TwitterIcon from "$lib/icons/TwitterIcon.svelte";
	import LinkedinIcon from "$lib/icons/LinkedinIcon.svelte";
	import GithubIcon from "$lib/icons/GithubIcon.svelte";
</script>

<div class="spacer-container">
	<div class="spacer-item">
		<a href="https://twitter.com/albertopfunk" target="_blank" rel="noreferrer">
			<span class="visually-hidden">twitter profile. opens in new tab</span>
			<TwitterIcon hidden />
		</a>

		<a
			href="https://www.linkedin.com/in/albertopfunk/"
			target="_blank"
			rel="noreferrer"
		>
			<span class="visually-hidden">linkedin profile. opens in new tab</span>
			<LinkedinIcon hidden />
		</a>
	</div>

	<div class="spacer-item">
		<a href="#about-me" class="scroll-link">
			<span class="visually-hidden">about me section</span>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 100 75"
				aria-hidden="true"
			>
				<defs>
					<linearGradient
						id="RepeatGradient"
						gradientTransform="rotate(90)"
						spreadMethod="repeat"
						x1="0"
						x2="15%"
					>
						<stop
							offset="0%"
							stop-color="rgba(var(--lighter-violet-value), 0.7)"
						/>
						<stop
							offset="10%"
							stop-color="rgba(var(--light-violet-value), 0.8)"
						/>
						<stop offset="20%" stop-color="rgba(var(--violet-value), 0.5)" />
						<stop offset="50%" stop-color="transparent" />
					</linearGradient></defs
				>
				<polygon points="0,0 100,0 50,75" fill="url('#RepeatGradient')" />
			</svg>
		</a>
	</div>

	<div class="spacer-item">
		<a href="https://github.com/albertopfunk" target="_blank" rel="noreferrer">
			<span class="visually-hidden">github profile. opens in new tab</span>
			<GithubIcon hidden />
		</a>
	</div>
</div>

<style lang="scss">
	.spacer-container {
		width: 100%;
		height: calc(40px + 90 * ((100vw - 300px) / 1300));
		max-height: 130px;
		display: flex;
		justify-content: center;
	}

	.spacer-item {
		flex-basis: 100%;
		display: flex;
		justify-content: space-evenly;
		align-items: flex-start;

		a {
			height: 75%;

			@media (min-width: 850px) {
				height: 65%;
			}

			@media (min-width: 1550px) {
				height: 55%;
			}
		}

		a.scroll-link {
			height: 100%;

			@media (min-width: 850px) {
				height: 90%;
			}

			@media (min-width: 1550px) {
				height: 75%;
			}
		}

		& :global(svg) {
			height: 100%;
			width: auto;
		}
	}
</style>
