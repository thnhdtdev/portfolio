import { useEffect, useState } from "react";
import { FaRegMoon } from "react-icons/fa";
import { MdOutlineWbSunny, MdClose } from "react-icons/md";
import { HiMenu } from "react-icons/hi";

import { Button } from "@/components/ui/button.jsx";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.jsx";

const NAV_LINKS = [
	{ href: "#home", label: "Home" },
	{ href: "#about", label: "About" },
	{ href: "#projects", label: "Projects" },
	{ href: "#skills", label: "Skills" },
	{ href: "#contact", label: "Contact" }
];

const Header = () => {
	const [theme, setTheme] = useState("dark");
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false); // For mobile menu

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 50);
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const handleNavClick = () => setOpen(false);

	return (
		<nav
			className={`flex items-center justify-between py-4 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-80 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-gray-950 shadow-lg" : "bg-transparent"}`}
		>
			{/* Logo */}
			<div className="font-bold text-xl sm:text-2xl text-blue-500 tracking-wide select-none uppercase">
				thanhdat
			</div>

			<div className="hidden md:flex items-center gap-4 md:gap-8">
				<ul className="flex space-x-4 md:space-x-8 font-semibold">
					{NAV_LINKS.map((link) => (
						<li key={link.href}>
							<a href={link.href} className="hover:text-blue-400 transition">
								{link.label}
							</a>
						</li>
					))}
				</ul>

				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" size="icon">
							{theme === "light" ? <MdOutlineWbSunny /> : <FaRegMoon />}
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

			<div className="md:hidden flex items-center">
				<Button
					variant="ghost"
					size="icon"
					className="outline-none"
					onClick={() => setOpen(true)}
				>
					<HiMenu size={28} />
				</Button>
			</div>

			{open && (
				<div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex">
					{/* Drawer */}
					<div className="bg-[#111827] w-[80vw] max-w-xs h-full p-6 flex flex-col gap-8 shadow-xl animate-slideInLeft relative">
						<button
							onClick={() => setOpen(false)}
							className="absolute top-4 right-4 text-2xl text-white"
							aria-label="Close menu"
						>
							<MdClose size={28} />
						</button>
						<div className="font-bold text-2xl text-blue-500 tracking-wide select-none uppercase">
							thanhdat
						</div>
						<ul className="flex flex-col gap-6 text-lg font-semibold mt-6">
							{NAV_LINKS.map((link) => (
								<li key={link.href}>
									<a
										href={link.href}
										className="hover:text-blue-400 transition"
										onClick={handleNavClick}
									>
										{link.label}
									</a>
								</li>
							))}
						</ul>
						<div className="mt-auto">
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button
										variant="ghost"
										size="icon"
										className="w-full justify-start"
									>
										{theme === "light" ? <MdOutlineWbSunny /> : <FaRegMoon />}
										<span className="ml-2">
											{theme.charAt(0).toUpperCase() + theme.slice(1)}
										</span>
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent
									align="start"
									className="w-40 cursor-pointer bg-[#020817]"
								>
									<DropdownMenuItem
										onClick={() => setTheme("light")}
										className={
											theme === "light"
												? "bg-blue-600 text-white"
												: "text-white"
										}
									>
										<MdOutlineWbSunny />
										Light
									</DropdownMenuItem>
									<DropdownMenuItem
										onClick={() => setTheme("dark")}
										className={
											theme === "dark"
												? "bg-blue-600 text-white"
												: "text-white"
										}
									>
										<FaRegMoon />
										Dark
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</div>
					</div>
					<div className="flex-1" onClick={() => setOpen(false)} />
				</div>
			)}
			<style>
				{`
          @keyframes slideInLeft {
            0% { transform: translateX(-100%);}
            100% { transform: translateX(0);}
          }
          .animate-slideInLeft {
            animation: slideInLeft 0.2s cubic-bezier(0.4,0,0.2,1) both;
          }
        `}
			</style>
		</nav>
	);
};

export default Header;
