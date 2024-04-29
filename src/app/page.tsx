import Header from "@/components/Header";
import Landing from "@/components/Landing";
import Image from "next/image";
import { DM_Sans } from "next/font/google";
import Mission from "@/components/Mission";
import Footer from "@/components/Footer";
import Statistics from "@/components/Statistics";

const dmsans = DM_Sans({
  weight: ["100","200", "300","400", "500", "600", "700", "800"],
	subsets: ["latin"],
})


export default function Home() {
  return (
		<main
			className={`${dmsans.className} flex flex-col items-center max-w-screen h-full text-white tracking-tight relative`}
		>
			<Header />
			<Landing />
      <Statistics/>
      <Mission/>
      <Footer/>
		</main>
	);
}
