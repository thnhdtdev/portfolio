import { useEffect, useState } from "react";
import { FaRegMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";

import { Button } from "@/components/ui/button.jsx";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.jsx";

const Header = () => {
	const [theme, setTheme] = useState("dark");
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			setScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<nav
			className={`flex items-center justify-between py-8 px-80  fixed top-0 left-0 right-0 z-50 ${scrolled ? "bg-gray-950 shadow-lg" : "bg-transparent"}`}
		>
			<div className="font-bold text-2xl text-blue-500 tracking-wide select-none uppercase">
				thanhdat
			</div>

			<div className="flex items-center gap-8">
				<ul className="flex space-x-8 font-semibold">
					<li>
						<a href="#home" className="hover:text-blue-400 transition">
							Home
						</a>
					</li>
					<li>
						<a href="#about" className="hover:text-blue-400 transition">
							About
						</a>
					</li>
					<li>
						<a href="#projects" className="hover:text-blue-400 transition">
							Projects
						</a>
					</li>
					<li>
						<a href="#skills" className="hover:text-blue-400 transition">
							Skills
						</a>
					</li>
					<li>
						<a href="#contact" className="hover:text-blue-400 transition">
							Contact
						</a>
					</li>
				</ul>

				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" size="icon">
							{theme === "light" && <MdOutlineWbSunny />}
							{theme === "dark" && <FaRegMoon />}
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end" className="w-40 cursor-pointer bg-[#020817]">
						<DropdownMenuItem
							onClick={() => setTheme("light")}
							className={theme === "light" ? "bg-blue-600 text-white" : "text-white"}
						>
							<MdOutlineWbSunny />
							Light
						</DropdownMenuItem>
						<DropdownMenuItem
							onClick={() => setTheme("dark")}
							className={theme === "dark" ? "bg-blue-600 text-white" : "text-white"}
						>
							<FaRegMoon />
							Dark
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</nav>
	);
};

export default Header;
