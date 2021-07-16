<script>
	import { afterUpdate, onMount } from "svelte";
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
				<li>Tinkering on the web over the years.</li>
				<li>Started coding by moving turtles with python.</li>
				<li>Solidified skills by attending lambda school and self learning.</li>
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
					I started my career in the healthcare industry as an EMT, shortly
					thereafter went into dispatching. I got conformable as a dispatcher, I
					was also pretty good at it thanks to a great mentor. I knew this
					wasn't a career I wanted though.
				</p>
				<p>
					Throughout the years I started tinkering with different things on the
					web. I would sell products online using different platforms. This
					introduced me to things like online marketing, sales, seo, building
					pages, creating eproducts, etc. My favorite of any of this was always
					the building.
				</p>
				<p>
					I started coding by moving turtles with python, then I quickly moved
					into front end development. The idea to be able to build almost
					anything I can think of drew me right in.
				</p>
				<p>
					I solidified my skills and foundations by attending lambda school and
					through self learning.
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
					I started my career in the healthcare industry as an EMT at 20(before
					that I worked at random jobs, mostly in the food industry). I started
					dispatching by being put there(light duty) for an injury by lifting a
					patient wrong. One week to heal, turned into 3 months to cover while
					they hire a new dispatcher, turned into a year, then 2. At this point
					I got conformable, I was also pretty good at it thanks to a great
					mentor. I knew this wasn't a career I wanted though, to me it was more
					of a comfortable stable office job.
				</p>
				<p>
					Throughout the years I started tinkering with different things on the
					web. I would sell products online using different platforms like
					funnel marketing, amazon, shopify, even using a MLM blog platform.
					This introduced me to things like online marketing, sales, seo,
					building pages, creating eproducts, etc. My favorite of any of this
					was always the building. Building the funnel pages, marketing ads,
					ebook+content, and especially the shopify stores, customizing all
					those cool themes.
				</p>
				<p>
					Eventually, naturally I think, all of this lead me into coding, I
					started with python making turtles move, then I quickly moved into
					front-end development, I was always limited to the themes and prebuilt
					pages when it came to building, so the idea to be able to build almost
					anything I can think of drew me right in.
				</p>
				<p>
					I wanted to solidify my skills and foundation with coding. After a lot
					of research I found lambda school, the things that attracted me to
					lambda was that they were one of the only bootcamps that had a section
					on computer science fundamentals and that I did not have to pay 10k+
					up front to attend, also they were fully remote so that was a huge
					convenience for me.
				</p>
				<p>
					Shortly after completing lambda school I went on a hiatus, this was a
					difficult time in my life, my mom was in her final stages of life
					after a long battle with cancer, she passed away that year, she was
					the most amazing, caring, loving, powerful person I have ever known. I
					think when I first started developing again, it was sort of a coping
					mechanism for me, my interest in this was greater than ever. Building
					and seeing my progress has been such a huge joy for me, this is
					something I want to be a part of, I have no doubt in that. I have been
					building and learning on the side(thanks full time job) since then.
					Now I am here working to break into this industry. I'm currently
					looking for opportunities where I will be able to learn and grow as a
					developer. I love and believe in the web, I am especially interested
					in roles where I get to work on different aspects of the web, build
					complex UI, work on accessibility, etc.
				</p>
				<p>Thank you for getting this far</p>
			</div>
		</div>
	</div>
</section>

<style>
	section {
		min-height: 100vh;
		width: 100%;
		padding: 15px 10px 20%;
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

	.text-container:not(.hidden) {
		text-align: left;
		display: flex;
		justify-content: center;
	}

	.text {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	ul {
		list-style-type: circle;
		list-style-type: disclosure-open;
		list-style-position: inside;
		list-style-image: url("triangle-sm.svg");
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

		ul {
			list-style-image: url("triangle-lg.svg");
		}
	}
</style>
