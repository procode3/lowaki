import React from 'react'

export default function AboutUs() {
  return (
		<div className="text-neutral-900 bg-white h-full flex flex-col gap-10 p-5 md:p-10 lg:p-20">
			<h1 className="text-xl md:text-2xl lg:text-[48px] w-full text-center  text-[#265853] tracking-tighter">
				Our Priority SDGs
			</h1>

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
