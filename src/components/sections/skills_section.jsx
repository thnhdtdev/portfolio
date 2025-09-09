import Skills from "@/const/skills.jsx";
import FadeInSection from "@/components/elements/fade_in_section.jsx";

const SkillsSection = () => {
	return (
		<div className="bg-gray-950 w-full px-8 md:px-40 lg:px-80 py-8">
			<FadeInSection>
				<div className="mb-12 text-3xl font-bold flex">
					<div className="underline decoration-blue-700">Skills</div>
				</div>
			</FadeInSection>

			<div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-start">
				<div className="flex-1">
					<FadeInSection delay={0.15} className="text-muted-foreground mb-4">
						I've worked with a range of technologies in the web development world, from
						frontend to backend and everything in between.
					</FadeInSection>

					<FadeInSection delay={0.15}>
						<div className="flex flex-wrap justify-center gap-4 w-full">
							{Skills.map((skill, idx) => (
								<a
									key={idx}
									href={skill.href}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 px-4 py-2 rounded-xl border border-zinc-700 bg-black/70 text-white font-medium text-base shadow-sm hover:scale-105 hover:border-sky-400 transition"
								>
									{skill.icon}
									<span>{skill.label}</span>
								</a>
							))}
						</div>
					</FadeInSection>
				</div>
			</div>
		</div>
	);
};
export default SkillsSection;
