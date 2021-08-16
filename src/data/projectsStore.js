import { readable } from "svelte/store";

export const projectSectionData = readable([
	{
		name: "Tech Profiles",
		description:
			"The first version of this web app was my capstone project(when I attended lambda school). It was a 5-week team built project, each team had a PM who would review PRs and merge them. I learned more in those 5 weeks than 6 months of self learning, building fully functioning web apps with a team and a deadline is such a great experience. I left the app as is after the 5 weeks to show what we accomplished in that time, and started version 2, which was renamed to tech profiles. I have been working on tech profiles on the side since then. It is a discovery app for people in tech, where they can create a profile for others to see.",
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
					"This is usually my go to styling library since it has SASS-like powers plus much more, including props and encapsulation of styles making reusability more viable."
			},
			{
				name: "React Router",
				description:
					"Routing logic does not come out of the box for React, this library is the most established and maintained. It also has a bright future, with the creator of react router and reach router both collaborating on future releases, fixing accessibility issues of react router and much more."
			},
			{
				name: "React Helmet",
				description:
					"I feel like this should be out of the box for React since it is very important. Being able to change <head> tags like meta descriptions and titles help with many things, like accessibility(screen readers announcing titles), usability(being able to see titles in tabs), and SEO(page descriptions)."
			},
			{
				name: "Node with Express",
				description:
					"Most of my focus right now is with front-end technologies and JS, so I want to stay within the JS ecosystem to interact with databases. With the help of express, it makes creating APIs much more approachable."
			},
			{
				name: "SQL with PostgreSQL",
				description: "Even though most of my focus is with front-end technology, I know the importance of knowing this querying language. PostgreSQL is widely used in production and available with many services."
			},
			{
				name: "Knex",
				description: "Knex makes building queries more readable, it also helps with connections so I can connect multiple databases for development, testing, and production."
			},
			{
				name: "Jest",
				description:
					"lorem familiarity, big community, plenty of documentation, established, app feel"
			},
			{
				name: "React Testing Library Suite",
				description:
					"lorem familiarity, big community, plenty of documentation, established, app feel"
			},
			{
				name: "Cypress",
				description:
					"lorem familiarity, big community, plenty of documentation, established, app feel"
			},
			{
				name: "ESLint/Prettier",
				description: "These are a must for any development project. Prettier removes mental workload by automating code formatting and keeping code consistent. ESlint is the first safeguard against common errors that can be easily overlooked."
			},
			{
				name: "Auth0",
				description: "Security is immeasurable, having an established company with teams of security experts manage that for you is the best route for any project. Auth0 stands out with its developer experience, offering an intuitive dashboard and great documentation. Other features include customizable login pages, simple integration with 3rd party providers, a straightforward API, and much more."
			},
			{
				name: "Stripe",
				description: "Like security, payments are something that should be managed by established companies that solely focus on that subject. Stripes developer experience is unmatched, with some of the best documentation out there. It also has a great dashboard, where a lot of customization can be done with a few clicks of a button."
			},
			{
				name: "Google Places",
				description: "Google offers many services that help with almost anything related to locations. Two services I use for this app are location autocomplete and gio location."
			},
			{
				name: "Cloudinary",
				description:
					"Images are the biggest factor to web performance, they will almost certainly make or break your web app. Cloudinary helps by offering CDN caching for faster delivery, on demand image manipulation to serve properly sized images and more performant image types, and much more."
			},
			{
				name: "Netlify",
				description: "lorem big community, simple to deploy"
			},
			{
				name: "Heroku",
				description: "lorem big community, simple to deploy"
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

	// {
	// 	name: "Conway's Game of Life",
	// 	description: "Based on Conway's game of life.",
	// 	features: [
	// 		"Click on any cell to customize game",
	// 		"Choose a preset",
	// 		"Expand the number of cells"
	// 	],
	// 	tech: [
	// 		{
	// 			name: "React(CRA)",
	// 			description:
	// 				"lorem familiarity, big community, plenty of documentation, established, app feel"
	// 		},
	// 		{
	// 			name: "Styled Components",
	// 			description: "lorem simple to implement, customizable, great docs"
	// 		}
	// 	],
	// 	siteUrl: "https://conwayknowslife.dev",
	// 	githubUrl: "https://github.com/albertopfunk/Conways-Life",
	// 	mediaUrl:
	// 		"https://res.cloudinary.com/dy5hgr3ht/image/upload/v1625834432/Portfolio/portfolio-ex.webp",
	// 	slug: "game-of-life"
	// },

	{
		name: "Portfolio",
		description:
			"I LOVE neon-noir synthwave type themes, the nostalgia, visuals, and sounds of it all(there needs to be more movies like blade runner 2049 and drive!). I see too many portfolios that are very similar, doing the same animations with boring(sorry) layouts. I did not want to follow that path, my portfolio represents me and what I love.",
		features: [
			"In-page navigation",
			"Reduced motion if preferred",
			"Contact form"
		],
		tech: [
			{
				name: "Svelte with SvelteKit",
				description:
					"lorem trying out different tech, svelte seems like a formiddible contender to other major frameworks"
			},
			{
				name: "Intersection Observer API",
				description: "lorem keep track of element positions in the background"
			},
			{
				name: "Netlify Forms",
				description: "lorem contact form hooked up to netlify"
			}
		],
		siteUrl: "https://albertopfunk.dev",
		githubUrl: "https://github.com/albertopfunk/portfolio-svelte-v2",
		mediaUrl:
			"https://res.cloudinary.com/dy5hgr3ht/image/upload/v1625834432/Portfolio/portfolio-ex.webp",
		slug: "portfolio"
	},
	{
		name: "rollup-plugin-fresh",
		description:
			"While I was building the first verson of my portfolio with svelte(before sveltekit), I was using a routing library(navaid) that allows for esm routing and prerendering, combined with svelte I thought it would be cool to explore this. Because I was using rollup to compile into esm, all the files would go into one directory. During development, rollup created new files everytime I made changes to code, so the directory would quickly get out of hand and I would have multiple files I had to remove manually. I reversed engineered a few packages that removed files from directories to create this tool, It helped me by removing all the files on startup so I would not have to.",
		features: [
			"Choose any directory and remove all files",
			"Target files not to remove",
			"Logs files that are removed",
			"Quiet option to not log files that are removed",
			"Errors are still loged if quiet option selected"
		],
		tech: [
			{
				name: "JavaScript",
				description: "lorem first feature example lorem"
			},
			{
				name: "Node",
				description: "lorem first feature example lorem"
			},
			{
				name: "rimraf",
				description: "lorem first feature example lorem"
			},
			{
				name: "Rollup",
				description: "lorem first feature example lorem"
			},
			{
				name: "NPM",
				description: "lorem first feature example lorem"
			}
		],
		siteUrl: "https://github.com/albertopfunk/Portfolio-Svelte-v1--DEMO",
		githubUrl: "https://github.com/albertopfunk/rollup-plugin-fresh",
		mediaUrl:
			"https://res.cloudinary.com/dy5hgr3ht/image/upload/v1625834432/Portfolio/portfolio-ex.webp",
		slug: "rollup-plugin-fresh"
	}
]);
