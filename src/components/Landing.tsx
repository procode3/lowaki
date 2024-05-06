import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

export default function Landing() {
  return (
		<div className="h-screen w-full relative text-[#265853]">
			{/* <div className="h-full w-full relative filter brightness-[30%]">
				<Image
					src="/forest.jpg"
					alt="forest photography"
					fill={true}
					style={{ objectFit: "cover" }}
				/>
			</div> */}
			<div className="bg-[#FCF0E7] absolute top-0 w-1/2 h-screen rounded-br-3xl"></div>
			<div className="w-full flex flex-col lg:flex-row gap-5 justify-between absolute top-[25%] px-10">
				<div className="w-full flex flex-col gap-1">
					<h1 className="text-[8vw] md:text-[6vw] lg:text-[4.3vw] leading-tight tracking-tight w-full">
						The greatest <span className="font-extrabold">threat</span> to our{" "}
						<span className="font-extrabold">planet</span> is the belief that
						<span className="font-extrabold"> someone</span> else{" "}
						<span className="font-extrabold">will save it.</span>
					</h1>
					<p className="text-neutral-700 w-full lg:w-3/5">
						At Lowaki we&apos;re on a mission to revolutionalize the way
						communities access and embrace clean energy solution
					</p>
				</div>
				<div className="w-full flex flex-col gap-2 items-start justify-end">
					<h2 className="text-[6vw] md:text-[4vw] lg:text-[2vw] tracking-tight text-neutral-900 font-bold">
						Start now, at home
					</h2>
					<p className="text-neutral-700 leading-tight tracking-tight">
						A small thing that you can do, can go a long way into saving the
						world
					</p>
					<div className="flex my-6 gap-5">
						<Link
							href="/register"
							className="bg-green-700 px-3 py-2 rounded-lg max-w-[150px] text-sm text-center text-neutral-100 hover:text-white font-semibold"
						>
							Contact Us
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
