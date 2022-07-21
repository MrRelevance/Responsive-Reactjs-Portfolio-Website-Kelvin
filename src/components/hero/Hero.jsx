import React from "react";
import "./hero.css";
import HeroSocials from "./HeroSocials";
import TopRated from "./TopRated";
import { VscFoldDown } from "react-icons/vsc";
import Kelvin from "../../images/kelvin.png";

const Hero = () => {
	return (
		<section className="hero" id="hero">
			<div className="hero__container container grid">
				<HeroSocials />
				<div className="hero__data">
					<h1 className="hero__title">Hey There, I’m Kelvin</h1>
					<p className="hero__description">
						I build and design beautifully simple things and I love what I do.
					</p>
					<a href="mailto:hello@kelvin.com" className="hero__email">
						hello@kelvin.com
					</a>
					<TopRated />
					<a href="#services">
						<div className="scroll__down">
							Scroll Down <VscFoldDown className="scroll__icon" />
						</div>
					</a>
				</div>

				<div className="hero__img">
					<img src={Kelvin} alt="Kelvin" />
				</div>
			</div>
		</section>
	);
};

export default Hero;
