import React from "react";
import { RxDividerVertical } from "react-icons/rx";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import Link from "next/link";

const Navbar = () => {
	return (
		<nav className="h-88 text-1xl flex flex-row items-center gap-16 p-0">
			<div className="flex flex-row items-start gap-16 font-bold uppercase">
				<Link className="hover:text-violet-300" href="/">
					home
				</Link>
				<Link className="hover:text-violet-300" href="/">
					courses
				</Link>
				<Link className="hover:text-violet-300" href="/">
					community
				</Link>
				<Link className="hover:text-violet-300" href="/">
					about
				</Link>
			</div>

			<RxDividerVertical className="text-3xl" />

			<div className="flex flex-row gap-24 text-2xl font-bold">
				<AiOutlineSearch className="hover:text-violet-300" />
				<AiOutlineUser className="hover:text-violet-300" />
			</div>
		</nav>
	);
};

export default Navbar;
