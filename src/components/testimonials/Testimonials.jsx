import React from "react";
import "./testimonials.css";
import T1 from "../../images/t1.jpg";
import T2 from "../../images/t2.jpg";
import T3 from "../../images/t3.jpg";
import T4 from "../../images/t4.jpg";
import T5 from "../../images/t5.jpg";
import T6 from "../../images/t6.jpg";

// import { FaLongArrowAltLeft } from "react-icons/fa";
// import { FaLongArrowAltRight } from "react-icons/fa";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

const data = [
	{
		id: 1,
		comment:
			"Didn't think I would need a website for my business that much, but it's been one of my most frequently income generator in the past months!",
		img: T1,
		name: "Winnie Gwey",
		post: "Digital Designer - Freelo Gley",
	},
	{
		id: 2,
		comment:
			"This is a whole new world for me. I never though Branding could be so important in a business until I met Kelvin. I'm so happy",
		img: T2,
		name: "Smith Fraley",
		post: "CEO - Fraley & Co.",
	},
	{
		id: 3,
		comment:
			"We've grown our income and influence with over 30% few months from launching our new app. Its crazy. I highly recommend Kelvin",
		img: T3,
		name: "Sherry Laim",
		post: "Co Founder - Shedai Consultant.",
	},
	{
		id: 4,
		comment:
			"I have the understanding that creativers needs to have a portfolio, but I didn't know who to trust with mine until I met Kelvin.",
		img: T4,
		name: "Michael Snow",
		post: "Creative Art - JustUs.",
	},
	{
		id: 5,
		comment:
			"I wish I took the decision of branding my firm sooner. I can't imagine the result I've had since Kelvin did for me. It's mind blowing!",
		img: T5,
		name: "Lola Johnson",
		post: "Coo - LoJoh Firm.",
	},
	{
		id: 6,
		comment:
			"I wasn't so sure of the job Kelvin was going to do for me until I saw it. He made me stand out from the crowd. Kelvin is the bomb!",
		img: T6,
		name: "Jeremy Stone",
		post: "CEO - Stone & Co..",
	},
];

const Testimonials = () => {
	return (
		<section className="section testimonials" id="testimonials">
			<div className="container testimonials__container">
				<h2 className="section__title">What People Have To Say About Me</h2>
				<Swiper
					navigation={true}
					modules={[Navigation]}
					className="testimonials__data"
					spaceBetween={100}
					slidesPerView={1}
					loop={true}
					autoplay={{ delay: 3000, disableOnInteraction: false }}
					// onSlideChange={() => console.log("slide change")}
					// onSwiper={(swiper) => console.log(swiper)}
				>
					{data.map(({ id, comment, img, name, post }) => {
						return (
							<SwiperSlide className="testimonial" key={id}>
								<p className="comment">{comment}</p>
								<div className="person">
									<div className="person__img">
										<img src={img} alt="T1" className="p-img" />
									</div>
									<div className="person__details">
										<h4 className="person-name">{name}</h4>
										<small className="person-portfolio">{post}</small>
									</div>
								</div>
							</SwiperSlide>
						);
					})}

					{/* <div className="navigations">
						<FaLongArrowAltLeft className="nav-arrow" />
						<FaLongArrowAltRight className="nav-arrow" />
					</div> */}
				</Swiper>
			</div>
		</section>
	);
};

export default Testimonials;
