import { Button } from "@/components/ui/button.jsx";
import { TbDownload } from "react-icons/tb";

const Information = () => {
	const skills = ["react", "tailwind css", "git", "jira"];

	return (
		<div className="flex flex-col justify-center gap-6 items-center">
			<img
				className="w-32 h-32 rounded-full mx-auto"
				src="https://picsum.photos/128/128"
				alt="avatar"
			/>
			<div className="flex flex-col items-center">
				<div className="text-2xl font-bold">Vo Thanh Dat</div>
				<div className="text-muted-foreground">
					Frontend Developer & Software Engineering
				</div>
			</div>
			<div className="flex gap-4">
				{skills.map((item) => {
					return (
						<div className="border-2 border-gray-900 rounded-full px-2.5 py-0.5 text-xs font-semibold capitalize bg-gray-900">
							{item}
						</div>
					);
				})}
			</div>
			<Button
				variant="secondary"
				size="lg"
				className="bg-blue-500 text-white rounded-3xl transition-all duration-200 hover:bg-blue-600 hover:shadow-lg capitalize"
			>
				<TbDownload /> Download Resume
			</Button>
		</div>
	);
};
export default Information;
