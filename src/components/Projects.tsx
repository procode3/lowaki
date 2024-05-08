"use client";
import React, { useEffect } from "react";
import Glide from "@glidejs/glide/dist/glide.modular.esm";

export default function Projects() {
	useEffect(() => {
		setTimeout(() => {
			var glide = new Glide("#intro", {
				type: "carousel",
				perView: 4,
				focusAt: "center",
				breakpoints: {
					800: {
						perView: 2,
					},
					480: {
						perView: 1,
					},
				},
			});

			glide.mount();
		}, 0);
	}, []);

	return (
		<div className="text-neutral-900 h-screen p-10 lg:p-20 flex flex-col">
			<h2 className="text-[#265853] text-[8vw] md:text-[6vw] lg:text-[4.3vw] font-bold">
				Current Projects
			</h2>
			<p className="text-xl w-full text-center capitalize">
				CLEAN COOKING SOLUTION FOR JOYFUL WOMEN TABLE BANKING ORGANIZATION WITH
				MAMA DOING GOOD
			</p>
			{/* <div
				id="intro"
				className=""
			>
				<div className="glide">
					<div
						className="glide__track h-[50vh]"
						data-glide-el="track"
					>
						<ul className="gap-10  glide__slides">
							<li className="glide__slide w-1/3 h-[50vh] bg-blue-200 m-10">
								0
							</li>
							<li className="glide__slide w-1/3 h-[50vh] bg-blue-100 m-10">
								1
							</li>
							<li className="glide__slide w-1/3 h-[50vh] bg-blue-500 m-10">
								2
							</li>
							<li className="glide__slide w-1/3 h-[50vh] bg-blue-800 m-10">
								0
							</li>
							<li className="glide__slide w-1/3 h-[50vh] bg-blue-200 m-10">
								1
							</li>
							<li className="glide__slide w-1/3 h-[50vh] bg-blue-200 m-10">
								2
							</li>
							<li className="glide__slide w-1/3 h-[50vh] bg-blue-200 m-10">
								0
							</li>
							<li className="glide__slide w-1/3 h-[50vh] bg-blue-200 m-10">
								1
							</li>
							<li className="glide__slide w-1/3 h-[50vh] bg-blue-200 m-10">
								2
							</li>
						</ul>
					</div>
					<div
						className="glide__arrows"
						data-glide-el="controls"
					>
						<button
							className="glide__arrow glide__arrow--left"
							data-glide-dir="<"
						>
							prev
						</button>
						<button
							className="glide__arrow glide__arrow--right"
							data-glide-dir=">"
						>
							next
						</button>
					</div>
				</div>
			</div> */}

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
