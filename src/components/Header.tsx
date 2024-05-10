import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

export default function Header() {
	return (
		<div className="fixed top-0 w-full flex items-center justify-between h-[70px] px-10  text-neutral-900 bg-white z-10">
			<div className="flex gap-5 items-center">
				<div className="logo h-[50px] w-[50px] relative ">
					<Image
						src="/logo.png"
						alt="lowaki solutions logo"
						fill={true}
						style={{ objectFit: "contain" }}
					/>
				</div>
				<h1 className="text-sm lg:text-lg"> LOWAKI ECO-SOLUTIONS</h1>
			</div>

			<div className="hidden lg:flex nav-links justify-center items-center ">
				<Link
					href="#"
					className="home mr-10 text-sm font-medium filter "
				>
					Home
				</Link>
				<Link
					href="#"
					className="home mr-10 text-sm font-medium filter "
				>
					About Us
				</Link>
				<Link
					href="#"
					className="home mr-10 text-sm font-medium filter "
				>
					Partners
				</Link>
				<Link
					href="#"
					className="home mr-10 text-sm font-medium filter "
				>
					Program
				</Link>
				<Link
					href="#"
					className="home mr-10 text-sm font-medium filter "
				>
					Gallery
				</Link>
				<Link
					href="#"
					className="home mr-10 text-sm font-medium filter "
				>
					Contact
				</Link>
			</div>
			<Button>
				<Link
					href="#"
					className="font-semibold"
				>
					Contact Us
				</Link>
			</Button>
		</div>
	);
} 
