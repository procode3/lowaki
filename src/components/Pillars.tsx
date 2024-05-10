import React from 'react'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";


export default function Pillars() {
	return (
		<div className="text-neutral-900  flex flex-col w-full h-full items-center justify-center gap-5 py-10">
			<h1 className="text-[#265853] text-start w-full text-2xl md:text-3xl lg:text-[54px]">
				Our <span className="font-bold">Pillars</span>
			</h1>
			<div className='flex flex-col-reverse sm:flex-row-reverse lg:flex-row items-center gap-7'>
				<div className="flex flex-col   w-full lg:w-1/2 ">
					<p>
						Lowaki Eco-Solutions is a female-led organization that aggregates
						green solutions, facilitating the clean energy transition by
						establishing efficient last-mile distribution networks through
						organized women and youth groups. At the core of our philosophy is the
						unwavering belief that investing in women and youth is not just a good
						deed; it&apos;s a strategic move that propels communities forward.
					</p>
				</div>
				<div className="w-full h-full items-center justify-center lg:w-1/2 relative py-5">
					<div className="absolute right-0 w-3/4 rounded-lg h-full -z-10 bg-neutral-200"></div>
					<Accordion
						type="single"
						collapsible
						className="flex flex-col w-3/4  justify-evenly transition"
					>
						<AccordionItem value="item-1">
							<AccordionTrigger className="p-3 mt-4 ">
								Economic Development
							</AccordionTrigger>
							<AccordionContent className='text-neutral-700 p-3 transition'>
								Through entrepreneurship opportunities and environmental awareness
								initiatives, we are committed to economically empowering women and
								youth to foster independence, leadership and environmental
								stewardship.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-2">
							<AccordionTrigger className="p-3 mt-4 ">
								Climate Action
							</AccordionTrigger>
							<AccordionContent className='text-neutral-700 p-3'>
								We are committed to advancing climate action for sustainable
								development by integrating circular economy principles, clean
								cooking solutions, solar home systems and smart agricultural
								practices.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-3">
							<AccordionTrigger className="p-3 mt-4 ">
								Health & Wellbeing
							</AccordionTrigger>
							<AccordionContent className='text-neutral-700 p-3'>
								We acknowledge the interconnection between climate change and
								health. Therefore, our focus is on addressing health challenges
								arising from climate change to nurture thriving and resilient
								communities.
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
			</div>
		</div>
	);
}
