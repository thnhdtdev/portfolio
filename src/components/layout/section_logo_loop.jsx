import LogoLoop from "@/components/LogoLoop.jsx";
import {
	SiReact,
	SiNextdotjs,
	SiTypescript,
	SiTailwindcss,
	SiVite,
	SiJavascript,
	SiRedux,
	SiCss3,
	SiHtml5,
	SiMui,
	SiSass,
	SiFramer,
	SiGit,
	SiGithub,
	SiVercel,
	SiFigma
} from "react-icons/si";

const SectionLogoLoop = () => {
	const techLogos = [
		// Core
		{ node: <SiReact />, title: "React", href: "https://react.dev" },
		{ node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
		{ node: <SiVite />, title: "Vite", href: "https://vitejs.dev/" },
		{
			node: <SiJavascript />,
			title: "JavaScript",
			href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
		},
		{ node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
		{ node: <SiRedux />, title: "Redux", href: "https://redux.js.org/" },

		// UI & Style
		{ node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
		{
			node: <SiCss3 />,
			title: "CSS3",
			href: "https://developer.mozilla.org/en-US/docs/Web/CSS"
		},
		{
			node: <SiHtml5 />,
			title: "HTML5",
			href: "https://developer.mozilla.org/en-US/docs/Web/HTML"
		},
		{ node: <SiMui />, title: "Material UI", href: "https://mui.com/" },
		{ node: <SiSass />, title: "Sass", href: "https://sass-lang.com/" },
		{ node: <SiFramer />, title: "Framer Motion", href: "https://www.framer.com/motion/" },

		// Dev Tools & Deploy
		{ node: <SiGit />, title: "Git", href: "https://git-scm.com/" },
		{ node: <SiGithub />, title: "GitHub", href: "https://github.com/" },
		{ node: <SiVercel />, title: "Vercel", href: "https://vercel.com/" },
		{ node: <SiFigma />, title: "Figma", href: "https://figma.com/" }
	];

	return (
		<div className="relative overflow-hidden p-3">
			<LogoLoop
				logos={techLogos}
				speed={90}
				direction="left"
				logoHeight={60}
				gap={120}
				pauseOnHover
				scaleOnHover
				fadeOut
				fadeOutColor="#030712"
				ariaLabel="Technology partners"
			/>
		</div>
	);
};
export default SectionLogoLoop;
