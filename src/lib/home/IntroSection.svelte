<script>
	import { afterUpdate, onMount } from "svelte";

	import ContentSpacer from "$lib/ContentSpacer.svelte";

	export let introPosition;
	export let unObserveEl;

	let introBioLength = "short";
	let currentHeight = null;

	onMount(() => {
		currentHeight = introPosition.getBoundingClientRect().height;
	});

	afterUpdate(() => {
		if (currentHeight === introPosition.getBoundingClientRect().height) {
			return;
		}

		// reset observer for height change
		unObserveEl(introPosition, "intro");
	});

	function chooseLength(event) {
		introBioLength = event.target.id;
	}
</script>

<section id="about-me" data-section="intro" bind:this={introPosition}>
	<h2>About Me</h2>
	<ContentSpacer size="sm" />
	<div class="bio-container">
		<div
			class="visually-hidden"
			aria-live="polite"
			aria-atomic="true"
			aria-relevant="text"
		>
			showing {introBioLength} bio
		</div>

		<form>
			<fieldset>
				<legend>Bio Length</legend>
				<div class="options-container">
					<div class="option">
						<input
							type="radio"
							name="bio-length"
							id="short"
							checked
							on:change={chooseLength}
						/>
						<label for="short">Short</label>
					</div>

					<div class="option">
						<input
							type="radio"
							name="bio-length"
							id="medium"
							on:change={chooseLength}
						/>
						<label for="medium">Medium</label>
					</div>

					<div class="option">
						<input
							type="radio"
							name="bio-length"
							id="long"
							on:change={chooseLength}
						/>
						<label for="long">Long</label>
					</div>
				</div>
			</fieldset>
		</form>

		<div class="text-container short" class:hidden={introBioLength !== "short"}>
			<ul class="text">
				<li>Started career in the healthcare industry.</li>
				<li>Tinkering with different web platforms over the years.</li>
				<li>Started coding by moving turtles with Python.</li>
				<li>Developed skills by attending Lambda School.</li>
				<li>
					Currently looking for opportunities to learn and grow as a developer.
				</li>
			</ul>
		</div>

		<div
			class="text-container medium"
			class:hidden={introBioLength !== "medium"}
		>
			<div class="text">
				<p>
					I worked most of my career as a dispatcher in the healthcare industry.
					I knew this wasn't a career I wanted though, to me it was more of a
					comfortable stable office job.
				</p>
				<p>
					Throughout the years I started tinkering with different things on the
					web, using different platforms like funnel platforms and Shopify. This
					introduced me to things like online marketing, sales, e-commerce, SEO,
					building pages, etc.
				</p>
				<p>
					I wanted to learn a valuable and actionable skill, this led me to
					software development. I started with Python, then moved into front-end
					development. The idea of being able to build almost anything I can
					think of drew me right in.
				</p>
				<p>
					I was self-learning but felt directionless. I wanted to start with a
					strong foundation. I found Lambda School and was accepted to their
					full-stack 9 month-long Bootcamp.
				</p>
				<p>
					I have been building and learning on the side since then. Now I am
					here working to break into this industry. I'm currently looking for
					opportunities where I will be able to learn and grow as a developer.
				</p>
			</div>
		</div>
		<div class="text-container long" class:hidden={introBioLength !== "long"}>
			<div class="text">
				<p>
					I started my career in the healthcare industry as an EMT(before that I
					worked random jobs, mostly in the food industry). Shortly after, I
					injured my back for lifting a patient without proper technique. I
					started dispatching there as light-duty while I healed. One week to
					heal, turned into 3 months to cover while they hired a new dispatcher,
					turned into a year, then 2. At this point I got comfortable, I was
					also pretty good at it thanks to a great mentor. I knew this wasn't a
					career I wanted though, to me it was more of a comfortable stable
					office job.
				</p>
				<p>
					Throughout the years I started tinkering with different things on the
					web, using different platforms like funnel platforms, Amazon
					marketplace, Shopify, even using an MLM blog platform. This introduced
					me to things like online marketing, sales, e-commerce, SEO, building
					landing pages, and creating e-products. My favorite part would always
					be building the funnel pages, marketing ads, and especially the
					Shopify stores, customizing all those cool themes that I kept buying.
				</p>
				<p>
					This led me to software development. I knew at the time that I wanted
					to learn a valuable and actionable skill, and seeing those outrageous
					prices I was getting from Shopify developers, to do something like
					creating a double column, made me take a serious look into this
					career. I started with Python, using the Turtle library to draw and
					make turtles move. I then moved into front-end development, I was
					always limited to the themes and prebuilt pages when it came to
					building, so the idea of being able to build almost anything I can
					think of drew me right in.
				</p>
				<p>
					I was still pretty directionless, watching random tutorials on
					YouTube, not knowing whether I was doing things right. I wanted to
					start with a strong foundation and a sense of direction. After a lot
					of research, I found Lambda School and was accepted to their
					full-stack 9 month-long Bootcamp. The things that attracted me to
					lambda were that they were one of the only Bootcamps that was longer
					than 3 months and had a section on computer science fundamentals.
					Also, I did not have to pay 10k+ upfront to attend and they were fully
					remote so that was very convenient.
				</p>
				<p>
					Shortly after completing Lambda School, I went on a hiatus. This was a
					difficult time in my life, my mom was in her final stages of life
					after a long battle with cancer, she passed away that year. She was
					the most caring, loving, strongest person I knew. When I first started
					developing again, it was sort of a coping mechanism for me. Building
					and seeing my progress has been such a huge joy for me, this is
					something I want to be a part of, I do not doubt that. I have been
					building and learning on the side(thanks full-time job) since then.
					Now I am here working to break into this industry. I'm currently
					looking for opportunities where I will be able to learn and grow as a
					developer with great teammates and mentorship. I love and believe in
					the web, I am especially interested in roles where I get to work on
					complex UIs and web apps, usability, and different aspects of the web.
				</p>
			</div>
		</div>
	</div>
</section>

<style>
	section {
		min-height: 100vh;
		width: 100%;
		padding-bottom: 20%;
		text-align: center;
	}

	h2 {
		-webkit-text-fill-color: var(--lighter-violet-color);
		-webkit-text-stroke-width: 0.5px;
		-webkit-text-stroke-color: var(--violet-color);
		text-shadow: 5px 5px 0px var(--darkest-violet-color);
	}

	.bio-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 30px;
	}

	fieldset {
		padding: 0 5px;
		border-color: var(--violet-color);
		box-shadow: 0 0 10px rgba(var(--violet-value), 0.8);
	}

	legend {
		text-shadow: 2px 2px 0px var(--darkest-violet-color);
	}

	.options-container {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 25px;
		padding: 10px;
	}

	.option {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		gap: 5px;
	}

	.text-container {
		text-align: left;
		padding: 0 10px;
	}

	.text-container:not(.hidden) {
		display: flex;
		justify-content: center;
	}

	.text {
		display: flex;
		flex-direction: column;
		gap: 25px;
	}

	ul {
		padding-left: 2rem;
		list-style-position: outside;
	}

	ul li::before {
		content: " ";
		display: block;
		position: absolute;
		left: -1.5rem;
		top: 50%;
		bottom: 50%;
		transform: translate(-50%, -50%);
		background-image: url("/static/triangle-bullet.svg");
		background-size: 0.8rem 0.8rem;
		height: 0.8rem;
		width: 0.8rem;
	}

	@media (min-width: 850px) {
		section {
			padding-bottom: 15%;
		}

		.bio-container {
			flex-direction: row;
			align-items: flex-start;
			justify-content: center;
		}

		form {
			flex-basis: 15%;
		}

		.options-container {
			flex-direction: column;
		}

		.text-container {
			flex-basis: 75%;
			max-width: 750px;
		}
	}

	@media (min-width: 1250px) {
		.bio-container {
			gap: unset;
		}

		ul li::before {
			background-size: 0.9rem 0.9rem;
			height: 0.9rem;
			width: 0.9rem;
		}
	}
</style>
