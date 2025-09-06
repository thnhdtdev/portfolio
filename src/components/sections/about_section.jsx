import BioCard from "@/components/elements/bio_card.jsx";
import EducationCard from "@/components/elements/education_card.jsx";
import ExperienceCard from "@/components/elements/experience_card.jsx";
import Information from "@/components/elements/information.jsx";

const AboutSection = () => {
	return (
		<div className="bg-gray-950 w-full px-8 md:px-40 lg:px-80 py-8">
			<div className="mb-12 text-3xl font-bold">About me</div>
			<div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-start">
				<div className="flex-1">
					<BioCard />
					<div className="flex gap-4 mt-4">
						<EducationCard />
						<ExperienceCard />
					</div>
				</div>
				<Information />
			</div>
		</div>
	);
};
export default AboutSection;
