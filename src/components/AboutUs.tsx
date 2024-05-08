import React from 'react'

export default function AboutUs() {
  return (
		<div className="text-neutral-900 h-full flex flex-col gap-10 p-10 lg:p-20">
			<h2 className="text-2xl font-bold">A WORD FROM OUR LEADERSHIP TEAM</h2>
			<div className="flex h-full gap-5 lg:gap-10 ">
				<div className="h-[50vh] w-1/2 flex justify-between gap-5 relative">
					<div className="bg-red-200 h-4/5 w-2/5 m-5 absolute left-0 bottom-0"></div>
					<div className=" h-4/5 bg-green-300 w-2/5 absolute right-0 top-0">
						
					</div>
				</div>
				<div className="w-1/2">
					<p>
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
