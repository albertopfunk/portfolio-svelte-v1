import { readable } from "svelte/store";

export const projectSectionData = readable([
	{
		name: "Tech Profiles",
		description: [
			"The first version of this web app was my capstone project(when I attended Lambda School). It was a 5-week, team-built project where each team had a PM who would review PRs and merge them. I learned more in those five weeks than six months of self-learning. Building fully functioning web apps with a team and a deadline is a great way to gain experience.",

			"During those five weeks, I mostly worked on the dashboard and worked with teammates to connect services. This app felt like a great way to gain experience due to its scalability, so I wanted to start from scratch to have hands-on experience building a project in its entirety.",

			"I left the app as-is after the five weeks to show what we accomplished in that time. I started version 2, which I renamed to tech profiles, and have been working on it on the side since then. It is a discovery app for people in tech, where they can create a profile for others to see."
		],
		features: [
			"Infinite scroll with pagination",
			"Sort profiles",
			"Filter by current location, interested locations, area of work",
			"Create a profile with a multi-page dashboard",
			"See live updates to your profile in your dashboard",
			"Profile checklist to guide you",
			"Upload your own image or choose an avatar",
			"Subscribe to go live"
		],
		tech: [
			{
				name: "React(CRA)",
				description:
					"SPA rendering allows me to make this project feel more like an app. This is a pretty large project so ease of composability and reusability is important. React also has major backers and a wide adoption where most edge cases have already been solved."
			},
			{
				name: "Styled Components",
				description:
					"This is usually my go-to styling library since it has SASS-like powers plus much more, including props and encapsulation of styles, making reusability more viable."
			},
			{
				name: "React Router",
				description:
					"Routing logic does not come out of the box for React, and this library is the most established and maintained. It also has a bright future, with the creator of React Router and Reach Router both collaborating on future releases, fixing accessibility issues of React Router, and much more."
			},
			{
				name: "React Helmet",
				description:
					"This is something that should be out of the box for React since it is very important. Being able to change <head> tags like meta descriptions and titles help with many things, like accessibility(screen readers announcing titles), usability(being able to see titles in tabs), and SEO(page descriptions)."
			},
			{
				name: "Node with Express",
				description:
					"Most of my focus right now is on front-end technologies and JS, so I want to stay within the JS ecosystem to interact with databases. With the help of express, it makes creating APIs much more approachable."
			},
			{
				name: "SQL with PostgreSQL",
				description:
					"Even though most of my focus is on front-end technology, I know the importance of knowing this querying language. PostgreSQL is widely used in production and is available with many services."
			},
			{
				name: "Knex",
				description:
					"Knex makes building queries more readable with familiar JS style methods and responses. It also helps with connections to connect with multiple databases for development, testing, and production."
			},
			// {
			// 	name: "Jest",
			// 	description:
			// 		"lorem familiarity, big community, plenty of documentation, established, app feel"
			// },
			// {
			// 	name: "React Testing Library Suite",
			// 	description:
			// 		"lorem familiarity, big community, plenty of documentation, established, app feel"
			// },
			// {
			// 	name: "Cypress",
			// 	description:
			// 		"lorem familiarity, big community, plenty of documentation, established, app feel"
			// },
			{
				name: "ESLint/Prettier",
				description:
					"These are a must for any development project. Prettier removes mental workload by automating code formatting and keeps code consistent. ESLint is the first safeguard against common errors that are easily overlooked."
			},
			{
				name: "Auth0",
				description:
					"Security is immeasurable, having an established company with teams of security experts manage that for you is the best route for any project. Auth0 stands out with its developer experience, offering an intuitive dashboard and great documentation. Other features include customizable login pages, simple integration with 3rd party providers, a straightforward API, and much more."
			},
			{
				name: "Stripe",
				description:
					"Like security, payments should be managed by established companies that solely focus on that subject. Stripe's developer experience is unmatched, with some of the best documentation out there. It also has a great dashboard, where a lot of customization can be done with a few clicks of a button."
			},
			{
				name: "Google Places",
				description:
					"Google offers many services that help with almost anything related to locations. Two services I use for this app are location autocomplete and GIO location."
			},
			{
				name: "Cloudinary",
				description:
					"Images are the biggest factor in web performance, they will almost certainly make or break your web app. Cloudinary helps by offering CDN caching for faster delivery, on-demand image manipulation to serve different sized images and more performant image types, and much more."
			},
			{
				name: "Heroku",
				description:
					"This is a great starter solution to get up and running with minimal effort. This was used to deploy the back end of tech profiles, using PostgreSQL as the production database. The biggest drawback to Heroku is the time the server takes to wake up, which has me looking at other solutions like Supabase or Amazon RDS since they both support PostgreSQL."
			},
			{
				name: "Netlify",
				description:
					"Like Heroku, this is a great solution to get up and running with minimal effort. This was used to deploy the front end of tech profiles."
			}
		],
		siteUrl: "https://techprofiles.dev",
		githubUrl:
			"https://github.com/albertopfunk/Developer-Profiles-v2--tech-profiles",
		mediaUrl:
			"https://res.cloudinary.com/dy5hgr3ht/image/upload/v1625834432/Portfolio/portfolio-ex.webp",
		slug: "tech-profiles"
	},

	// {
	// 	name: "NomCue",
	// 	description:
	// 		"This is my favorite project, and a project close to the heart. It started as a hackathon idea at lambda school, it is an idea that just popped up in my head when I saw the hackathon signup sheet. The idea was accepted and another student and I worked on it for 2 days, staying up all night building it, unfortunately we both fell asleep and missed the presentation so we did not win. We did post the app and video on it afterwards and got so much praise, many saying it would have definitely won, totally worth it! The description I came up with when I submitted this idea was, 'Don't know what to eat? open up our food suggestion app and let it suggest something for you!, If the suggestion does not satisfy you, just click x to get a new suggestion!'. It started as a 'Tinder for food' but I have since then expanded the idea to make it into more of a discovery app for food and activities.",
	// 	features: [
	// 		"Choose between food, activities or nightlife",
	// 		"Select your city or any other city in the US",
	// 		"Select a random suggestion or click next for another random suggestion",
	// 		"Browse through local places when you select a suggestion"
	// 	],
	// 	tech: [
	// 		{
	// 			name: "NextJS",
	// 			description:
	// 				"lorem minimal interaction with DB, some pages are fully static, other ssr with minimal db interaction"
	// 		},
	// 		{
	// 			name: "Tailwind CSS",
	// 			description:
	// 				"lorem paired with postcss-import, autoprefixer, purgecss"
	// 		},
	// 		{
	// 			name: "NoSQL/MongoDB",
	// 			description:
	// 				"lorem api created for this app fit best with mongoDBs document/json type structure, was looking for a json type structure, single request for full object data, relationships not needed"
	// 		},
	// 		{
	// 			name: "Isomorphic Unfetch",
	// 			description:
	// 				"lorem api created for this app fit best with mongoDBs document/json type structure, was looking for a json type structure, single request for full object data, relationships not needed"
	// 		},
	// 		{
	// 			name: "ESLint/Prettier",
	// 			description: "lorem straight forward requests"
	// 		},
	// 		{
	// 			name: "Google Places",
	// 			description: "lorem find local businesses"
	// 		},
	// 		{
	// 			name: "Yelp",
	// 			description: "lorem find local businesses"
	// 		},
	// 		{
	// 			name: "Vercel",
	// 			description: "lorem big community, simple to deploy"
	// 		}
	// 	],
	// 	siteUrl: "https://nomcue.com",
	// 	githubUrl: "",
	// 	mediaUrl:
	// 		"https://res.cloudinary.com/dy5hgr3ht/image/upload/v1625834432/Portfolio/portfolio-ex.webp",
	// 	slug: "nomcue"
	// },

	{
		name: "Conway's Game of Life",
		description: ["Built this as part of build week at Lambda School where we would build week-long projects based on what we learned that month. Based on Conway's Game of Life, this app is a Turing complete simulation where you watch the evolution of cells throughout generations, determined by their initial state."],
		features: [
			"Click on any cell to customize initialization",
			"Choose a preset pattern",
			"Expand the number of cells"
		],
		tech: [
			{
				name: "React(CRA)/Styled-Components",
				description: "The technology chosen was based on what we learned that month. If I were to start over, I would probably use Svelte and deploy it as a static application."
			}
		],
		siteUrl: "https://conwayknowslife.dev",
		githubUrl: "https://github.com/albertopfunk/Conways-Life",
		mediaUrl:
			"https://res.cloudinary.com/dy5hgr3ht/image/upload/v1625834432/Portfolio/portfolio-ex.webp",
		slug: "game-of-life"
	},

	{
		name: "Portfolio",
		description: [
			"My portfolio is basically an open canvas for the things I enjoy. It's a bit out there but I am having a lot of fun building it. I am a big fan of sci-fi/fantasy and synthwave/retrowave type themes so I am making that a central theme of my portfolio. It still needs work and there are many items on my stretch list but I am excited to keep developing it!"
		],
		features: [
			"In-page navigation",
			"Reduced motion if preferred",
			"Contact form"
		],
		tech: [
			{
				name: "Svelte with SvelteKit",
				description:
					"When I first started using Svelte, it was still pretty new, so there weren't a lot of resources or established libraries for major things like routing. I still enjoyed it very much. Many things are more straightforward and intuitive, like using and passing props, JS in HTML(loops, conditionals), and lifecycles. It also has great built-in features like event handlers with modifiers, data stores, the ability to insert elements into the document head, and animations. SvelteKit is a huge improvement, it feels a lot like NextJS, with file system routing with fallback pages, server, and static rendering."
			},
			{
				name: "Netlify",
				description:
					"I am a big fan of Netlify, they simplify many complex necessities of deploying projects. I am using Netlify to deploy my portfolio with a custom domain and using Netlify Forms for contact form submissions."
			}
		],
		siteUrl: "",
		githubUrl: "https://github.com/albertopfunk/portfolio-svelte-v2",
		mediaUrl:
			"https://res.cloudinary.com/dy5hgr3ht/image/upload/v1625834432/Portfolio/portfolio-ex.webp",
		slug: "portfolio"
	},
	{
		name: "rollup-plugin-fresh",
		description: [
			"While I was building the first version of my portfolio with Svelte(before SvelteKit), I was using a routing library(Navaid) that allows for ESM routing and prerendering, combined with Svelte, I thought it would be cool to explore this.",

			"Because I was using Rollup to compile into ESM, all the files would go into one directory. During development, Rollup created new files every time I made changes to code, so the directory would quickly get out of hand and I would have multiple files I had to remove manually.",

			"I reversed engineered a few packages that removed files from directories to create this tool, It helped me by removing all the files on startup so I would not have to."
		],
		features: [
			"Choose any directory and remove all files",
			"Target files not to remove",
			"Logs files that are removed",
			"Quiet option to not log files that are removed",
			"Errors are still loged if quiet option selected"
		],
		tech: [
			{
				name: "Node/rimraf",
				description:
					"I used Node's file system module to read chosen directories, this allowed me to remove files using the rimraf library."
			},
			{
				name: "Rollup",
				description:
					"I chose this bundler for a few reasons, it is widely used for creating packages, I already had some experience using it with Svelte, and it was the main bundler used to create Rollup plugins. I enjoy it because it is a straightforward and versatile bundler without the need for complex configurations."
			},
			{
				name: "NPM",
				description:
					"Publishing packages with NPM is not as complex as I first thought, most of the steps can be done with a few CLI commands and package.json configurations. Even though I am currently the only user, I still feel proud of having my own package published on NPM!"
			}
		],
		siteUrl: "https://github.com/albertopfunk/Portfolio-Svelte-v1--DEMO",
		githubUrl: "https://github.com/albertopfunk/rollup-plugin-fresh",
		mediaUrl:
			"https://res.cloudinary.com/dy5hgr3ht/image/upload/v1625834432/Portfolio/portfolio-ex.webp",
		slug: "rollup-plugin-fresh"
	}
]);
