import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
	return (
		<div className="px-80 h-44 bg-[#0b1523]">
			<div className="flex justify-start items-center h-full">
				<div>
					<h1 className="font-bold text-2xl text-blue-500 tracking-wide select-none uppercase">
						thnhdtdev
					</h1>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry.
						Lorem Ipsum has been the industry's standard dummy text ever since the
						1500s, when an unknown printer took a galley of type and scrambled it to
						make a type specimen book.
					</p>
				</div>
				<div>
					<div className="flex items-center gap-4">
						<Github />
						<Linkedin />
						<Mail />
					</div>
					<div>© 2025 thnhdtdev | Built with React and Tailwind</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
