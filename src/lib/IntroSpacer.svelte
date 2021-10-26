<script>
	import TwitterIcon from "$lib/icons/TwitterIcon.svelte";
	import LinkedinIcon from "$lib/icons/LinkedinIcon.svelte";
	import GithubIcon from "$lib/icons/GithubIcon.svelte";
	import ScrollDownArrow from "$lib/icons/ScrollDownArrow.svelte";
</script>

<div class="spacer-container">
	<div class="spacer-item">
		<a href="https://twitter.com/albertopfunk" target="_blank" rel="noreferrer">
			<span>
				<span class="visually-hidden">twitter profile. opens in new tab</span>
				<TwitterIcon hidden lightViolet />
			</span>
		</a>

		<a
			href="https://www.linkedin.com/in/albertopfunk/"
			target="_blank"
			rel="noreferrer"
		>
			<span>
				<span class="visually-hidden">linkedin profile. opens in new tab</span>
				<LinkedinIcon hidden lightViolet />
			</span>
		</a>
	</div>

	<div class="spacer-item">
		<a href="#about-me" class="scroll-link">
			<span>
				<span class="visually-hidden">about me section</span>
				<ScrollDownArrow hidden />
			</span>
		</a>
	</div>

	<div class="spacer-item">
		<a href="https://github.com/albertopfunk" target="_blank" rel="noreferrer">
			<span>
				<span class="visually-hidden">github profile. opens in new tab</span>
				<GithubIcon hidden lightViolet />
			</span>
		</a>
	</div>
</div>

<style lang="scss">
	.spacer-container {
		width: 100%;
		height: clamp(45px, 8vw, 90px);
		height: 8vw;
		min-height: 45px;
		max-height: 90px;
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

		& :global(a:focus svg.repeat-violet) {
			fill: url("#violet-repeat-gradient");
		}

		& :global(a:focus svg.lightViolet) {
			fill: url("#violet-gradient");
		}
	}
</style>
