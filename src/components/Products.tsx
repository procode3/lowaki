'use client'
import React, { useRef, useEffect, createRef } from "react";
import ProductCard from "./ui/productCard";
import ProductCarousel from "./ui/productCarousel";

const cardsData = [
	{
		title: "CLEAN COOKING SOLUTIONS",
		items: ["Improved cookstoves", "Gasifiers", "Briquettes", "E-cooking"],
	},
	{
		title: "SOLAR HOME SYSTEMS",
		items: ["Solar lighting", "Solar pumps", "Solar powered appliances"],
	},
	{
		title: "E-MOBILITY",
		items: ["E-bicycles", "E- motorbikes", "E- Tuktuks"],
	},
	{
		title: "SMART AGRICULTURE",
		items: ["Water storage", "Smart irrigation", "Eco fertilizer"],
	},
];

export default function Products() {
	const cardRefs = useRef(cardsData.map(() => createRef<HTMLElement>()));

	return (
		<div className=" px-20 text-neutral-900  flex flex-col  w-full h-full items-center justify-center gap-5 p-10 lg:p-20">
			<h1 className="text-[#265853] text-start w-full text-[8vw] md:text-[6vw] lg:text-[4.3vw]">
				Our <span className="font-bold">Products</span>
			</h1>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-10
			">
				{cardsData.map((card, index) => (
					<ProductCard
						key={index}
						title={card.title}
						items={card.items}
						reff={cardRefs.current[index]}
					/>
				))}
			</div>
		</div>
	);
}





