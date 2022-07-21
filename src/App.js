import React from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import Experience from "./components/experience/Experience";
import Work from "./components/work/Work";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
	return (
		<div>
			<Header />
			<Hero />
			<Services />
			<Experience />
			<Work />
			<Testimonials />
			<Contact />
			<Footer />
		</div>
	);
};

export default App;
