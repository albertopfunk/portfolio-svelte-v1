<script>
	export let size = "xsm";
</script>

<span
	class:xsm={size === "xsm"}
	class:sm={size === "sm"}
	class:md={size === "md"}
	class:lg={size === "lg"}
	class:xlg={size === "xlg"}
	class:xlg-d={size === "xlg-d"}
	class:xxlg={size === "xxlg"}
/>

<style lang="scss">
	span {
		display: block;
	}

	.xsm {
		height: 5px;
		min-height: 5px;
	}

	.sm {
		height: 10px;
		min-height: 10px;
	}

	.md {
		height: 15px;
		min-height: 15px;
	}

	.lg {
		height: 20px;
		min-height: 20px;
	}

	.xlg {
		height: 30px;
		min-height: 30px;
	}

	.xlg-d {
		height: 30px;
		min-height: 30px;

		@media (min-width: 1250px) {
			height: 40px;
			min-height: 40px;
		}
	}

	.xxlg {
		height: 60px;
		min-height: 60px;
	}
</style>
