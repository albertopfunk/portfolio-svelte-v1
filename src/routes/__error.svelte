<script context="module">
	export const load = ({ error, status }) => {
		return {
			props: {
				error,
				status
			}
		};
	};
</script>

<script>
	import ContentSpacer from "$lib/ContentSpacer.svelte";

	export let error;
	export let status;
</script>

<svelte:head>
	<title>{status === 404 ? "Page Not Found" : "Error Page"} | Alberto</title>
</svelte:head>

<main>
	<div class="title-container">
		<ContentSpacer size="sm" />
		<h1>{status === 404 ? "Page Not Found" : "Error Page"}</h1>
		<p>{error.message}</p>
	</div>
	<div class="main-container">
		<div class="background-container">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="-3 -3 107 107">
				<polygon points="0,0 100,0 50,100" />
			</svg>
		</div>

		<div class="text-container">
			<p>{status === 404 ? "404" : "Error"}</p>
		</div>
	</div>
</main>

<style>
	main {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10vh;
		text-align: center;
	}

	h1 {
		text-shadow: 7px 7px 0px var(--darkest-violet-color);
	}

	.main-container {
		width: 90%;
		max-width: 650px;
		display: grid;
		grid-template-columns: 1fr;
	}

	.main-container div {
		grid-row-start: 1;
		grid-column-start: 1;
	}

	svg {
		width: 100%;
		height: auto;
		fill: transparent;
		stroke: rgba(var(--dark-magenta-value), 1);
		stroke-width: 1px;
		filter: drop-shadow(0 0 10px rgba(var(--red-value), 0.8));
	}

	.text-container {
		width: 90%;
		height: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 auto;
	}

	.text-container p {
		font-family: "Pacifico", Comic Sans MS, cursive;
		letter-spacing: 2.5px;
		font-size: 2.369rem;
		text-shadow: 0 0 10px var(--red-color);
	}

	@media (min-width: 350px) {
		.text-container p {
			font-size: 3rem;
		}
	}

	@media (min-width: 650px) {
		.text-container p {
			font-size: 5rem;
		}
	}

	@media (min-width: 1250px) {
		.text-container p {
			font-size: 7rem;
		}
	}
</style>
