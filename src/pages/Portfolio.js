import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

import photos from "../photos";
import BouncingArrow from "../components/BouncingArrow";

const Portfolio = () => {
	const [index, setIndex] = useState(-1);

	return (
		<motion.section
			initial={{ opacity: 0, y: "100%" }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: "100%" }}
			transition={transition1}
			className="section"
			style={{ overflowY: "auto" }}
		>
			<div className="container mx-auto h-full relative">
				<div className="flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8">
					{/* text */}
					<motion.div
						initial={{ opacity: 0, y: "-80%" }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: "-80%" }}
						transition={transition1}
						className="flex flex-col lg:items-start"
					>
						<h1 className="h1">Portfolio</h1>
						<p className="mb-12 max-w-sm">
							Discover the <b>beauty and diversity</b> of Los Angeles through my
							lens. My collection showcases the colorful tapestry of life, from
							serene individual portraits to the pulsing energy of concerts.
							<br />
							<br />I invite you to browse and immerse yourself in the
							captivating images that represent my passion for photography.
						</p>
						<Link to={"/contact"} className="btn mb-[30px] mx-auto lg:mx-0">
							HIRE ME
						</Link>
					</motion.div>
					<div className="block md:hidden">
						<BouncingArrow />
					</div>
					{/* image grid */}
				</div>
			</div>
		</motion.section>
	);
};

/*  <div className="grid grid-cols-2 lg:gap-2 gap-1 pb-8">
						<div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
							<img
								className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
								src="https://res.cloudinary.com/dqztlsan0/image/upload/f_auto,q_auto/v1/seany%20cropped/fb0hyutalzurpc8uwl0t"
								alt=""
							/>
						</div>
						<div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
							<img
								className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
								src="https://res.cloudinary.com/dqztlsan0/image/upload/f_auto,q_auto/v1/seany%20cropped/bc81avhtnaxauywcbnwj"
								alt=""
							/>
						</div>
						<div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
							<img
								className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
								src="https://res.cloudinary.com/dqztlsan0/image/upload/f_auto,q_auto/v1/seany%20cropped/muw7asqs2me40a1wsaiy"
								alt=""
							/>
						</div>
						<div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
							<img
								className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
								src="https://res.cloudinary.com/dqztlsan0/image/upload/f_auto,q_auto/v1/seany%20cropped/h8dxlolsknrt8js8givo"
								alt=""
							/>
						</div>
						<div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
							<img
								className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
								src="https://res.cloudinary.com/dqztlsan0/image/upload/f_auto,q_auto/v1/seany%20cropped/p6q4dpxifuoiyniiqiss"
								alt=""
							/>
						</div>
						<div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
							<img
								className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
								src="https://res.cloudinary.com/dqztlsan0/image/upload/f_auto,q_auto/v1/seany%20cropped/hwn22u6d8mzf76w6504t"
								alt=""
							/>
						</div>
						<div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
							<img
								className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
								src="https://res.cloudinary.com/dqztlsan0/image/upload/f_auto,q_auto/v1/seany%20cropped/s9v5calyf4lu4tv81gg2"
								alt=""
							/>
						</div>
						<div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
							<img
								className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
								src="https://res.cloudinary.com/dqztlsan0/image/upload/f_auto,q_auto/v1/seany%20cropped/spqpwtpxxcpwwjwledij"
								alt=""
							/>
						</div>
					</div> */

export default Portfolio;
