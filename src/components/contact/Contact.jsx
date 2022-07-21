import React, { useRef, useState } from "react";
import "./contact.css";

import { BsTelephone } from "react-icons/bs";
import { MdOutlineAttachEmail } from "react-icons/md";
import { BiMapPin } from "react-icons/bi";

import { RiFacebookLine } from "react-icons/ri";
import { RiTwitterLine } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";

import { RiUser6Line } from "react-icons/ri";
import { RiBallPenLine } from "react-icons/ri";
import { RiMailCheckLine } from "react-icons/ri";
import { RiMessage3Line } from "react-icons/ri";

import { RiMailSendLine } from "react-icons/ri";

import emailjs from "emailjs-com";

const Contact = () => {
	const formRef = useRef();

	const [sent, setSent] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_yms2kdr",
				"template_f4osd0r",
				formRef.current,
				"isQuIZSOmfp3TDl4s"
			)
			.then(
				(result) => {
					console.log(result.text);
					setSent(true);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};
	return (
		<section className="section contact" id="contact">
			<div className="container contact__container">
				<div className="contact__wrapper">
					<div className="contact__left">
						<div className="c__left-details">
							<h2 className="section__title">Get a quote</h2>
							<p className="contact__description">
								Fill up the form and I'll get back to you withn 24 hours.
							</p>
						</div>

						<div className="c__left-contacts">
							<a href="tel:0987654321">
								<div className="c-phone c-contact">
									<div className="c-left-icon">
										<BsTelephone className="c-icon" />
									</div>
									<div className="c-contact-title">
										<h4>Call me</h4>
										<span>+2348098543243</span>
									</div>
								</div>
							</a>
							<a href="mailto:hello@kelvin.com">
								<div className="c-email c-contact">
									<div className="c-left-icon">
										<MdOutlineAttachEmail className="c-icon" />
									</div>
									<div className="c-contact-title">
										<h4>Email me</h4>
										<span>hello@kelvin.com</span>
									</div>
								</div>
							</a>
							<a
								href="https://goo.gl/maps/nvLkzAD72wmezg8H6"
								target="blank"
								rel="noreferrer"
							>
								<div className="c-location c-contact">
									<div className="c-left-icon">
										<BiMapPin className="c-icon" />
									</div>
									<div className="c-contact-title">
										<h4>Locate me</h4>
										<span>abc street, Lagos Nigeria</span>
									</div>
								</div>
							</a>
						</div>

						<div className="c__left-socials">
							<a href="http://facebook.com" target="blank">
								<RiFacebookLine className="c-s-icon" />
							</a>
							<a href="http://twitter.com" target="blank">
								<RiTwitterLine className="c-s-icon" />
							</a>
							<a href="http://instagram.com" target="blank">
								<RiInstagramLine className="c-s-icon" />
							</a>
						</div>
					</div>

					<div className="contact__right">
						<form
							action=""
							className="form"
							ref={formRef}
							onSubmit={handleSubmit}
						>
							<div className="form-input">
								<span className="input-icon">
									<RiUser6Line />
								</span>
								<input
									type="text"
									placeholder="Write your name"
									name="user_name"
									className="input"
								/>
							</div>
							<div className="form-input">
								<span className="input-icon">
									<RiBallPenLine />
								</span>
								<input
									type="text"
									placeholder="Write your subject"
									name="user_subject"
									className="input"
								/>
							</div>
							<div className="form-input">
								<span className="input-icon">
									<RiMailCheckLine />
								</span>
								<input
									type="text"
									placeholder="hello@kelvin.com"
									name="user_email"
									className="input"
								/>
							</div>
							<div className="form-input">
								<span className="input-icon">
									<RiMessage3Line />
								</span>
								<textarea
									type="text"
									rows={5}
									placeholder="Write your message"
									name="message"
								/>
							</div>
							<button className="submit-btn">
								<RiMailSendLine className="submit-icon" />
								Deliver
							</button>
							<div className="thank__you">
								{sent &&
									"Thank you! We have recieved your message and we will definitely reply you shortly."}
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
