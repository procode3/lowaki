import React from "react";
import ProductCarousel from "./ui/productCarousel";

export function CarouselSection() {
	// const DATA = [
	// 	{ image: "https://picsum.photos/seed/random101/500/500" },
	// 	{ image: "https://picsum.photos/seed/random102/500/500" },
	// 	{ image: "https://picsum.photos/seed/random103/500/500" },
	// ];

	const stoves = [
		{
			name: "Jiko Kisasa",
			images: [
				"https://picsum.photos/seed/random101/500/500",
				"https://picsum.photos/seed/random102/500/500",
				"https://picsum.photos/seed/random103/500/500",
			],
			description:
				"Saves over 60% of fuel. Over 50% smoke reduction. Made with a mix of clay & rice husks High temperature thermal insulation. Made of stainless steel.",
			fuel: ["Charcoal", "Firewood", "Briquettes"],
		},
		{
			name: "Portable Rocket Stove",
			images: [
				"/1.jpg",
				"/2.jpg",
				"/3.jpg",
			],
			description:
				"Saves over 60% of fuel. Over 50% smoke reduction. Made with a mix of clay & rice husks High temperature thermal insulation. Made of stainless steel.",
			fuel: ["Firewood",],
		},
		{
			name: "Gasifier",
			images: [
				"https://picsum.photos/seed/random101/500/500",
				"https://picsum.photos/seed/random102/500/500",
				"https://picsum.photos/seed/random103/500/500",
			],
			description:
				"Saves over 75% of fuel. No forced draft needed. Over 60% smoke reduction. Made of stainless steel. High temperature thermal insulation. Made of stainless steel. ",
			fuel: ["Firewood", "Briquettes"],
		},
	];
	return (
		<div className="flex flex-col items-center justify-center gap-5 p-10 lg:p-20 text-black">
			<h1 className="text-[#265853] text-start w-full text-[8vw] md:text-[6vw] lg:text-[4.3vw]">
				Improved <span className="font-bold">Cook Stoves</span>
			</h1>
			<div className="flex flex-wrap justify-center gap-10 w-full">
				{stoves.map((v, i) => (
					<div key={i} className="w-80 flex flex-col gap-5 p-5  rounded-xl shadow-md">
						<ProductCarousel
							key={i}
							data={v}
						/>
						<div className='flex flex-col gap-3'>
							<h3 className="text-[24px] font-bold">{v.name}</h3>
							<p>{v.description}</p>
							<div>
								<h4>Fuel</h4>
								{v.fuel.join(" | ")}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
