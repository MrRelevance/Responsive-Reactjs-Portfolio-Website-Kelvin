import React from "react";
import "./work.css";
import Work1 from "../../images/work1.png";
import Work2 from "../../images/work2.png";
import Work3 from "../../images/work3.png";
import Work4 from "../../images/work4.png";
import Work5 from "../../images/work5.png";
import Work6 from "../../images/work6.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// import required modules
// import { FreeMode, Pagination } from "swiper";

const data = [
	{
		id: 1,
		link: "#",
		img: Work1,
		title: "App Design",
		name: "Food Delivery App",
	},
	{
		id: 2,
		link: "#",
		img: Work2,
		title: "Web Design",
		name: "Agency Website",
	},
	{
		id: 3,
		link: "#",
		img: Work3,
		title: "Brand Design",
		name: "Brand Identity Design",
	},
	{
		id: 4,
		link: "#",
		img: Work4,
		title: "App Design",
		name: "Coffee Shop Mobile",
	},
	{
		id: 5,
		link: "#",
		img: Work5,
		title: "Web Design",
		name: "Food Delivery",
	},
	{
		id: 6,
		link: "https://www.behance.net/gallery/136895435/Picture-Book?tracking_source=search_projects",
		img: Work6,
		title: "App Design",
		name: "Food Delivery App",
	},
];

const Work = () => {
	SwiperCore.use([Autoplay]);

	return (
		<section className="section" id="works">
			<div className="container work__container">
				<div className="work__section-details">
					<div className="work__section-data">
						<h2 className="section__title">Recent projects</h2>
						<p className="work__description">
							Check out some of my recent creativity.
						</p>
					</div>
					<a href="https://github.com/JustPerfectDesigns" className="work__btn">
						Explore More Creativity
					</a>
				</div>
				<Swiper
					breakpoints={{
						// when window width is >= 640px
						640: {
							width: 1000,
							slidesPerView: 3,
							spaceBetween: 320,
						},
						// when window width is >= 768px
						// 768: {
						// 	width: 768,
						// 	slidesPerView: 2,
						// },
					}}
					slidesPerView={1}
					spaceBetween={10}
					loop={true}
					autoplay={{ delay: 3000, disableOnInteraction: false }}
					// centeredSlides={true}
					// freeMode={true}
					className="mySwiper works"
				>
					{data.map(({ id, link, img, title, name }) => {
						return (
							<SwiperSlide className="work" key={id}>
								<a href={link} target="_blank" rel="noreferrer">
									<div className="work__details">
										<img src={img} alt="" />
										<div className="work__texts">
											<h3 className="project__title">{title}</h3>
											<p className="project__name">{name}</p>
										</div>
									</div>
								</a>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</section>
	);
};

export default Work;
