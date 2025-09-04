import { Button } from "@/components/ui/button.jsx";
import Squares from "@/components/Squares.jsx";

const HomePage = () => (
	<div className="relative w-full h-screen bg-[#020817] flex justify-center items-center overflow-hidden">
		<div className="absolute inset-0 z-0">
			<Squares
				speed={0.25}
				squareSize={40}
				direction="diagonal" // up, down, left, right, diagonal
				borderColor="#271E37"
				hoverFillColor="#222222"
			/>
		</div>

		<div className="relative z-10 w-full max-w-6xl px-8">
			<div className="grid grid-cols-1 md:grid-cols-2 items-center">
				<div className="flex flex-col justify-center items-start gap-4">
					<div className="text-blue-400 font-bold text-lg">Hi! I'm</div>
					<div className="text-5xl font-bold uppercase underline">thanhdat</div>
					<div className="text-xl md:text-2xl text-white font-light mt-2">
						Frontend Developer & Software Engineering
					</div>
					<div className="text-white mt-2">
						Building elegant solutions to complex problems with modern technologies.
					</div>
					<div className="flex items-center gap-4 mt-8">
						<Button
							variant="secondary"
							size="lg"
							className="bg-blue-500 text-white rounded-3xl transition-all duration-200 hover:bg-blue-600 hover:shadow-lg capitalize"
						>
							Contacts me
						</Button>
						<Button
							variant="ghost"
							size="lg"
							className="border border-white rounded-3xl text-white"
						>
							View Projects
						</Button>
						<div>icon</div>
						<div>icon</div>
						<div>icon</div>
					</div>
				</div>
				<div className="flex justify-center items-center w-full h-full">hehe</div>
			</div>
		</div>
	</div>
);

export default HomePage;
