import Link from "next/link";
import React from "react";

export default function Header() {
	return (
		<div className="fixed top-0 w-full flex items-center justify-between h-[70px] px-10 bg-black bg-opacity-30 text-white backdrop-blur-xl z-10">
			<div className="logo">LOWAKI ECO-SOLUTIONS</div>
			<div className="nav-links flex justify-center items-center ">
				<Link
					href="#"
					className="home mr-10 text-sm font-medium filter mix-blend-difference"
				>
					Home
				</Link>
				<Link
					href="#"
					className="home mr-10 text-sm font-medium filter mix-blend-difference"
				>
					About Us
				</Link>
				<Link
					href="#"
					className="home mr-10 text-sm font-medium filter mix-blend-difference"
				>
					Projects
				</Link>
				<Link
					href="#"
					className="home mr-10 text-sm font-medium filter mix-blend-difference"
				>
					Products
				</Link>
				<Link
					href="#"
					className="home mr-10 text-sm font-medium filter mix-blend-difference"
				>
					Contact
				</Link>
			</div>
			<div className="home text-sm font-semibold px-3 py-2 bg-green-600 text-black rounded-full">
				Get Started
			</div>
		</div>
	);
} 
