<script>
	import ContentSpacer from "$lib/ContentSpacer.svelte";
	export let contactPosition;

	const submitStates = {
		idle: "idle",
		success: "success",
		error: "error"
	};
	let contactForm;
	let submitStatus = submitStates.idle;
	async function handleSubmit() {
		let formData = new FormData(contactForm);
		return fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: new URLSearchParams(formData).toString()
		})
			.then(() => {
				contactForm.reset();
				submitStatus = submitStates.success;
			})
			.catch((error) => {
				console.error("Error", error);
				submitStatus = submitStates.error;
			});
	}

	function resetOnSuccess() {
		if (submitStatus === submitStates.success) {
			submitStatus = submitStates.idle;
		}
	}
</script>

<section id="contact" data-section="contact" bind:this={contactPosition}>
	<h2>Get in Touch</h2>
	<ContentSpacer size="sm" />
	<p>
		I'm currently looking for opportunities where I will be able to learn and
		grow as a developer with great teammates and mentorship. I love and believe
		in the web, I am especially interested in roles where I get to work on
		complex UIs and web apps, usability, and different aspects of the web.
	</p>
	<form
		name="home-contact-form"
		bind:this={contactForm}
		on:submit|preventDefault={handleSubmit}
		netlify
		netlify-honeypot="bot-field"
	>
		<input type="hidden" name="form-name" value="home-contact-form" />
		<div style="display: none;">
			<label for="bot">Enter:</label>
			<input type="text" id="bot" name="bot-field" />
		</div>
		<div>
			<label for="name">Name:</label>
			<ContentSpacer size="xsm" />
			<input type="text" id="name" name="name" autocomplete="name" required on:focus={resetOnSuccess} />
		</div>
		<div>
			<label for="email">Email:</label>
			<ContentSpacer size="xsm" />
			<input
				type="email"
				id="email"
				name="email"
				autocomplete="email"
				required
				on:focus={resetOnSuccess}
			/>
		</div>
		<div>
			<label for="message">Message:</label>
			<ContentSpacer size="xsm" />
			<textarea name="message" id="message" rows="10" required on:focus={resetOnSuccess} />
		</div>
		<div>
			<button
				class:success={submitStatus === submitStates.success}
				class:error={submitStatus === submitStates.error}
				type="submit"
			>
				{#if submitStatus === submitStates.idle}
					Send
				{/if}

				{#if submitStatus === submitStates.success}
					Success!
				{/if}

				{#if submitStatus === submitStates.error}
					Error, retry
				{/if}
			</button>
		</div>
	</form>
	<div
		class="visually-hidden"
		aria-live="polite"
		aria-atomic="true"
		aria-relevant="additions"
	>
		{#if submitStatus === submitStates.success}
			successfully submitted form
		{/if}

		{#if submitStatus === submitStates.error}
			error submitting form, try again
		{/if}
	</div>
	<div class="mountains-container">
		<svg
			class="mountains"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="1 91 1437 230"
		>
			<path
				d="M0,128L144,224L288,128L432,256L576,96L720,160L864,288L1008,128L1152,128L1296,160L1440,96L1440,320L1296,320L1152,320L1008,320L864,320L720,320L576,320L432,320L288,320L144,320L0,320Z"
			/>
		</svg>

		<svg
			class="mountains-bg"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="1 91 1437 230"
		>
			<path
				d="M0,64L130.9,224L261.8,128L392.7,192L523.6,256L654.5,96L785.5,128L916.4,192L1047.3,96L1178.2,128L1309.1,224L1440,64L1440,320L1309.1,320L1178.2,320L1047.3,320L916.4,320L785.5,320L654.5,320L523.6,320L392.7,320L261.8,320L130.9,320L0,320Z"
			/>
		</svg>
	</div>
</section>

<style>
	section {
		min-height: 100vh;
		padding-bottom: 60%;
	}

	h2 {
		color: var(--yellow-color);
		-webkit-text-fill-color: var(--yellow-color);
		-webkit-text-stroke-width: 0.5px;
		-webkit-text-stroke-color: var(--darker-magenta-color);
		text-shadow: 5px 5px 0px var(--darkest-violet-color);
		text-align: center;
	}

	p {
		width: 95%;
		max-width: 500px;
		text-align: center;
		margin: 0 auto;
	}

	form {
		width: 95%;
		max-width: 500px;
		display: flex;
		flex-direction: column;
		gap: 20px;
		padding: 0 10px;
		margin: 0 auto;
		z-index: 21; /*+1 mountains svg*/
	}

	input,
	textarea {
		width: 100%;
		min-height: 35px;
		padding: 5px;
		background-color: var(--lighter-violet-color);
		border: 1px solid var(--darker-magenta-color);
		outline: 1px solid var(--darker-magenta-color);
		outline-offset: 3px;
		box-shadow: 0 0 20px rgba(var(--darker-magenta-value), 0.8);
		color: black;
	}

	:is(input, textarea):focus {
		border-color: var(--yellow-color);
		outline-color: var(--yellow-color);
		box-shadow: 0 0 5px rgba(var(--yellow-value), 0.8);
		outline-offset: 1;
	}

	button {
		padding: 5px 40px;
		background-color: var(--dark-violet-color);
		border: 1px solid var(--darker-magenta-color);
		outline: 1px solid var(--darker-magenta-color);
		outline-offset: 3px;
		box-shadow: 0 0 20px rgba(var(--darker-magenta-value), 0.8);
	}

	/* button.success {
		border-radius: 50%;
		padding: 10px 40px;
		outline: none;
		color: var(--dark-violet-color);
		box-shadow: 0 10px 20px rgba(245, 245, 245, 0.5);
	}

	button.success-move {
		transition: transform 2s ease-out;
		transform: translate(999px, 999px);
	} */

	button:focus,
	button:hover {
		border-color: var(--yellow-color);
		outline-color: var(--yellow-color);
		box-shadow: 0 0 5px rgba(var(--yellow-value), 0.8);
		outline-offset: 1;
		color: var(--yellow-color);
	}

	button:active {
		outline-offset: 0;
		box-shadow: unset;
		color: var(--lighter-violet-color);
	}

	.mountains-container {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 20;
		height: 10%;
		background-color: var(--darker-violet-color);
	}

	.mountains {
		width: 100%;
		height: auto;
		position: absolute;
		bottom: 90%;
		left: 0;
		z-index: 20;
		fill: var(--darker-violet-color);
	}

	.mountains-bg {
		width: 100%;
		height: auto;
		position: absolute;
		bottom: 100%;
		left: 0%;
		z-index: 19; /*-1 mountains svg*/
		fill: var(--dark-violet-color);
		fill-opacity: 0.1;
	}

	@media (min-width: 650px) {
		section {
			padding-bottom: 30%;
		}
	}

	@media (min-width: 1250px) {
		p,
		form {
			max-width: 650px;
		}
		.mountains {
			bottom: 80%;
		}
		.mountains-bg {
			bottom: 90%;
		}
	}

	@media (min-width: 1650px) {
		.mountains {
			bottom: 65%;
		}
		.mountains-bg {
			bottom: 75%;
		}
	}
</style>
