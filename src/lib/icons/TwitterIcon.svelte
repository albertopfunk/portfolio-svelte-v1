<script>
	import SocialIcon from "./SocialIcon.svelte";

	export let hidden = false;
	export let lightViolet = false;
	export let redViolet = false;
</script>

<SocialIcon {hidden} {lightViolet} {redViolet}>
	<path
		d="M0 0v24h24V0H0zm18.862 9.237c.208 4.617-3.235 9.765-9.33 9.765A9.286 9.286 0 014.5 17.527a6.605 6.605 0 004.86-1.359 3.285 3.285 0 01-3.066-2.28 3.3 3.3 0 001.482-.056c-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411A3.289 3.289 0 015.613 6.6a9.32 9.32 0 006.766 3.43 3.285 3.285 0 015.594-2.993 6.568 6.568 0 002.085-.796 3.292 3.292 0 01-1.443 1.816A6.578 6.578 0 0020.5 7.54a6.707 6.707 0 01-1.638 1.697z"
	/>
</SocialIcon>
