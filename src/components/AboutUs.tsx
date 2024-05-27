import React from "react";

export default function AboutUs() {
	return (
		<div className="text-neutral-900 bg-white h-full flex flex-col gap-10 p-5 md:p-10 lg:p-20">
			<div className="flex flex-col gap-7">
				<h1 className="text-xl md:text-2xl lg:text-[48px] w-full text-center  text-[#265853] tracking-tighter">
					Our Priority SDGs
				</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-5 tracking-wide">
					<p className="p-5 bg-green-100 font-medium rounded-lg text-[16px] ">
						
						Our stoves reduces greenhouse gas emissions and helps combat
						deforestation by saving on wood fuel therefore helps to manage
						climate change
					</p>
					<p className="p-5 bg-green-100 font-medium rounded-lg text-[16px] ">
						The use of our products contributes to significant savings on time
						and money that can be utilized for other needs like education,
						healthcare, and income-generating activities.
					</p>
					<p className="p-5 bg-green-100 font-medium rounded-lg text-[16px] ">
						In Kenya 23,000 lives are lost due to Household air pollution. Our
						stoves contribute to the reduction of indoor air pollution
						significantly resulting in a decrease in respiratory diseases,
						headaches, and eyes problems.
					</p>
					<p className="p-5 bg-green-100 font-medium rounded-lg text-[16px] ">
						Lowaki is leaving no one behind by availing clean energy solutions
						to all, reducing reliance on traditional biomass fuels, improving
						health, promoting sustainable development, and mitigating climate
						change.
					</p>
					<p className="p-5 bg-green-100 font-medium rounded-lg text-[16px] ">
						We have established a sustainable business model that rewards women
						las mile entrepreneurs for promoting and selling clean energy
						products fostering economic growth.
					</p>
					<p className="p-5 bg-green-100 font-medium rounded-lg text-[16px] ">
						Through Lowaki’s projects we shall collectively sustainably manage
						combat desertification, halt and reverse land degradation, halt
						biodiversity loss.
					</p>
				</div>
			</div>

			<div className="flex flex-col lg:flex-row items-center justify-center h-full gap-5 lg:gap-10 ">
				<div className=" h-[40vh] md:h-[50vh] w-full lg:w-1/2 flex justify-between gap-2 md:gap-5 relative">
					<div className="bg-red-200 h-3/5 md:h-4/5 w-2/5 m-5 absolute left-0 bottom-0"></div>
					<div className=" h-3/5 md:h-4/5 bg-green-300 w-2/5 absolute right-0 top-0"></div>
				</div>
				<div className="w-full lg:w-1/2 flex flex-col items-center justify-center gap-3">
					<h2 className="text-xl   text-center font-semibold text-[#265853]">
						A Word From Our Leadership Team
					</h2>
					<p className="w-full text-[14px] md:text-[18px]">
						By weaving together Women Empowerment, Climate, and Health, we
						envision a holistic approach that not only empowers women as
						entrepreneurs and environmental advocates but also ensures their
						health and well-being. As women thrive, so too do their communities,
						fostering a cycle of positive change that echoes through
						generations. Through these interconnected pillars, we aim to create
						lasting impact, promoting sustainability, resilience, and a brighter
						future for all.
					</p>
				</div>
			</div>
		</div>
	);
}
