import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Page({ params }: { params: { slug: string } }) {
	const productData = [
		{
			title: "CLEAN COOKING SOLUTIONS",
			name: "cleancookingsolutions",
			items: ["Improved cookstoves", "Gasifiers", "Briquettes"],
			imgSrc: "/pot.svg",
		},
		{
			title: "SOLAR HOME SYSTEMS",
			name: "solarhomesystems",
			items: ["Solar lighting", "Solar pumps", "Solar powered appliances"],
			imgSrc: "/solar.svg",
		},
		{
			title: "E-MOBILITY",
			name: "emobility",
			items: ["E-bicycles", "E- motorbikes", "E- Tuktuks"],
			imgSrc: "/mobility.svg",
		},
		{
			title: "SMART AGRICULTURE",
			name: "smartagriculture",
			items: ["Water storage", "Smart irrigation", "Eco fertilizer"],
			imgSrc: "/agric.svg",
		},
	];

	const product = productData.find((product) => product.name === params.slug);
	if (!product) {
		return <div>Product not found</div>;
	}
	return (
		<div className="bg-white pt-[10vh] w-screen h-screen flex flex-col items-center justify-center gap-5 md:p-10 lg:p-20">
			<div className="bg-white w-full h-full flex flex-col lg:flex-row gap-5 items-center p-5 lg:p-10">
				<div className="w-full lg:w-1/2 flex flex-col h-full justify-evenly gap-3 shadow-lg">
					<div className="w-full h-full relative ">
						<Image
							src="/1.jpg"
							alt="cooking stove"
							style={{ objectFit: "contain" }}
							fill
						/>
					</div>
					{/* <div className="flex items-center justify-center gap-3 w-full h-full">
					<div className=" w-[100px] h-[50px] md:h-[100px] bg-green-200"></div>
					<div className=" w-[100px] h-[50px] md:h-[100px] bg-green-200"></div>
					<div className=" w-[100px] h-[50px] md:h-[100px] bg-green-200"></div>
					<div className=" w-[100px] h-[50px] md:h-[100px] bg-green-200"></div>
					<div className=" w-[100px] h-[50px] md:h-[100px] bg-green-200"></div>
					<div className=" w-[100px] h-[50px] md:h-[100px] bg-green-200"></div>
				</div> */}
				</div>
				<div className="w-full lg:w-1/2 h-full flex flex-col gap-3 3xl:gap-5">
					<h3 className="font-semibold tracking-tighter text-[18px] lg:text-[24px]">
						{product.title}
					</h3>
					<p className="font-medium text-[16px]">$200</p>
					<p className="flex gap-2 text-[16px]">
						Quantity
						<span className="text-md px-2 border hover:bg-gray-200">-</span>
						<span className="text-md px-3 border ">1</span>
						<span className="text-md px-2 border hover:bg-gray-200">+</span>
					</p>
					<div className="w-full flex gap-3 text-neutral-100">
						<Button
							className="text-xs bg-green-600/70"
							variant="outline"
						>
							Green
						</Button>
						<Button
							className="text-xs bg-gray-500"
							variant="outline"
						>
							Gray
						</Button>
						<Button
							className="text-xs bg-orange-950/70"
							variant="outline"
						>
							Brown
						</Button>
					</div>

				<div className="flex flex-col gap-3 items-center">
					<h3 className="text-[18px] w-full text-start font-medium">Details</h3>
					<p className="text-[14px] max-w-[1200px]">
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industrys standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book. It has survived not
						only five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged. It was popularised in the 1960s
						with the release of Letraset sheets containing Lorem Ipsum passages,
						and more recently with desktop publishing software like Aldus
						PageMaker including versions of Lorem Ipsum
					</p>
				</div>
					<Button className="bg-[#265853] w-full">Buy now</Button>
				</div>
			</div>
		</div>
	);
}
