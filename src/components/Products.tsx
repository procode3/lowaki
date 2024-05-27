'use client'
import React, { useRef, useEffect, createRef } from "react";
import ProductCard from "./ui/productCard";
import ProductCarousel from "./ui/productCarousel";

const cardsData = [
	{
		title: "CLEAN COOKING SOLUTIONS",
		name:'cleancookingsolutions',
		items: ["Improved cookstoves", "Gasifiers", "Briquettes"],
		imgSrc: '/pot.svg'
	},
	{
		title: "SOLAR HOME SYSTEMS",
		name:'solarhomesystems',
		items: ["Solar lighting", "Solar pumps", "Solar powered appliances"],
		imgSrc: '/solar.svg'
	},
	{
		title: "E-MOBILITY",
		name:'emobility',
		items: ["E-bicycles", "E- motorbikes", "E- Tuktuks"],
		imgSrc: '/mobility.svg'
	},
	{
		title: "SMART AGRICULTURE",
		name:'smartagriculture',
		items: ["Water storage", "Smart irrigation", "Eco fertilizer"],
		imgSrc: '/agric.svg'
	},
];

export default function Products() {
	const cardRefs = useRef(cardsData.map(() => createRef<HTMLElement>()));

	return (
		<div className="text-neutral-900 bg-white flex flex-col  w-full h-full items-center justify-center gap-5 md:gap-10 p-5 md:p-10 lg:p-20">
			<h1 className="text-xl md:text-2xl lg:text-[48px] w-full text-center  text-[#265853] tracking-tighter">
				Our Products
			</h1>

			<div
				className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-10 w-full
			"
			>
				{cardsData.map((card, index) => (
					<ProductCard
						key={index}
						title={card.title}
						items={card.items}
						reff={cardRefs.current[index]}
						src={card.imgSrc}
						name={card.name}
					/>
				))}
			</div>
		</div>
	);
}





