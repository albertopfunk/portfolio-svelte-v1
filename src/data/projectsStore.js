import { readable } from "svelte/store";

export const projectSectionData = readable([
	{
		name: "Tech Profiles",
		description:
			"The first version of this app was my capstone project when I attended lambda school(link to github), it was a 5 week team project, each team had a PM who would review our PRs and merge. I learned more in those 5 weeks than 6 months self learning, building fully functioning web apps with a team and a deadline is such a great experience. I left the app as is and started version 2, which was renamed to tech profiles, I have been working on it on the side since then. It is a discovery app for people in tech, where they can create a portfolio for others to see.",
		features: "",
		tech: [
			{
				name: "react(cra)",
				description:
					"familiarity, big community, plenty of documentation, established, app feel"
			},
			{
				name: "node/express",
				description:
					"familiarity, big community, plenty of documentation, established, js ecosystem"
			},
			{
				name: "SQL/postgres",
				description: "straight forward requests"
			},
			{
				name: "AuthO",
				description: "login/sign up, auto log in, silent authentication"
			},
			{
				name: "Stripe",
				description: "simple to implement, customizable, great docs"
			},
			{
				name: "Google places",
				description: "locations search and Gio location"
			},
			{
				name: "Netlify",
				description: "big community, simple to deploy"
			},
			{
				name: "supabase/vercel",
				description: "big community, simple to deploy"
			}
		],
		siteUrl: "tech-profiles.com",
		githubUrl:
			"https://github.com/albertopfunk/Developer-Profiles-v2--tech-profiles",
		mediaUrl:
			"https://res.cloudinary.com/dy5hgr3ht/image/upload/v1625834432/Portfolio/portfolio-ex.webp",

		slug: "tech-profiles"
	},
	{
		name: "NomCue",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum perferendis ea, officiis, cum asperiores repellendus natus dicta tenetur inventore blanditiis ratione dolorem, quas eum perspiciatis placeat atque nihil. Assumenda, et!",
		features: "",
		tech: [{ name: "", description: "" }],
		siteUrl: "nomcue.com",
		githubUrl: "",
		mediaUrl:
			"https://res.cloudinary.com/dy5hgr3ht/image/upload/v1625834432/Portfolio/portfolio-ex.webp",
		slug: "nomcue"
	},
	{
		name: "Portfolio",
		description:
			"I LOVE 80s retro themes(blade runner 2049 is my favorite movie). I see too many portfolios very similar, doing the same animations and similar layouts. I did not want to follow that path, my portfolio represents me and what I love",
		features: "",
		tech: [{ name: "", description: "" }],
		siteUrl: "albertopfunk",
		githubUrl: "",
		mediaUrl:
			"https://res.cloudinary.com/dy5hgr3ht/image/upload/v1625834432/Portfolio/portfolio-ex.webp",
		slug: "portfolio"
	},
	{
		name: "Rollup Start Fresh",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum perferendis ea, officiis, cum asperiores repellendus natus dicta tenetur inventore blanditiis ratione dolorem, quas eum perspiciatis placeat atque nihil. Assumenda, et!",
		features: "",
		tech: [{ name: "", description: "" }],
		siteUrl: "",
		githubUrl: "",
		mediaUrl:
			"https://res.cloudinary.com/dy5hgr3ht/image/upload/v1625834432/Portfolio/portfolio-ex.webp",
		slug: "rollup-start-fresh"
	}
]);
