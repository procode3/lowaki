import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

export default function Landing() {
  return (
		<div className="h-screen w-full relative text-neutral-300">
			<div className="h-full w-full relative filter brightness-[30%]">
				<Image
					src="/forest.jpg"
					alt="forest photography"
					fill={true}
					style={{ objectFit: "cover" }}
				/>
			</div>
			<div className="w-full flex flex-col gap-5 justify-between absolute top-[25%] px-10">
				<div className="w-full flex flex-col gap-1">
					<h1 className="text-[8vw] md:text-[6vw] lg:text-[4vw] leading-tight tracking-tight w-2/3">
						The greatest threat to our planet is the belief that someone else
						will save it
					</h1>
					
				</div>
				<div className="w-full flex flex-col gap-2">
					<h2 className="text-[6vw] md:text-[4vw] lg:text-[2vw] tracking-tight">
						Start now, at home
					</h2>
					<p className="text-sm text-neutral-400 leading-tight tracking-tight">
						A small thing that you can do, can go a long way into saving the
						world
					</p>
					<div className="flex my-10 gap-5">
						<Link
							href="/register"
							className="bg-green-600 p-2 rounded-full w-[150px] text-sm text-center text-black hover:text-white font-semibold"
						>
							Join Now
						</Link>
						<Link
							href="/register"
							className="bg-green-600 p-2 rounded-full w-[150px] text-sm text-center text-black hover:text-white font-semibold "
						>
							Learn more
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
