import React, { useContext } from "react";
import ManImg from "../img/about/man.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import { CursorContext } from "../context/CursorContext";

const About = () => {
	const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

	return (
		<motion.section
			initial={{ opacity: 0, y: "100%" }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: "100%" }}
			transition={transition1}
			className="section "
		>
			<div
				onMouseEnter={mouseEnterHandler}
				onMouseLeave={mouseLeaveHandler}
				className="container mx-auto h-full relative"
			>
				{/* text & img */}
				<div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
					{/* image */}
					<div className="flex-1 max-h-96 lg:max-h-max md:max-h-max order-2 lg:order-none overflow-hidden mt-[-40px]">
						<img src={ManImg} alt="" />
					</div>
					{/* text */}
					<motion.div
						initial={{ opacity: 0, y: "-80%" }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: "-80%" }}
						transition={transition1}
						className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start"
					>
						<h1 className="h1">About Me</h1>
						<p className="mb-12 max-w-sm">
							I'm a Los Angeles based photographer, focused primarily on{" "}
							<b>portraits, concerts, and events</b>.
							<br />
							<br />
							My goal is blending artistry with a candid style to capture the
							unforgettable moments and true spirit of each person.
						</p>
						<Link to={"/portfolio"} className="btn">
							VIEW MY WORK
						</Link>
					</motion.div>
				</div>
			</div>
		</motion.section>
	);
};

export default About;
