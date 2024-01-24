import React, { useContext } from "react";
import { ImInstagram } from "react-icons/im";
import { CursorContext } from "../context/CursorContext";

const Socials = () => {
	const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

	return (
		<div
			onMouseEnter={mouseEnterHandler}
			onMouseLeave={mouseLeaveHandler}
			className="hidden xl:flex ml-24"
		>
			<ul className="flex gap-4">
				<li>
					<a
						href="https://www.instagram.com/seanyfitzpics/"
						target="_blank"
						rel="noreferrer"
					>
						<ImInstagram />
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Socials;
