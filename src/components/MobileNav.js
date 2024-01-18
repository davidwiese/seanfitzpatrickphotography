import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";
import Link from "react-router-dom";
import { motion } from "framer-motion";

const MobileNav = () => {
	return (
		<nav>
			{/* nav open button */}
			<div className="text-3xl cursor-pointer">
				<CgMenuRight />
			</div>
			{/* menu */}
			<div className="bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20">
				Menu
			</div>
		</nav>
	);
};

export default MobileNav;
