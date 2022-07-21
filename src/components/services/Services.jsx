import React from "react";
import "./services.css";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { VscDeviceMobile } from "react-icons/vsc";
import { BsBrush } from "react-icons/bs";

const Services = () => {
	return (
		<section className="section services" id="services">
			<div className="container services__container">
				<div className="services__data">
					{/* Service 1 =============== */}
					<div className="service service__1">
						<div className="service__icon web">
							<HiOutlineDesktopComputer className="service__main-icon" />
						</div>
						<div className="service__details">
							<h3 className="service__details-title h3__title">
								Website Design
							</h3>
							<p className="service__details-project">122 Projects</p>
						</div>
					</div>

					{/* Service 2 =============== */}
					<div className="service service__2">
						<div className="service__icon mobile">
							<VscDeviceMobile className="service__main-icon" />
						</div>
						<div className="service__details">
							<h3 className="service__details-title h3__title">
								Mobile App Design
							</h3>
							<p className="service__details-project">97 Projects</p>
						</div>
					</div>

					{/* Service 3 =============== */}
					<div className="service service__3">
						<div className="service__icon brand">
							<BsBrush className="service__main-icon" />
						</div>
						<div className="service__details">
							<h3 className="service__details-title h3__title">
								Brand Identity
							</h3>
							<p className="service__details-project">81 Projects</p>
						</div>
					</div>
				</div>

				<div className="services__content">
					<h2 className="section__title">What do you need help with?</h2>
					<p className="services__description">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
						ullam libero obcaecati! Ipsa assumenda iusto autem obcaecati maxime
						cupiditate qui quae fuga nesciunt, porro aperiam necessitatibus
						debitis quaerat facere tenetur!
					</p>
					<div className="services__stats">
						<div className="services__stats-completed">
							<h3 className="section__title stats__completed-number">290+</h3>
							<p className="services__stats-p">Project Completed</p>
						</div>
						<div className="services__stats-client">
							<h3 className="section__title stats__client-number">170+</h3>
							<p className="services__stats-p">Happy Clients</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
