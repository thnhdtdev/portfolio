const ExperienceCard = () => {
	return (
		<div className="flex flex-col border-2 border-primary rounded-md p-4">
			<div className="text-lg font-semibold mb-3">Education</div>
			<div className="flex flex-col gap-4 text-sm text-muted-foreground">
				<div className="font-medium text-lg text-white">BSc in Information Systems</div>
				<div>Ho Chi Minh City University of Industry and Trade</div>
				<div>2020 – 2024</div>
				<div>Graduated</div>
			</div>
		</div>
	);
};
export default ExperienceCard;
