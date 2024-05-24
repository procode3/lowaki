import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import NumberTicker from "./ui/numberTicker";


export default function Landing() {
	return (
		<div className="h-screen w-full relative bg-green-200 text-black ">
			<div className="absolute w-screen h-screen top-0">
				<div className="h-full w-3/4 opacity-30 relative filter brightness-[50%]">
					<Image
						src="/dotbg.svg"
						alt="forest photography"
						fill={true}
						style={{ objectFit: "contain" }}
					/>
				</div>
			</div>

			{/* <div className="absolute right-32 top-40 h-[70vh] w-2/3 z-10">
				<div className="h-full w-full relative z-10 ">
					<Image
						src="/earth.png"
						alt="forest photography"
						fill={true}
						style={{ objectFit: "contain" }}
					/>
				</div>
			</div>
			<div className="absolute -right-20 top-20 h-[40vh] w-1/2 md:w-1/3 z-10">
				<div className="h-full w-full relative z-10 ">
					<Image
						src="/city.png"
						alt="forest photography"
						fill={true}
						style={{ objectFit: "contain" }}
					/>
				</div>
			</div> */}

			<div className="  absolute top-0 w-full lg:w-1/2 h-1/2 lg:h-screen rounded-br-3xl"></div>
			<div className="w-full flex flex-col lg:flex-row  gap-20 justify-between absolute top-[25%] px-10">
				<div className="w-1/2 flex flex-col gap-1">
					<h1 className="text-[64px] text-balance leading-tight tracking-tighter w-full">
						The greatest <span className="font-extrabold">threat</span> to our{" "}
						<span className="font-extrabold">planet</span> is the belief that
						<span className="font-extrabold"> someone</span> else{" "}
						<span className="font-extrabold">will save it.</span>
					</h1>
					<p className="text-neutral-700 w-full text-balance text-[18px] lg:w-3/5">
						At Lowaki we&apos;re on a mission to revolutionalize the way
						communities access and embrace clean energy solution
					</p>
				</div>
				<div className="w-1/2 grid grid-cols-2 gap-2">
					<div className="h-full w-full relative filter brightness-75 rounded-lg overflow-hidden">
						<Image
							src="/DSC_0776.jpg"
							alt="forest photography"
							fill={true}
							style={{ objectFit: "cover" }}
						/>
					</div>
					<div className="w-full bg-white/70 flex flex-col gap-1 p-5 rounded-lg">
						<h1 className="text-[32px] font-bold text-[#265853]">
							<NumberTicker value={23000} />
						</h1>
						<h2 className="text-lg font-bold text-black">Lives</h2>
						<h3 className="text-[18px]  text-neutral-900">Lost Annually</h3>
						<p className="text-[16px]  text-neutral-800 text-balance">
							23,000 lives are lost annually in Kenya to household air
							pollution.Women, impacted by kerosene and biomass use, suffer
							disproportionate health effects
						</p>
					</div>
					<div className=" bg-white/70 flex flex-col gap-1 p-3 rounded-lg">
						<h1 className="text-[32px] font-bold text-[#265853]">
							<NumberTicker value={10} />x
						</h1>
						<h2 className="text-md font-bold text-black">More pollution</h2>
						<h3 className="text-[18px]  text-neutral-900">Per mile</h3>
						<p className="text-[16px]  text-neutral-800">
							Tricycles and motocycles popular in rural and urban SubSaharan
							Africa, emit about 10 times more pollution per mile than cars.
						</p>
					</div>
					<div className=" bg-white/70 flex flex-col gap-1 p-3 rounded-lg">
						<h1 className="text-[32px] font-bold text-[#265853]">
							<NumberTicker value={95} />%
						</h1>
						<h2 className="text-md font-bold text-black">of farmers</h2>
						<h3 className="text-[18px]  text-neutral-900">
							Depend on rainfall
						</h3>
						<p className="text-[16px]  text-neutral-800">
							95% of farmers depend on rainfall for irrigation, but climate
							change endangers crop yields abnd livelihoods.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
