import { FaBriefcase } from "react-icons/fa";

const ExperienceCard = () => {
	return (
		<div className="flex flex-col border-2 border-primary rounded-md p-4">
			<div className="text-lg font-semibold mb-3 flex gap-2 items-center">
				<FaBriefcase className="text-blue-500 w-4 h-4" />
				Experience
			</div>
			<div className="flex flex-col gap-4 text-sm ">
				<div className="font-medium text-lg">FrontEnd Developer</div>
				<div className="text-muted-foreground">BachGiaIT</div>
				<div className="text-muted-foreground">Nov 2024 – Sep 2025</div>
			</div>
		</div>
	);
};
export default ExperienceCard;
