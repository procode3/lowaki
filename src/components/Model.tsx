import React from "react";
import { Separator } from "@/components/ui/separator";
import Pillars from "./Pillars";
import NumberTicker from "./ui/numberTicker";
import Image from "next/image";

export default function Model() {
	return (
		<div className="text-black w-full flex flex-col  gap-10 p-10 lg:px-20">
			<h1 className="text-xl md:text-2xl lg:text-[48px] w-full text-center  text-[#265853] tracking-tighter">
				Our Model
			</h1>
			<div className="flex flex-col lg:flex-row justify-evenly gap-5 md:gap-10">
				<div className="w-2/3 relative flex flex-col gap-1 rounded-lg">
					<p className="text-[40px] font-medium text-black bg-white bg-opacity-10">
						It takes a village to achieve social, economic, and climate justice.
						We are on a mission to empower women and youth in Rural Kenya.
					</p>
					<div className="w-fill rounded-lg overflow-hidden opacity-70 h-[30vh]">
						<Image
							src="/dotbg.svg"
							fill
							alt="women empowerment"
							style={{ objectFit: "cover" }}
						/>
					</div>
				</div>
				<div className=" w-1/3 text-[18px] flex flex-col gap-5 rounded-lg">
					<p className="text-md font-medium  text-neutral-800">
						We achieve this by harnessing the power of our technology platform,
						driven by women and youth, to establish a last-mile entrepreneur
						network that accelerates the adoption of green energy solutions in
						rural Kenya.
					</p>
					<p className="text-md font-medium  text-neutral-800">
						We believe that women hold the key to unlocking the change needed
						and Lowaki Eco Solutions is committed to creating a catalytic
						environment to enable them to do so.
					</p>
				</div>
			</div>
			<div className="flex flex-col text-xl mt-10 gap-5">
				<h3 className="text-xl font-medium">
					Our last mile entrepreneurs (LMEs) are able to access the hub to ;
				</h3>
				<div className="flex gap-5">
					<div className="bg-gray-100 p-5  gap-3  flex flex-col rounded-lg">
						<h4 className="text-xl font-medium capitalize ">Learn </h4>
						<p className="text-[18px] text-balance font-medium leading-[28px]">
							Through strategic partnerships,our phygital hubs offer women
							valuable workshops and training sessions in entrepreneurship,
							finance, and sustainability. Education is key to empowerment, and
							we're dedicated to providing women with the knowledge they need to
							thrive.
						</p>
					</div>
					<div className="bg-orange-100 p-5  gap-3  flex flex-col rounded-lg">
						<h4 className="text-xl font-medium capitalize ">Access </h4>
						<p className="text-[18px] text-balance font-medium leading-[28px]">
							Through our partnerships with manufacturers and suppliers, we
							ensure that women have access to high-quality products that
							enhance their quality of life and that of their community. Our
							product offerings are carefully curated to meet the needs of the
							different rural communities.
						</p>
					</div>
					<div className="bg-green-100 p-5  gap-3  flex flex-col rounded-lg">
						<h4 className="text-xl font-medium capitalize ">Earn </h4>
						<p className="text-[18px] text-balance font-medium leading-[28px]">
							As agents of change in their communities, women and youth serve as
							ambassadors for clean energy solutions, promoting products, and
							driving sales. With each sale, women earn commissions and
							incentives, creating pathways to financial independence and
							economic self-reliance.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
