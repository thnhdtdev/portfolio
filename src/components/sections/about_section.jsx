import BioCard from "@/components/elements/bio_card.jsx";
import EducationCard from "@/components/elements/education_card.jsx";
import ExperienceCard from "@/components/elements/experience_card.jsx";
import Information from "@/components/elements/information.jsx";
import FadeInSection from "@/components/elements/fade_in_section.jsx";

const AboutSection = () => {
	return (
		<div className="bg-gray-950 w-full px-8 md:px-40 lg:px-80 py-8">
			<FadeInSection>
				<div className="mb-12 text-3xl font-bold flex gap-2">
					<div className="underline decoration-blue-700">About</div>
					<div>me</div>
				</div>
			</FadeInSection>
			<div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-start">
				<div className="flex-1">
					<FadeInSection delay={0.15}>
						<BioCard />
					</FadeInSection>
					<div className="flex gap-4 mt-4">
						<FadeInSection delay={0.25}>
							<EducationCard />
						</FadeInSection>
						<FadeInSection delay={0.35}>
							<ExperienceCard />
						</FadeInSection>
					</div>
				</div>
				<FadeInSection delay={0.45}>
					<Information />
				</FadeInSection>
			</div>
		</div>
	);
};
export default AboutSection;
