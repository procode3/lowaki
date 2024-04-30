import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
	return (
		<div className="fixed top-0 w-full flex items-center justify-between h-[70px] px-10  text-neutral-900 backdrop-blur-xl z-10">
			<div className="flex gap-5 items-center">
				<div className="logo h-[50px] w-[50px] relative ">
					<Image
						src="/logo.png"
						alt="lowaki solutions logo"
						fill={true}
						style={{ objectFit: "contain" }}
					/>
				</div>
				<h1 className=""> LOWAKI ECO-SOLUTIONS</h1>
			</div>

			<div className="hidden lg:flex nav-links justify-center items-center ">
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
					Partners
				</Link>
				<Link
					href="#"
					className="home mr-10 text-sm font-medium filter mix-blend-difference"
				>
					Program
				</Link>
				<Link
					href="#"
					className="home mr-10 text-sm font-medium filter mix-blend-difference"
				>
					Gallery
				</Link>
				<Link
					href="#"
					className="home mr-10 text-sm font-medium filter mix-blend-difference"
				>
					Contact
				</Link>
			</div>
			<div className="home text-sm font-medium px-3 py-2 bg-green-700 text-white rounded-lg">
				Get Started
			</div>
		</div>
	);
} 
