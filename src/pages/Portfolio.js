import React, { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import BouncingArrow from "../components/BouncingArrow";

import photos from "../photos";

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
			<PhotoAlbum
				photos={photos}
				layout="rows"
				targetRowHeight={150}
				spacing={5}
				onClick={({ index }) => setIndex(index)}
			/>

			<Lightbox
				slides={photos}
				open={index >= 0}
				index={index}
				close={() => setIndex(-1)}
				// enable optional lightbox plugins
				plugins={[Fullscreen, Thumbnails, Zoom]}
			/>
		</motion.section>
	);
};

export default Portfolio;
