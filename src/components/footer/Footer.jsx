import React from "react";
import "./footer.css";

const Footer = () => {
	const date = new Date();

	return (
		<footer className="footer">
			<div className="footer__container container">
				<div className="line"></div>
				<div className="footer__flex">
					<span className="year">
						&copy; {date.getFullYear()} All Right Reserved
					</span>
					<span className="who">Designed By Kelvin</span>
					<span className="email">Hello@kelvin.com</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
