import React from 'react'
import { Separator } from "@/components/ui/separator";
import Pillars from './Pillars';

export default function Statistics() {
  return (
		<div className=" w-full flex flex-col  gap-2 py-20 px-20">
			<div className="flex justify-evenly gap-2">
				<div className="w-full bg-[#EBEAEA] flex flex-col gap-1 p-5 rounded-lg">
					<h1 className="text-[40px] font-bold text-[#265853]">23,000</h1>
					<h2 className="text-lg font-bold text-black">Lives</h2>
					<h3 className="text-md  text-neutral-900">Lost Annually</h3>
					<p className="text-sm  text-neutral-800">
						23,000 lives are lost annually in Kenya to household air
						pollution.Women, impacted by kerosene and biomass use, suffer
						disproportionate health effects
					</p>
				</div>
				<Separator orientation="vertical" />
				<div className=" bg-[#EBEAEA] flex flex-col gap-1 p-5 rounded-lg">
					<h1 className="text-[40px] font-bold text-[#265853]">10x</h1>
					<h2 className="text-lg font-bold text-black">More pollution</h2>
					<h3 className="text-md  text-neutral-900">Per mile</h3>
					<p className="text-sm  text-neutral-800">
						Tricycles and motocycles popular in rural and urban SubSaharan
						Africa, emit about 10 times more pollution per mile than cars.
					</p>
				</div>
				<Separator
					className="z-10"
					orientation="vertical"
				/>
				<div className=" bg-[#FCF0E7] flex flex-col gap-1 p-5 rounded-lg">
					<h1 className="text-[40px] font-bold text-[#265853]">95%</h1>
					<h2 className="text-lg font-bold text-black">of farmers</h2>
					<h3 className="text-md  text-neutral-900">Depend on rainfall</h3>
					<p className="text-sm  text-neutral-800">
						95% of farmers depend on rainfall for irrigation, but climate change
						endangers crop yields abnd livelihoods.
					</p>
				</div>
			</div>

			<Pillars />
		</div>
	);
}
