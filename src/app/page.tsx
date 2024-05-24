import Header from "@/components/Header";
import Landing from "@/components/Landing";
import Image from "next/image";
import { DM_Sans } from "next/font/google";
import Mission from "@/components/Mission";
import Footer from "@/components/Footer";
import Statistics from "@/components/Statistics";
import Pillars from "@/components/Pillars";
import Products from "@/components/Products";
import Projects from "@/components/Projects";
import AboutUs from "@/components/AboutUs";
import Partners from "@/components/Partners";
import { CarouselSection } from "@/components/CarouselSection";
import { Manrope } from "next/font/google";
import Model from "@/components/Model";

const dmsans = Manrope({
	weight: ["200", "300", "400", "500", "600", "700", "800"],
	subsets: ["latin"],
});

export default function Home() {
	return (
		<main
			className={`${dmsans.className}  max-w-screen flex flex-col items-center overflow-x-hidden  h-full text-white tracking-tight relative`}
		>
				<Landing />
			<div className="flex flex-col max-w-[1500px] w-full">
				<Pillars/>
				<Model/>
				{/* <Projects/> */}
				<Products/>
				<AboutUs />
				<Mission />
				<Partners />
			</div>
			<Footer />
		</main>
	);
}
