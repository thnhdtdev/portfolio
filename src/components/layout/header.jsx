import { useState } from "react";
import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button.jsx";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.jsx";

const Header = () => {
	const [theme, setTheme] = useState("dark");

	return (
		<nav className="flex items-center justify-between py-10 px-80">
			<div className="font-bold text-2xl text-blue-500 tracking-wide select-none uppercase">
				thnhdtdev
			</div>

			<div className="flex items-center gap-8">
				<ul className="flex space-x-8 font-semibold">
					<li>
						<a href="#" className="hover:text-blue-400 transition">
							Home
						</a>
					</li>
					<li>
						<a href="#" className="hover:text-blue-400 transition">
							About
						</a>
					</li>
					<li>
						<a href="#" className="hover:text-blue-400 transition">
							Projects
						</a>
					</li>
					<li>
						<a href="#" className="hover:text-blue-400 transition">
							Skills
						</a>
					</li>
					<li>
						<a href="#" className="hover:text-blue-400 transition">
							Achievements
						</a>
					</li>
					<li>
						<a href="#" className="hover:text-blue-400 transition">
							Contact
						</a>
					</li>
				</ul>

				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" size="icon">
							{theme === "light" && <Sun />}
							{theme === "dark" && <Moon />}
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end" className="w-40 cursor-pointer bg-[#020817]">
						<DropdownMenuItem
							onClick={() => setTheme("light")}
							className={theme === "light" ? "bg-blue-600 text-white" : "text-white"}
						>
							<Sun />
							Light
						</DropdownMenuItem>
						<DropdownMenuItem
							onClick={() => setTheme("dark")}
							className={theme === "dark" ? "bg-blue-600 text-white" : "text-white"}
						>
							<Moon />
							Dark
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</nav>
	);
};

export default Header;
