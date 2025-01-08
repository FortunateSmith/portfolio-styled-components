import React, { useState } from "react";
import { Fade } from "react-reveal";

import { Button } from "../../globalStyles";
import {
	Form,
	TextArea,
	FormSection,
	InputFields,
	TextSubmit,
	ContactHeader,
	Input,
	PopUp,
} from "./ContactFormElements";

const FORM_ENDPOINT = "https://formsubmit.co/a894edc2dc04a3e632352584951d4c25"; // TODO - fill on the later step

const ContactForm = ({ primary }) => {
	const [submitted, setSubmitted] = useState(false);
	const handleSubmit = () => {
		setTimeout(() => {
			setSubmitted(true);
		}, 100);
	};

	// if (submitted) {
	//   return (
	//     <>
	//       <div className="text-2xl">Thank you!</div>
	//       <div className="text-md">We'll be in touch soon.</div>
	//     </>
	//   );
	// }

	return (
		<FormSection>
			<Form
				action={FORM_ENDPOINT}
				onSubmit={handleSubmit}
				method="POST"
				target="_blank"
				id="contact"
				netlify
			>
				<Fade>
					<InputFields>
						<ContactHeader>Let's Chat!</ContactHeader>
						<Input type="text" placeholder="Your name" name="name" />
						<Input type="email" placeholder="Email" name="email" />
						{/* <Input
							type="text"
							name="a_password"
							style="display:none !important"
							tabindex="-1"
							autocomplete="off"
						/> */}
					</InputFields>
					<TextSubmit>
						<TextArea placeholder="Your message" name="message" />

						<Button fontBig primary={primary} type="submit">
							Send
						</Button>
					</TextSubmit>
					{submitted ? (
						<PopUp className="text-2xl">Thank you!</PopUp>
					) : (
						<PopUp />
					)}
					{submitted ? (
						<PopUp className="text-2xl">I will be in touch soon.</PopUp>
					) : (
						<PopUp />
					)}
				</Fade>
			</Form>
		</FormSection>
	);
};

export default ContactForm;
