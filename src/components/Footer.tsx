import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


export default function Footer() {
	return (
		<div className="bg-black w-full p-5 lg:p-10 text-neutral-200">
			<div className="flex flex-col lg:flex-row gap-3 justify-between items-center py-10">
				<div className="flex flex-col">
					<h3 className="text-lg">Come, Join With Us!</h3>
					<p className="text-[14px]  md:text-[18px] font-light text-neutral-200">
						Be the first to know about our community updates iuncluding special
						offers from our shop
					</p>
				</div>
				<div className="flex w-full lg:max-w-[40%] items-center space-x-2">
					<Input
						type="email"
						placeholder="Email"
						className="rounded-full text-neutral-800"
					/>
					<Button
						type="submit"
						className="rounded-full bg-green-600"
					>
						Join Us
					</Button>
				</div>
			</div>
			<div className="flex flex-col lg:flex-row gap-3 w-full justify-between ">
				<div className="w-full ">
					<h4 className="text-md font-semibold">Lowaki</h4>
					<p className="text-[14px]  md:text-[18px] font-light text-neutral-200">
						Lowaki is a ONE-STOP-SOLUTION platform <br /> for eco-solutions.
						It&apos;s time to get started now!
					</p>
				</div>
				<div className="flex w-full gap-2">
					<div className="flex flex-col gap-2 w-full">
						<h4 className="text-md lg:text-lg font-semibold">Community</h4>
						<p className="text-[14px]  md:text-[18px] font-light text-neutral-200">
							Work Team
						</p>
						<p className="text-[14px]  md:text-[18px] font-light text-neutral-200">
							Volunteers
						</p>
						<p className="text-[14px]  md:text-[18px] font-light text-neutral-200">
							Speaker
						</p>
						<p className="text-[14px]  md:text-[18px] font-light text-neutral-200">
							Recruitment
						</p>
						<p className="text-[14px]  md:text-[18px] font-light text-neutral-200">
							Be a contributor
						</p>
					</div>
					<div className="flex flex-col gap-2 w-full">
						<h4 className="text-md lg:text-lg font-semibold">About Us</h4>
						<p className="text-[14px]  md:text-[18px] font-light text-neutral-200">
							Who are we
						</p>
						<p className="text-[14px]  md:text-[18px] font-light text-neutral-200">
							Media
						</p>
						<p className="text-[14px]  md:text-[18px] font-light text-neutral-200">
							Job
						</p>
					</div>
					<div className="flex flex-col gap-2  w-full">
						<h4 className="text-md lg:text-lg font-semibold">Contact</h4>
						<p className="text-[14px]  md:text-[18px] font-light text-neutral-200">
							+245 757 403 957
						</p>
						<p className="text-[14px]  md:text-[18px] font-light text-neutral-200">
							info@lowakieco.com
						</p>
						<p className="text-[14px]  md:text-[18px] font-light text-neutral-200">
							lowakieco.com
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
