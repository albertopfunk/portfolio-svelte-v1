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
	export let error;
	export let status;

	console.log(error.message);
	console.log(status);
</script>

<svelte:head>
	<title>Project Not Found | Alberto</title>
</svelte:head>

<main>
	<h1>Project not found error page</h1>
	<p>Under construction</p>
</main>

<style>
	main {
		min-height: 100vh;
	}
</style>