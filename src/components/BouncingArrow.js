import React from "react";
import { motion } from "framer-motion";

const BouncingArrow = () => {
	// Bounce animation
	const bounceAnimation = {
		y: [0, -15, 0], // Move the arrow up and down
		transition: {
			y: {
				duration: 0.6, // Duration of one bounce
				ease: "easeInOut",
				repeat: Infinity, // Repeat the animation indefinitely
				repeatType: "loop",
			},
		},
	};

	return (
		<motion.div
			className="fixed bottom-[350px] right-5 z-50" // Positioning the arrow on the page
			animate={bounceAnimation} // Applying the bounce animation
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-6 w-6 animate-bounce"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M19 14l-7 7m0 0l-7-7m7 7V3"
				/>
			</svg>
		</motion.div>
	);
};

export default BouncingArrow;
