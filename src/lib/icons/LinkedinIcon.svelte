<script>
	import SocialIcon from "./SocialIcon.svelte";

	export let hidden = false;
	export let lightViolet = false;
	export let redViolet = false;
</script>

<SocialIcon {hidden} {lightViolet} {redViolet}>
	<path
		d="M0 0v24h24V0H0zm8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.397-2.586 7-2.777 7 2.476V19z"
	/>
</SocialIcon>
