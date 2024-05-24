import { CarouselSection } from "@/components/CarouselSection";
import React from "react";
import Products from "./../../components/Products";
import Image from "next/image";

export default function page() {
	return (
		<div className=" w-full text-black pt-14 p-5 md:p-10 lg:p-20 flex flex-col gap-10">
			<div className="w-full flex flex-col items-center justify-center">
				<h1 className="text-xl md:text-2xl lg:text-[48px] w-full text-center  text-[#265853] tracking-tighter">
					Our Products
				</h1>
				<p>Here are some of our products</p>
			</div>

			<div className="flex justify-evenly gap-10">
				<div className="h-[50vh] bg-red-200 w-[500px]">
					<div className="relative w-full h-full">
						<Image
							src="/DSC_0831.jpg"
							alt="jikos"
							fill
						/>
					</div>
					Clean Cooking Solutions{" "}
				</div>
				<div className="h-[50vh] bg-red-200 w-[500px]">
					<div className="relative w-full h-full">
						<Image
							src="/DSC_0831.jpg"
							alt="jikos"
							fill
						/>
					</div>
					Clean Cooking Solutions{" "}
				</div>
			</div>
			{/* <CarouselSection /> */}
		</div>
	);
}
