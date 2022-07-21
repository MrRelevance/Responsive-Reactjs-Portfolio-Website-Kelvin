import React, { useState } from "react";
import "./header.css";
import { BsTelephoneXFill } from "react-icons/bs";
import { CgMenuRight } from "react-icons/cg";

const Header = () => {
	const [showMenu, setShowMenu] = useState("");

	const activateMenu = () => {
		setShowMenu(!showMenu);
	};

	const deactivateMenu = () => {
		setShowMenu("");
	};

	const [activeNav, setActiveNav] = useState("#");

	return (
		<header className="header" id="header">
			<nav className="nav container">
				<a href="#hero" className="nav__logo">
					Kelvin
				</a>

				<div className={showMenu ? "show-menu" : ""} id="nav__menu">
					<ul className="nav__list">
						<li className="nav__item">
							<a
								href="#hero"
								onClick={() => {
									setActiveNav("#");
									deactivateMenu();
								}}
								className={activeNav === "#" ? "active-link" : ""}
							>
								Home
							</a>
						</li>
						<li className="nav__item">
							<a
								href="#services"
								onClick={() => {
									setActiveNav("#services");
									deactivateMenu();
								}}
								className={activeNav === "#services" ? "active-link" : ""}
							>
								services
							</a>
						</li>
						<li className="nav__item">
							<a
								href="#experience"
								onClick={() => {
									setActiveNav("#experience");
									deactivateMenu();
								}}
								className={activeNav === "#experience" ? "active-link" : ""}
							>
								experience
							</a>
						</li>
						<li className="nav__item">
							<a
								href="#works"
								onClick={() => {
									setActiveNav("#works");
									deactivateMenu();
								}}
								className={activeNav === "#works" ? "active-link" : ""}
								// onClick={deactivateMenu}
							>
								works
							</a>
						</li>
						<li className="nav__item">
							<a
								href="#testimonials"
								onClick={() => {
									setActiveNav("#testimonials");
									deactivateMenu();
								}}
								className={activeNav === "#testimonials" ? "active-link" : ""}
							>
								notes
							</a>
						</li>
					</ul>
				</div>

				<div className="nav__btns">
					<a href="tel:0987654321">
						<span className="number">+234 8035 344 313</span>
					</a>
					<div className="number__icon">
						<BsTelephoneXFill className="number__icon-btn" />
					</div>

					<div class="nav__toggle">
						<CgMenuRight onClick={activateMenu} />
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
