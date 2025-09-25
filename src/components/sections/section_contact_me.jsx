import { FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";

import FadeInSection from "@/components/elements/fade_in_section.jsx";
import ContactForm from "@/components/elements/contact_form.jsx";
import Socials from "@/const/socials.jsx";

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
		icon: <MdOutlineLocationOn className="text-blue-700 w-6 h-6" />,
		label: "location",
		value: "Go Vap, HCM City, VietNam"
	}
];

const ContactMe = ({ id }) => {
	return (
		<div id={id} className="bg-gray-950 w-full px-8 md:px-40 lg:px-80 py-16">
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
						<div className="grid gap-8 grid-cols-1 md:grid-cols-3">
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
								<div>
									<div className="font-semibold capitalize mt-6">
										Connect with me
									</div>
									<div className="flex gap-4 mt-2">
										{Socials.map((item) => (
											<a
												key={item.label}
												href={item.url}
												className="hover:text-blue-500 hover:scale-125 hover:rotate-6 transition text-2xl"
											>
												{item.icon}
											</a>
										))}
									</div>
								</div>
							</div>
							<div className="col-span-1 md:col-span-2">
								<ContactForm />
							</div>
						</div>
					</FadeInSection>
					<FadeInSection delay={0.25} className="my-3"></FadeInSection>
				</div>
			</div>
		</div>
	);
};
export default ContactMe;
