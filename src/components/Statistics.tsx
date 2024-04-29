import React from 'react'
import { Separator } from "@/components/ui/separator";

export default function Statistics() {
  return (
		<div className="bg-black w-full flex justify-evenly gap-5  px-10 py-20">
			<div>
				<h1 className="text-[40px] font-bold">23,000</h1>
				<h2 className="text-lg font-bold">Lives</h2>
				<h3 className="text-md font-light">Lost Annually</h3>
				<p className="text-sm font-light text-neutral-400">
					23,000 lives are lost annually in Kenya to household air
					pollution.Women, impacted by kerosene and biomass use, suffer
					disproportionate health effects
				</p>
			</div>
			<Separator orientation="vertical" />
			<div>
				<h1 className="text-[40px] font-bold">10x</h1>
				<h2 className="text-lg font-bold">More pollution</h2>
				<h3 className="text-md font-light">Per mile</h3>
				<p className="text-sm font-light text-neutral-400">
					Tricycles and motocycles popular in rural and urban SubSaharan Africa,
					emit about 10 times more pollution per mile than cars.
				</p>
			</div>
			<Separator className='z-10' orientation="vertical" />
			<div className="flex flex-col gap-2">
				<h1 className="text-[40px] font-bold">95%</h1>
				<h2 className="text-lg font-bold">of farmers</h2>
				<h3 className="text-md font-light">Depend on rainfall</h3>
				<p className="text-sm font-light text-neutral-400">
					95% of farmers depend on rainfall for irrigation, but climate change
					endangers crop yields abnd livelihoods.
				</p>
			</div>
		</div>
	);
}
