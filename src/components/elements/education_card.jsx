import { FaGraduationCap } from "react-icons/fa";

const EducationCard = () => {
	return (
		<div className="flex flex-col border-2 border-primary rounded-md p-4">
			<div className="text-lg font-semibold mb-3 flex gap-2 items-center">
				<FaGraduationCap className="text-blue-500 w-5 h-5" />
				Education
			</div>
			<div className="flex flex-col gap-4 text-sm text-muted-foreground">
				<div className="font-medium text-lg text-white">BSc in Information Systems</div>
				<div>Ho Chi Minh City University of Industry and Trade</div>
				<div>2020 – 2024</div>
				<div>Graduated</div>
			</div>
		</div>
	);
};
export default EducationCard;
