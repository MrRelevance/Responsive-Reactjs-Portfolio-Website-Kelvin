import React from "react";
import Brand1 from "../../images/brand1.png";
import Brand2 from "../../images/brand2.png";
import Brand3 from "../../images/brand3.png";

const TopRated = () => {
	return (
		<div className="top__rated">
			<h4 className="top__rated-text">Top Rated Designer:</h4>
			<div className="top__rated-brands">
				<img src={Brand1} alt="Brand1" />
				<img src={Brand2} alt="Brand2" />
				<img src={Brand3} alt="Brand3" />
			</div>
		</div>
	);
};

export default TopRated;
