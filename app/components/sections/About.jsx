import Title from "../title";
import Man from "@/public/man.svg";
import Image from "next/image";
import Button from "../Button";
import { HiOutlineDownload } from "react-icons/hi";


import { Lato } from "next/font/google";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export default function About() {
  return (
    <div 
     className=" md:top-0 flex justify-center flex-col  w-full text-orange-600 text-center px-[26px] gap-[24px] md:px-20">
      <Title
        title={"About Me"}
        desc="User Interface and User Experience and Also video editing "
      />
      <div className="about-body flex gap-5 md:gap-10 lg:gap-[101px] py-10 mt-10 flex-col md:flex-row ">
        <div className="  relative left w-full sm:w-full  md:w-[50%] bg-white/4 h-[600px] md:h-[400px] lg:h-[600px]  rounded-tl-[50%] rounded-tr-[50%]">
          <Image
            src={Man}
            alt="about section"
            fill
            className=" h-[808px] w-[566px] z-50 absolute top-[-80px]"
          />
        </div>

        <div className="right w-full md:w-[50%] ">
          <p
            className={`${lato.className} font-medium text-[20px] tracking-[190%] text-[#959595] text-justify py-10`}
          >
            A software engineer, the modern-day architect of digital realms,
            navigates the ethereal landscapes of code, sculpting intangible
            structures that shape our technological world. With fingers poised
            over keyboards like virtuoso pianists, they compose symphonies of
            logic, their minds a labyrinth of algorithms and solutions.Their
            canvas is a screen, a vast expanse where lines of code dance in
            intricate patterns, weaving the fabric of programs and applications.
            Each keystroke is a brushstroke, crafting intricate architectures
            and breathing life into innovative designs.In this digital atelier,
            they don the mantle of problem solvers, confronting bugs and
            glitches like valiant knights in an ever-evolving quest for
            perfection. Debugging becomes a noble pursuit, unraveling the
            mysteries hidden within the tangled webs of code. designs.In this
            digital atelier.
          </p>
          <Button>
            <HiOutlineDownload size={24} /> {"  "} <span>Download CV</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
