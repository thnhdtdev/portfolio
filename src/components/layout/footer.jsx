import { Github, Linkedin, Mail } from "lucide-react";

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

const Footer = () => {
	return (
		<div className="px-4 md:px-20 lg:px-80 py-20 h-44 bg-[#0b1523]">
			<div className="flex flex-col md:flex-row justify-between items-center h-full gap-8">
				<div className="text-center md:text-left">
					<h1 className="font-bold text-2xl text-blue-500 tracking-wide select-none uppercase">
						thanhdat
					</h1>
					<p className="max-w-md text-sm text-gray-300">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry...
					</p>
				</div>

				<div className="flex flex-col gap-4 md:items-end">
					<div className="flex items-center gap-6 justify-center">
						{socials.map((item) => (
							<a
								key={item.label}
								href={item.url}
								className="hover:text-blue-500 transition-colors"
							>
								{item.icon}
							</a>
						))}
					</div>
					<div className="text-xs text-gray-400 text-center md:text-right">
						© 2025 thnhdtdev | Built with React & Tailwind
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
