import { Button } from "@/components/ui/button.jsx";

const HomePage = () => {
	return (
		<div className="px-96 py-40 flex items-center justify-around gap-8">
			<div className="flex flex-col flex-1 items-start gap-4">
				<div className="text-blue-400 font-bold text-lg">Hi! I'm</div>
				<div className="text-5xl font-bold uppercase underline	">thnhdtdev</div>
				<div className="text-xl md:text-2xl text-muted-foreground font-light">
					Frontend Developer & Software Engineering Student
				</div>
				<div className="text-muted-foreground">
					Building elegant solutions to complex problems with modern technologies.
				</div>
				<div className="flex items-center gap-4 mt-8">
					<Button
						variant="secondary"
						size="lg"
						className="bg-blue-500 text-white rounded-3xl transition-all duration-200 hover:bg-blue-600 hover:shadow-lg"
					>
						Contacts
					</Button>
					<Button variant="ghost" size="lg" className="boder border-white rounded-3xl">
						View Projects
					</Button>

					<div>btn2</div>
					<div>icon</div>
					<div>icon</div>
				</div>
			</div>
			<div className="flex-1 flex items-center justify-center">homepage</div>
		</div>
	);
};
export default HomePage;
