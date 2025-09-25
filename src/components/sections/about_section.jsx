import { card_info } from "@/const/card_info.jsx";
import BioCard from "@/components/elements/bio_card.jsx";
import InfoCard from "@/components/elements/cardInfo.jsx";
import Information from "@/components/elements/information.jsx";
import FadeInSection from "@/components/elements/fade_in_section.jsx";

const AboutSection = ({ id }) => {
	return (
		<div id={id} className="bg-gray-950 w-full px-8 md:px-40 lg:px-80 py-8">
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
					<div className="flex flex-col gap-4 mt-4 items-stretch lg:flex-row">
						{card_info.map((item, idx) => (
							<FadeInSection key={item.id} delay={0.25 + idx * 0.1}>
								<InfoCard {...item} />
							</FadeInSection>
						))}
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
