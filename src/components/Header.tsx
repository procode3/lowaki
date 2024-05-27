import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

export default function Header() {
	return (
		<div className="fixed top-0 w-full flex items-center justify-between h-[10vh] px-5 md:px-10 text-black backdrop-blur-lg z-40 border-b border-b-gray-500">
			<div className="flex gap-5 items-center">
				<div className="logo h-[50px] w-[50px] relative ">
					<Image
						src="/logo.png"
						alt="lowaki solutions logo"
						fill={true}
						style={{ objectFit: "contain" }}
					/>
				</div>
				<Link
					href="/"
					className="text-[12px] lg:text-[16px] font-medium"
				>
					LOWAKI ECO-SOLUTIONS
				</Link>
			</div>

			<div className="hidden lg:flex nav-links justify-center items-center ">
				<Link
					href="/"
					className="home mr-10 text-sm"
				>
					Home
				</Link>
				<Link
					href="/products"
					className="home mr-10 text-sm"
				>
					Products
				</Link>
				<Link
					href="#"
					className="home mr-10 text-sm"
				>
					About Us
				</Link>
				<Link
					href="#"
					className="home mr-10 text-sm"
				>
					Partners
				</Link>
			</div>
			<Button className="font-semibold bg-[#265853]">
				<Link
					href="#"
					className="font-semibold text-xs"
				>
					Contact Us
				</Link>
			</Button>
		</div>
	);
} 
