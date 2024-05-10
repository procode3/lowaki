import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

export default function Landing() {
	return (
		<div className="h-screen w-full relative text-[#265853] ">
			<div className="absolute right-32 top-40 h-[70vh] w-2/3 z-10">
				<div className="h-full w-full relative z-10 ">
					<Image
						src="/earth.png"
						alt="forest photography"
						fill={true}
						style={{ objectFit: "contain" }}
					/>
				</div>
			</div>
			<div className="absolute -right-20 top-20 h-[40vh] w-1/2 md:w-1/3 z-10">
				<div className="h-full w-full relative z-10 ">
					<Image
						src="/city.png"
						alt="forest photography"
						fill={true}
						style={{ objectFit: "contain" }}
					/>
				</div>
			</div>

			<div className=" bg-[#FCF0E7] absolute top-0 w-full lg:w-1/2 h-1/2 lg:h-screen rounded-br-3xl"></div>
			<div className="w-full flex flex-col lg:flex-row gap-5 justify-between absolute top-[25%] px-10">
				<div className="w-full flex flex-col gap-1">
					<h1 className="text-[8vw] md:text-[6vw] lg:text-[4.3vw] leading-tight tracking-tighter w-full">
						The greatest <span className="font-extrabold">threat</span> to our{" "}
						<span className="font-extrabold">planet</span> is the belief that
						<span className="font-extrabold"> someone</span> else{" "}
						<span className="font-extrabold">will save it.</span>
					</h1>
					<p className="text-neutral-700 w-full lg:w-3/5">
						At Lowaki we&apos;re on a mission to revolutionalize the way
						communities access and embrace clean energy solution
					</p>
				</div>
				<div className="z-20 w-full flex flex-col pl-40 gap-3 items-start justify-end">
					<h2 className="text-[6vw] md:text-[4vw] lg:text-[2vw] tracking-tighter text-neutral-900 font-bold">
						Start now, at home
					</h2>
					<p className="text-neutral-700 tracking-tighter leading-normal">
						A small thing that you can do, can go a long way into saving the
						world
					</p>
					<Button 
						className="font-semibold bg-[#265853]">
						<Link
							href="#"
						>
							Get Started
						</Link>
					</Button>
				</div>
			</div>
		</div>
	);
}
