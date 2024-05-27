import { CarouselSection } from "@/components/CarouselSection";
import React from "react";
import Products from "./../../components/Products";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function page() {
	return (
		<div className=" w-full text-black h-full bg-white pt-14 p-5 md:p-10 lg:px-10 flex flex-col gap-10">
			<div className="w-full flex flex-col items-center justify-center"></div>
			{/* <div className="w-full h-[20vh] bg-green-200"></div> */}
			<div className="w-full flex flex-col items-center">
				<h1 className="text-xl md:text-2xl lg:text-[32px]  text-[#265853] tracking-tighter">
					Our Products
				</h1>
				<p className="text-[16px]">Here are some of our Products</p>
			</div>
			<div className="flex flex-col justify-center items-center w-full gap-1">
				<div className=" h-full flex flex-wrap w-full justify-evenly ">
					<div className="h-[300px]  w-[200px]">
						<div className="relative w-full h-full">
							<Image
								src="/1.jpg"
								alt="jikos"
								style={{ objectFit: "cover" }}
								fill
							/>
						</div>
						<div className="flex flex-col gap-3">
							<h4 className="text-[18px]">Jiko Kisasa</h4>
							<p className="text-[14px]">Saves over 60% of fuel</p>
							<Button className="bg-[#265853]">Buy Now</Button>
						</div>
					</div>
					<div className="h-[300px]  w-[200px]">
						<div className="relative w-full h-full">
							<Image
								src="/11.jpg"
								alt="jikos"
								style={{ objectFit: "cover" }}
								fill
							/>
						</div>
						<div className="flex flex-col gap-3">
							<h4 className="text-[18px]">Gastov</h4>
							<p className="text-[14px]">Saves over 75% of fuel.</p>
							<Button className="bg-[#265853]">Buy Now</Button>
						</div>
					</div>
					<div className="h-[300px]  w-[200px]">
						<div className="relative w-full h-full">
							<Image
								src="/9.jpg"
								alt="jikos"
								style={{ objectFit: "cover" }}
								fill
							/>
						</div>
						<div className="flex flex-col gap-2">
							<h4 className="text-[18px]">Gastov Mini</h4>
							<p className="text-[14px]">Saves over 75% of fuel.</p>
							<Button className="bg-[#265853]">Buy Now</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
