import Squares from "@/components/Squares.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Github, Linkedin, Mail } from "lucide-react";
import Section_logo_loop from "@/components/layout/section_logo_loop.jsx";
import AnimatedContent from "@/components/AnimatedContent.jsx";

const HomePage = () => {
	const socials = [
		{
			icon: <Github />,
			url: "https://github.com/thnhdtdev",
			label: "Github"
		},
		{
			icon: <Linkedin />,
			url: "https://www.linkedin.com/in/v%C3%B5-th%C3%A0nh-%C4%91%E1%BA%A1t-b5251a2b7/",
			label: "Linkedin"
		},
		{
			icon: <Mail />,
			url: "mailto:vodat0301@gmail.com",
			label: "Mail"
		}
	];

	return (
		<div>
			<div className="relative w-full h-screen bg-[#020817] flex justify-center items-center">
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
						<AnimatedContent
							distance={150}
							direction="vertical"
							reverse={true}
							duration={1.2}
							ease="bounce.out"
							initialOpacity={0.2}
							animateOpacity
							scale={1.1}
							threshold={0.2}
							delay={0.3}
						>
							<div className="flex flex-col justify-center items-start gap-4">
								<div className="text-blue-400 text-2xl font-semibold ">Hi! I'm</div>
								<div className="text-5xl font-bold uppercase underline">
									thanhdat
								</div>
								<div className="text-xl md:text-2xl text-white font-light mt-2">
									Frontend Developer & Software Engineering
								</div>
								<div className="text-white mt-2">
									Building elegant solutions to complex problems with modern
									technologies.
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
									{socials.map((item) => (
										<a
											key={item.label}
											href={item.url}
											className="hover:text-blue-500 hover:scale-125 hover:rotate-6 transition"
										>
											{item.icon}
										</a>
									))}
								</div>
							</div>
						</AnimatedContent>

						<AnimatedContent
							distance={150}
							direction="horizontal"
							reverse={false}
							duration={1.2}
							ease="bounce.out"
							initialOpacity={0.2}
							animateOpacity
							scale={1.1}
							threshold={0.2}
							delay={0.3}
						>
							<div className="flex justify-center items-center w-full h-full hover:rotate-3 hover:-translate-y-4 transition-transform duration-500">
								<div className="border border-white rounded-3xl w-full h-full max-w-xs bg-gray-950 p-6">
									<div className="flex justify-between items-center mb-4">
										<div className="flex gap-2">
											<div className="w-3 h-3 bg-red-500 rounded-full" />
											<div className="w-3 h-3 bg-yellow-400 rounded-full" />
											<div className="w-3 h-3 bg-green-500 rounded-full" />
										</div>
										<div className="text-sm text-gray-400 pr-2 font-mono">
											developer.js
										</div>
									</div>
									<div className="font-mono space-y-2 text-sm">
										<div className="text-gray-500">
											//Frontend Developer & Software Engineer
										</div>
										<div className="flex flex-col gap-2 text-gray-400">
											<div>
												const&nbsp;
												<span className="text-blue-400">developer</span>
												&nbsp;=&nbsp;
												<span className="text-orange-400">&#123;</span>
											</div>
											<div>
												&nbsp;&nbsp;&nbsp;&nbsp;
												<span>name:</span>&nbsp;
												<span className="text-green-400">'ThanhDat'</span>
											</div>
											<div>
												&nbsp;&nbsp;&nbsp;&nbsp;
												<span>skills:</span>&nbsp;
												<span className="text-orange-400">[</span>
												<span className="text-green-400">
													TailwindCSS, Motion
												</span>
												<span className="text-orange-400">]</span>,
												<br />
											</div>

											<div>
												&nbsp;&nbsp;&nbsp;&nbsp;
												<span>framework:</span>&nbsp;
												<span className="text-orange-400">[</span>
												<span className="text-green-400">React, Vite</span>,
												<span className="text-orange-400">]</span>,
											</div>
											<div>
												&nbsp;&nbsp;&nbsp;&nbsp;
												<span>tools:</span>&nbsp;
												<span className="text-orange-400">[</span>
												<span className="text-green-400">
													Git, Figma, Jira
												</span>
												<span className="text-orange-400">]</span>,
											</div>
											<div>
												&nbsp;&nbsp;&nbsp;&nbsp;
												<span>learing:</span>&nbsp;
												<span className="text-green-400">'Always'</span>
											</div>

											<span className="text-orange-400">&#125;</span>
										</div>
									</div>
								</div>
							</div>
						</AnimatedContent>
					</div>
				</div>
			</div>
			<div className=" bg-gray-950">
				<Section_logo_loop />
			</div>
		</div>
	);
};

export default HomePage;
