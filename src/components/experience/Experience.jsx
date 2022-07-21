import React from "react";
import "./experience.css";

const Experience = () => {
	return (
		<section className="section experience" id="experience">
			<div className="container experience__container">
				<h2 className="section__title experience__section-title">
					My Work Experience
				</h2>
				<div className="experience__list">
					<div className="experience__list-item">
						<div className="experience__work">
							<h3 className="experience__work-name h3__title">
								Fast Data Steal & Co
							</h3>
							<p className="experience__work-year">Feb 2012 - Sep 2015</p>
						</div>
						<div className="experience__work-description">
							<h3 className="experience__work-post h3__title">
								Frontend Web Developer
							</h3>
							<p className="experience__work-post-description">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Corporis nam mollitia perferendis saepe distinctio obcaecati
								laborum laboriosam doloribus aspernatur rem.
							</p>
						</div>
					</div>
					<div className="experience__list-item desc__2">
						<div className="experience__work">
							<h3 className="experience__work-name h3__title">
								Luxury Properties Real Estates
							</h3>
							<p className="experience__work-year">Aug 2014 - May 2017</p>
						</div>
						<div className="experience__work-description">
							<h3 className="experience__work-post h3__title">
								Brand Identity Designs
							</h3>
							<p className="experience__work-post-description">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
								et, veniam maxime cupiditate architecto velit nisi asperiores
								dicta recusandae animi!
							</p>
						</div>
					</div>
					<div className="experience__list-item desc__3">
						<div className="experience__work">
							<h3 className="experience__work-name h3__title">
								Just Perfect Design Agency
							</h3>
							<p className="experience__work-year">Jun 2017 - Till Date</p>
						</div>
						<div className="experience__work-description">
							<h3 className="experience__work-post h3__title">
								Website Developer
							</h3>
							<p className="experience__work-post-description">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
								dolores, earum repellat tempora nemo sint aspernatur doloremque
								aut explicabo dolore.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
