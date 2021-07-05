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
	<title>Project Not Found</title>
</svelte:head>

<main>
	<h1>Projects not found</h1>
	<p>projects list</p>
</main>
