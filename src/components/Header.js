import React, { useContext } from "react";
import Socials from "./Socials";
import Logo from "../img/header/logo.png";
import MobileNav from "./MobileNav";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="fixed top-0 left-0 w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center bg-white">
			<div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
				{/* Logo */}
				<Link to={"/"} className="max-w-[270px]">
					<img src={Logo} alt="homepage" />
				</Link>
				{/* nav - initially hidden - show on desktop */}
				<nav className="hidden xl:flex gap-12 font-semibold">
					<Link
						to={"/"}
						className="text-[#252626] hover:text-primary transition"
					>
						Home
					</Link>
					<Link
						to={"/about"}
						className="text-[#252626] hover:text-primary transition"
					>
						About
					</Link>
					<Link
						to={"/portfolio"}
						className="text-[#252626] hover:text-primary transition"
					>
						Portfolio
					</Link>
					<Link
						to={"/contact"}
						className="text-[#252626] hover:text-primary transition"
					>
						Contact
					</Link>
				</nav>
			</div>
			{/* socials */}
			<Socials />
			{/* mobile nav */}
			<MobileNav />
		</header>
	);
};

export default Header;
