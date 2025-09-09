// File: src/const/skills.jsx

import {
	SiReact,
	SiNextdotjs,
	SiVite,
	SiJavascript,
	SiTypescript,
	SiRedux,
	SiTailwindcss,
	SiCss3,
	SiHtml5,
	SiMui,
	SiSass,
	SiFramer,
	SiGit,
	SiGithub,
	SiVercel,
	SiFigma,
	SiSanity,
	SiJira
} from "react-icons/si";

export const Skills = [
	// Main
	{ icon: <SiReact className="text-sky-400" />, label: "React", href: "https://react.dev" },
	{ icon: <SiNextdotjs className="text-white" />, label: "Next.js", href: "https://nextjs.org" },
	{ icon: <SiVite className="text-purple-500" />, label: "Vite", href: "https://vitejs.dev/" },
	{
		icon: <SiJavascript className="text-yellow-400" />,
		label: "JavaScript",
		href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
	},
	{
		icon: <SiTypescript className="text-blue-500" />,
		label: "TypeScript",
		href: "https://www.typescriptlang.org"
	},
	{
		icon: <SiRedux className="text-purple-700" />,
		label: "Redux",
		href: "https://redux.js.org/"
	},

	// UI & Style
	{
		icon: <SiTailwindcss className="text-sky-400" />,
		label: "Tailwind CSS",
		href: "https://tailwindcss.com"
	},
	{
		icon: <SiHtml5 className="text-orange-500" />,
		label: "HTML5",
		href: "https://developer.mozilla.org/en-US/docs/Web/HTML"
	},
	{
		icon: <SiCss3 className="text-blue-400" />,
		label: "CSS3",
		href: "https://developer.mozilla.org/en-US/docs/Web/CSS"
	},
	{ icon: <SiMui className="text-blue-600" />, label: "Material UI", href: "https://mui.com/" },
	{ icon: <SiSass className="text-pink-400" />, label: "Sass", href: "https://sass-lang.com/" },
	{
		icon: <SiFramer className="text-blue-700" />,
		label: "Framer Motion",
		href: "https://www.framer.com/motion/"
	},

	// Dev Tools & Deploy
	{ icon: <SiGit className="text-orange-600" />, label: "Git", href: "https://git-scm.com/" },
	{ icon: <SiGithub className="text-white" />, label: "GitHub", href: "https://github.com/" },
	{ icon: <SiVercel className="text-white" />, label: "Vercel", href: "https://vercel.com/" },
	{ icon: <SiFigma className="text-pink-500" />, label: "Figma", href: "https://figma.com/" },
	{
		icon: <SiJira className="text-blue-500" />,
		label: "Jira",
		href: "https://www.atlassian.com/software/jira"
	}
];

export default Skills;
