import FadeInSection from "@/components/elements/fade_in_section.jsx";
import ProjectCard from "@/components/elements/project_card.jsx";

const ProjectSection = ({ id }) => {
	return (
		<div id={id} className="bg-gray-950 w-full px-8 md:px-40 lg:px-80 py-8">
			<FadeInSection>
				<div className="mb-12 text-3xl font-bold flex">
					<div className="underline decoration-blue-700">Pro</div>
					<div>ject</div>
				</div>
			</FadeInSection>

			<div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-start">
				<div className="flex-1">
					<FadeInSection delay={0.15} className="text-muted-foreground">
						Here are some of the projects I've worked on, showcasing my skills in
						various technologies and problem domains.{" "}
					</FadeInSection>

					<FadeInSection delay={0.25} className="my-3">
						<ProjectCard />
					</FadeInSection>
				</div>
			</div>
		</div>
	);
};
export default ProjectSection;
