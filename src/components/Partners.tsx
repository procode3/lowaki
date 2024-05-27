import Image from 'next/image';
import React from 'react'

export default function Partners() {
  return (
		<div className="text-neutral-900 p-10 lg:p-20 h-full w-full text-center flex flex-col gap-2 text-[18px]">
			<h2 className="text-xl md:text-2xl lg:text-[48px] w-full text-center  text-[#265853] tracking-tighter">
				Meet Our 
				Partners
			</h2>
			<p className="text-[14px]  md:text-[18px]">
				Together, we&apos;re forging impactful collaborations to drive positive
				change.
			</p>
			<p className="text-[14px]  md:text-[18px]">
				Our partners play a crucial role in advancing our mission of empowering
				women, promoting clean energy solutions, and fostering sustainable
				development.
			</p>
			<div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-5">
				<div className="w-[100px]/[250px] h-[100px] relative">
					<Image
						src="/mamagood.png"
						fill={true}
						alt="partners"
						style={{ objectFit: "contain" }}
					/>
				</div>
				<div className="w-[100px]/[250px] h-[100px] relative">
					<Image
						src="/ccak.png"
						fill={true}
						alt="partners"
						style={{ objectFit: "contain" }}
					/>
				</div>
				<div className="w-[100px]/[250px] h-[100px] relative">
					<Image
						src="/govkenya.png"
						fill={true}
						alt="partners"
						style={{ objectFit: "contain" }}
					/>
				</div>
				<div className="w-[100px]/[250px] h-[100px] relative">
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
