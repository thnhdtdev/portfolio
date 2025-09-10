import { FormProvider, useForm } from "react-hook-form";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input.jsx";
import { Textarea } from "@/components/ui/textarea.jsx";
import { Button } from "@/components/ui/button.jsx";

const ContactForm = () => {
	const methods = useForm();

	const onSubmit = (data) => {
		console.log(data);
		methods.reset();
	};
	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)}>
				<div className="border border-primary p-6 rounded-lg flex flex-col gap-4">
					<div className="grid grid-cols-2 gap-4">
						<div>
							<Label>Name</Label>
							<Input {...methods.register("name")} placeholder="Name" />
						</div>
						<div>
							<Label htmlFor="email">Email</Label>
							<Input
								{...methods.register("email")}
								type="email"
								id="email"
								placeholder="Email"
							/>
						</div>
					</div>
					<div>
						<Label>Subject</Label>
						<Input
							{...methods.register("subject")}
							name="subject"
							placeholder="How can I help you?"
						/>
					</div>
					<div className="grid w-full gap-3">
						<Label htmlFor="message">Your message</Label>
						<Textarea
							{...methods.register("message")}
							placeholder="Type your message here."
							id="message"
						/>
					</div>
				</div>
				<div className="mt-4 flex justify-end gap-4">
					<Button
						variant="secondary"
						size="lg"
						className="bg-blue-500 text-white rounded-3xl transition-all duration-200 hover:bg-blue-600 hover:shadow-lg capitalize"
					>
						Submit
					</Button>
				</div>
			</form>
		</FormProvider>
	);
};
export default ContactForm;
