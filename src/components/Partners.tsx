import Image from 'next/image';
import React from 'react'

export default function Partners() {
  return (
		<div className="text-neutral-900 p-10 lg:p-20 h-full w-full text-center flex flex-col gap-2 text-base">
			<h2 className="text-[#265853] text-3xl">
				Meet Our{" "}
				<span className="text-[#265853] text-4xl font-bold">Partners</span>
			</h2>
			<p>
				Together, we&apos;re forging impactful collaborations to drive positive
				change.
			</p>
			<p>
				Our partners play a crucial role in advancing our mission of empowering
				women, promoting clean energy solutions, and fostering sustainable
				development.
			</p>
			<div className='flex w-full justify-evenly mt-5'>
				<div className="w-[250px] h-[100px] relative">
					<Image
						src="/mamagood.png"
						fill={true}
						alt="partners"
						style={{ objectFit: "contain" }}
					/>
				</div>
				<div className="w-[100px] h-[100px] relative">
					<Image
						src="/ccak.png"
						fill={true}
						alt="partners"
						style={{ objectFit: "contain" }}
					/>
				</div>
				<div className="w-[100px] h-[100px] relative">
					<Image
						src="/govkenya.png"
						fill={true}
						alt="partners"
						style={{ objectFit: "contain" }}
					/>
				</div>
				<div className="w-[100px] h-[100px] relative">
					<Image
						src="/kirdi.png"
						fill={true}
						alt="partners"
						style={{ objectFit: "contain" }}
					/>
				</div>
			</div>
		</div>
	);
}
