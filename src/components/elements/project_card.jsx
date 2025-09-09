import { useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { Badge } from "@/components/ui/badge.jsx";
import { Button } from "@/components/ui/button.jsx";
import { IoCode } from "react-icons/io5";

const ProjectCard = () => {
	const [showMore, setShowMore] = useState(false);

	const projects = [
		{
			image: "https://picsum.photos/128/128",
			title: "Py Scrap - Amazon Web Scraper",
			badge: ["Python", "Scrapy", "MongoDB"],
			description:
				"A Python-based scraper using Scrapy to extract product details from Amazon, with MongoDB integration for data storage."
		},
		{
			image: "https://picsum.photos/128/128",
			title: "MSR Tailor Store",
			badge: ["Python", "Scrapy", "MongoDB"],
			description:
				"A full-stack application with React and Node.js for order placement and checkout functionality for a tailor store."
		},
		{
			image: "https://picsum.photos/128/128",
			title: "Internship Finder - ProIntern",
			badge: ["Python", "Scrapy", "MongoDB"],
			description:
				"A React Native and Firebase app for managing internships and applications, helping students find relevant opportunities."
		}
	];

	return (
		<div className="flex flex-col justify-center items-center gap-8">
			<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">
				{projects.map((item) => {
					return (
						<div className="border mx-2 border-primary rounded-md hover:-translate-y-1 transition cursor-pointer duration-500">
							<div>
								<img
									src={item?.image}
									alt=""
									className="h-48 w-96 object-cover rounded-t-md "
								/>
								<div className="flex flex-col flex-grow p-6 gap-6 justify-center items-start">
									<div className="font-bold line-clamp-2 min-h-10">
										{item?.title}
									</div>
									<div className="text-muted-foreground text-sm line-clamp-3">
										{item?.description}
									</div>
									<div className="flex gap-1">
										{item?.badge?.map((badge, idx) => (
											<Badge variant="default" key={idx}>
												{badge}
											</Badge>
										))}
									</div>
									<Button
										variant="ghost"
										size="sm"
										className="border border-primary"
									>
										<FaGithub />
										Github
									</Button>
								</div>
							</div>
						</div>
					);
				})}
			</div>

			<Button
				variant="ghost"
				size="lg"
				className="border border-white rounded-3xl text-white capitalize "
				onClick={() => setShowMore(!showMore)}
			>
				{showMore ? "Show Less" : "Show More Projects"}
				<IoCode />
			</Button>
		</div>
	);
};
export default ProjectCard;
