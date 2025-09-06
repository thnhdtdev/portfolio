import { Button } from "@/components/ui/button.jsx";

const Information = () => {
	return (
		<div className="flex flex-col justify-center gap-6">
			<img
				className="w-32 h-32 rounded-full"
				src="https://picsum.photos/64/64"
				alt="avatar"
			/>
			<div className="flex flex-col">
				<div>teen</div>
				<div>software engineering & frontend developer</div>
			</div>
			<div className="flex gap-4">
				<div>react</div>
				<div>tailwind css</div>
				<div>git</div>
				<div>jira</div>
			</div>
			<Button
				variant="secondary"
				size="lg"
				className="bg-blue-500 text-white rounded-3xl transition-all duration-200 hover:bg-blue-600 hover:shadow-lg capitalize"
			>
				Contacts me
			</Button>
		</div>
	);
};
export default Information;
