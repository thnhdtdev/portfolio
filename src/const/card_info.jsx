import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

export const card_info = [
	{
		id: "education",
		icon: <FaGraduationCap className="text-blue-500 w-5 h-5" />,
		title: "Education",
		contents: [
			{ text: "BSc in Information Systems", className: "font-medium text-lg text-white" },
			{ text: "Ho Chi Minh City University of Industry and Trade" },
			{ text: "2020 – 2024" },
			{ text: "Graduated" }
		]
	},
	{
		id: "experience",
		icon: <FaBriefcase className="text-blue-500 w-4 h-4" />,
		title: "Experience",
		contents: [
			{ text: "FrontEnd Developer", className: "font-medium text-lg text-white" },
			{ text: "BachGiaIT", className: "text-muted-foreground" },
			{ text: "Nov 2024 – Sep 2025", className: "text-muted-foreground" }
		]
	}
];
