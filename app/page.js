import Hero from "./components/sections/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/sections/Services";
import About from "./components/sections/About";
import Progress from "./components/sections/progress";
import CircularProgress from "@/app/components/CircularProgress";

import { TbBrandAdobeXd } from "react-icons/tb";
import { FaFigma } from "react-icons/fa6";
import { TbBrandAdobePhotoshop } from "react-icons/tb";
import { TbBrandAdobeIllustrator } from "react-icons/tb";
import { TbBrandAdobePremier } from "react-icons/tb";
import Portfolio from "./components/sections/Portfolio";
import Contactme from "./components/sections/Contactme";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <div className="flex flex-col gap-[100] md:gap-[150px]">
      <Hero />
      <Services isHome={true}/>
      <About />
      <Progress />
      <Portfolio />
      <Contactme /> 
     
    </div>
  );
}
