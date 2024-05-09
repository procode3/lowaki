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

const dmsans = DM_Sans({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
	subsets: ["latin"],
});

export default function Home() {
	return (
		<main
			className={`${dmsans.className}  max-w-screen flex flex-col items-center   h-full text-white tracking-tight relative`}
		>
			<Header />
			<div className="flex flex-col max-w-[1500px] w-full">
				<Landing />
				<Statistics />
				<Projects/>
				<Products />
				<CarouselSection/>
				<AboutUs />
				<Mission />
				<Partners />
			</div>
			<Footer />
		</main>
	);
}
