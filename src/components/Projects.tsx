import React, { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const imagePaths = ["/logo.png", "/kirdi.png", "/logo.png", "/kirdi.png",'/logo.png', '/kirdi.png',];
export default function Projects() {

	return (
		<div className="text-neutral-900 h-screen p-10 lg:p-20 flex flex-col">
			<h2 className="text-[#265853] text-[8vw] md:text-[6vw] lg:text-[4.3vw] font-bold">
				Current Projects
			</h2>
			<p className="text-xl w-full text-center capitalize">
				CLEAN COOKING SOLUTION FOR JOYFUL WOMEN TABLE BANKING ORGANIZATION WITH
				MAMA DOING GOOD
			</p>

			<div className="w-full h-full">
				<Carousel className="w-full">
					<CarouselContent className="-ml-1">
						{imagePaths.map((path, index) => (
							<CarouselItem
								key={index}
								className="pl-1 md:basis-1/2 lg:basis-1/3"
							>
								<div className="p-1">
									<Card>
										<CardContent className="flex aspect-square items-center justify-center p-6">
											<div className='relative w-96 h-48'>
												<Image
												src={path}
												alt='carousel projects'
												fill={true}
												style={{objectFit: 'contain'}}
												/>
											</div>
										</CardContent>
									</Card>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</div>

			<div className="flex gap-10">
				<div className="p-5 bg-neutral-200 rounded-xl w-full lg:w-1/3 ">
					Our partnership with Mama doing good aims to promote women&apos;s
					economic empowerment and address financial exclusion by facilitating
					access to clean cooking solutions to the women groups.
				</div>
				<div className="p-5 bg-[#FCF0E7] rounded-xl w-full lg:w-1/3 ">
					With Mama Doing Good&apos;s extensive presence across 44 counties in
					Kenya and a membership of over 18,000 groups, the partnership
					leverages this network to promote the transition to clean cooking
					solutions.
				</div>
				<div className="p-5 bg-neutral-200 rounded-xl w-full lg:w-1/3 ">
					Through this collaboration, the Women entrepreneurs are incentivized
					to distribute and promote clean cooking technologies, thereby
					contributing to environmental sustainability and improving livelihoods
					within their communities.
				</div>
			</div>
		</div>
	);
}
