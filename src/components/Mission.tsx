'use client'
import { useScroll, motion, useTransform } from "framer-motion";
import React, { useEffect, useRef } from "react";

//This is a component for each of the words
const Word = ({ children, range, progress }: any) => {
	const opacity = useTransform(progress, range, [0, 1]);
	return (
		<span className="mr-2 relative">
			<span className="absolute  opacity-10">{children}</span>
			<motion.span style={{ opacity }}>{children}</motion.span>
		</span>
	);
};

export default function Mission() {
	const intro = useRef(null);
	const { scrollYProgress } = useScroll({
		target: intro,
		offset: ["1 end", "start 0.2"],
	});

	useEffect(() => {
		scrollYProgress.on("change", (e) => console.log(e));
	});
	const mission =
		"At Lowaki we're on a mission to revolutionalize the way communities access and embrace clean energy solution At Lowaki we're on a mission to revolutionalize the way communities access and embrace clean energy solution";
	const words = mission.split(" ");
	return (
		<div className="container flex flex-col justify-between p-5 sm:p-10 lg:p-20 ">
			<div className="h-[30vh] w-full"></div>
			<div className="flex flex-col md:flex-row w-full items-start gap-2 ">
				<motion.p
					ref={intro}
					className="text-[4vw] md:text-[30px] text-start w-full md:w-1/3 leading-tight text-neutral-700 md:py-0 "
					// style={{ opacity: scrollYProgress }}
				>
					Our Mission
				</motion.p>
				<motion.p
					ref={intro}
					className="flex flex-wrap text-[7vw] md:text-[40px] w-full leading-tight text-neutral-900 md:py-0 "
				>
					{words.map((word, index) => {
						const start = index / words.length;
						const end = start + 1 / words.length;
						return (
							<Word
								key={index}
								range={[start, end]}
								progress={scrollYProgress}
								className="mr-2 leading-["
							>
								{word}
							</Word>
						);
					})}
				</motion.p>
			</div>
			<div className="h-[30vh] w-full"></div>
		</div>
	);
}

