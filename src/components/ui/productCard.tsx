"use client";
import React, { RefObject, useRef, useState } from "react";
import { CircleStackIcon, CheckIcon } from "@heroicons/react/24/outline";
import Flame from "@/components/utils/Flame";
import Pot from "@/components/utils/Pot";

type Item = string;

type ProductCardProps = {
	title: string;
	items: Item[];
	reff: RefObject<HTMLElement>;
	key: string | number;
};

export default function ProductCard({ title, items, reff }: ProductCardProps) {
	const cardsRef = reff;
	const [cursor, setCursor] = useState({ x: 0, y: 0 });
	const [mouseOnCard, setMouseOnCard] = useState(false);
	const handleMouseMove = (
		event: React.MouseEvent<HTMLElement, MouseEvent>
	) => {
		if (cardsRef.current !== null) {
			const rect = cardsRef.current.getBoundingClientRect();
			const x = event.clientX - rect.left;
			const y = event.clientY - rect.top;
			setCursor({ x, y });
		}
	};
	return (
		<section
			className="w-full flex p-5 bg-neutral-950 hover:bg-neutral-950/90 rounded-xl"
			ref={cardsRef}
			onMouseEnter={() => setMouseOnCard(true)}
			onMouseLeave={() => setMouseOnCard(false)}
			onMouseMove={(event) => handleMouseMove(event)}
		>
			<div className="flex flex-col w-full justify-between ">
				<div className="flex flex-col gap-5">
					<CircleStackIcon className="w-14 rounded-lg bg-neutral-950/70 stroke-emerald-500 p-2 shadow-inner " />
					<h1 className="font-poppins text-neutral-200 tracking-wide text-md font-bold">
						{title}
					</h1>
					<p className="m-2 font-poppins text-neutral-400 tracking-wide text-sm">
						Improved cookstoves
					</p>
				</div>
				<div className="flex flex-col font-poppins text-neutral-200 tracking-wide gap-2">
					{items.map((item, index) => (
						<span
							key={index}
							className="flex flex-row gap-2 text-sm"
						>
							<CheckIcon className="w-5" />
							{item}
						</span>
					))}
				</div>
			</div>
			<div className=" flex items-center justify-center ">
				<Flame
					cursor={cursor}
					cardRef={cardsRef}
					mouseOnCard={mouseOnCard}
				/>
			</div>
		</section>
	);
}
