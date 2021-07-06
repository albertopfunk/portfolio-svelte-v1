<script>
	export let introPosition;

	let introBioLength = "short";

	function chooseLength(event) {
		introBioLength = event.target.id;
	}
</script>

<section id="about-me" data-section="intro" bind:this={introPosition}>
	<h2>About Me</h2>
	<div class="container">
		<div class="options">
			<form>
				<fieldset>
					<legend>Bio Length</legend>
					<div>
						<input
							type="radio"
							name="bio-length"
							id="short"
							checked
							on:change={chooseLength}
						/>
						<label for="short">Short</label>
					</div>

					<div>
						<input
							type="radio"
							name="bio-length"
							id="medium"
							on:change={chooseLength}
						/>
						<label for="medium">Medium</label>
					</div>

					<div>
						<input
							type="radio"
							name="bio-length"
							id="long"
							on:change={chooseLength}
						/>
						<label for="long">Long</label>
					</div>
				</fieldset>
			</form>
		</div>
		<div class="intro-short" class:hidden={introBioLength !== "short"}>
			<ul>
				<li>Lorem ipsum dolor sit amet consectetur</li>
				<li>Donec et risus ullamcorper euismod justo sit amet</li>
				<li>tristique urna. Mauris vulputate orci purus</li>
				<li>Praesent tempor nisl id ornare cursus</li>
				<li>Sed at libero pulvinar, interdum turpis eu</li>
			</ul>
		</div>

		<div class="intro-medium" class:hidden={introBioLength !== "medium"}>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent erat
				sem, eleifend sit amet convallis et, bibendum ut eros. Vivamus sodales
				neque vel blandit pretium. Sed id diam nulla.
			</p>
			<p>
				Sed at eros fringilla, fermentum velit quis, pellentesque nisl. Aliquam
				posuere consequat ipsum, ullamcorper commodo turpis blandit quis.
				Suspendisse id diam consectetur, sagittis libero et, volutpat ante.
				Proin eleifend interdum eros, semper mattis augue lacinia sed.
			</p>
			<p>
				Vivamus dictum nisi at sem sollicitudin molestie. Etiam blandit commodo
				dapibus. Pellentesque ullamcorper, neque sed finibus eleifend, mauris
				magna bibendum tellus, a pretium lacus lorem.
			</p>
		</div>
		<div class="intro-long" class:hidden={introBioLength !== "long"}>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a quam
				sapien. Fusce sapien purus, vestibulum nec dui eu, gravida aliquet
				magna. Etiam lacinia dui est, ac semper massa tempor id. Aenean quis
				sapien lacus. Proin sit amet metus hendrerit nulla congue convallis
				iaculis a mi. Donec ac dignissim lectus. Vivamus imperdiet, magna a
				vehicula commodo, velit eros consectetur arcu, non auctor nunc ex non
				elit. Mauris a erat nisl. Suspendisse varius erat at odio interdum, ac
				ornare metus dictum.
			</p>
			<p>
				Maecenas eget iaculis metus, eu convallis arcu. Maecenas posuere
				suscipit est aliquet commodo. Nam et ultricies libero. Proin congue
				ornare est, eget euismod velit blandit ac. Quisque molestie commodo mi
				ut dapibus. Vestibulum sed sollicitudin urna. Maecenas porttitor neque
				vitae ligula fringilla volutpat. Morbi sed luctus diam, eu dictum mi.
				Suspendisse ultricies nisl non auctor tristique. Mauris suscipit lectus
				sit amet lectus lacinia, sit amet convallis mauris accumsan. Maecenas
				pharetra tincidunt dui, eu ullamcorper arcu tristique sed. Quisque
				bibendum ut odio a sollicitudin.
			</p>
			<p>
				Proin maximus, sem at consectetur lacinia, lectus tellus tempus leo, a
				sollicitudin quam lacus vel sem. Quisque rhoncus massa odio, vel tempus
				erat iaculis aliquet. Etiam lobortis.
			</p>
		</div>
	</div>
</section>

<style>
	section {
		min-height: 100vh;
		width: 100%;
		padding-top: 15px;
		text-align: center;
	}

	h2 {
		color: rgb(251, 247, 255);
		-webkit-text-fill-color: rgb(251, 247, 255);
		-webkit-text-stroke-width: 0.01px;
		-webkit-text-stroke-color: rgba(66, 6, 241, 0.9);
		text-shadow: 6px 6px 0px #19012c;
	}
</style>
