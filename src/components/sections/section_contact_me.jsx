import { FiPhone } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

import FadeInSection from "@/components/elements/fade_in_section.jsx";

const ContactItem = ({ icon, label, value }) => {
	return (
		<div className="flex gap-2">
			{icon}
			<div>
				<div className="capitalize font-semibold">{label}</div>
				<div className="text-muted-foreground">{value}</div>
			</div>
		</div>
	);
};

const ContactList = [
	{
		icon: <MdOutlineMailOutline className="text-blue-700 w-6 h-6" />,
		label: "email",
		value: "vodat0301@gmail.com"
	},
	{
		icon: <FiPhone className="text-blue-700 w-6 h-6" />,
		label: "phone",
		value: "0964983202"
	},
	{
		icon: <FaLocationDot className="text-blue-700 w-6 h-6" />,
		label: "location",
		value: "Go Vap, HCM City, Vietnam"
	}
];

const ContactMe = () => {
	return (
		<div className="bg-gray-950 w-full px-8 md:px-40 lg:px-80 py-16">
			<FadeInSection>
				<div className="mb-12 text-3xl font-bold flex gap-2">
					<div className="underline decoration-blue-700">Contact</div>
					<div> me</div>
				</div>
			</FadeInSection>

			<div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-start">
				<div className="flex-1">
					<FadeInSection delay={0.15} className="text-muted-foreground">
						Have a question or want to work together? Feel free to drop me a message.
						<br />
						I'd love to hear from you!
					</FadeInSection>

					<FadeInSection delay={0.25} className="my-3">
						<div className="flex gap-4 justify-between">
							<div>
								<h2 className="font-semibold">Contact Information</h2>
								<div className="text-muted-foreground">
									Fill up the form and I'll get back to you as soon as possible.
								</div>
								<div className="mt-4">
									<div className="flex flex-col gap-2 justify-start items-start">
										{ContactList.map((item, index) => (
											<ContactItem key={index} {...item} />
										))}
									</div>
								</div>
							</div>
							<div>b</div>
						</div>
					</FadeInSection>
				</div>
			</div>
		</div>
	);
};
export default ContactMe;
