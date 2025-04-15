import { Lato } from "next/font/google";
import { CiLinkedin } from "react-icons/ci";
import { GrInstagram } from "react-icons/gr";
import { FaBehance } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import Heroimg from "@/public/hero-img.svg";
import Button from "@/app/components/Button";
import { bold } from "fontawesome";
import HeroCard from "../HeroCard";


const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

const socialLinks = [
  {
    id: 1,
    name: "instagram",
    icon: <GrInstagram style={{ fontWeight: bold }} />,
    href: "https://www.instagram.com/",
  },
  {
    id: 2,
    name: "linkedin",
    icon: <CiLinkedin style={{ fontWeight: bold, fontSize: 24 }} />,
    href: "https://www.linkedin.com/",
  },
  {
    id: 3,
    name: "dibble",
    icon: <FiDribbble style={{ fontWeight: bold }} />,
    href: "https://dribbble.com/",
  },
  {
    id: 4,
    name: "behance",
    icon: <FaBehance style={{ fontWeight: bold }} />,
    href: "https://www.behance.net/",
  },
];

const heroCardInfo = [
  { id: 1, title: "5+", description: "Experiences" },
  { id: 2, title: "20+", description: "Project done" },
  { id: 3, title: "80+", description: "Happy Clients" },
];

export default function Hero() {
  return (
    <section className="px-[26px] sm:px-[26px] md:px-20 flex-col sm:flex-col  md:flex md:flex-row justify-between items-start mt-[60px] md:mt-[110px]  ">
      <div className="hero-left w-[100%] sm:w-[100%]  md:w-full relative">
        <div className=" absolute clip-triangle z-[-1] bg-gradient-to-r from-[#984300]  to-[#CA5900]  blur-3xl opacity-10 h-[500px] w-[500px]"></div>
        <div className="z-1 flex flex-col text-center md:text-left justify-center md:justify-start">
        <h3
          className={`${lato.className} text-[#707070] font-semibold text-[16px] md:text-[24px] tracking-3percent`}
        >
          Hi I am
        </h3>
        <h2 className="text-[#959595] text-[20px] md:text-[28px] font-bold italic tracking-3percent">
          Mahmood Fazile
        </h2>
        <h1 className="font-bold italic tracking-3percent text-[50px] md:text-[70px] -z-50    bg-gradient-to-r from-[#984300]  to-[#CA5900] text-transparent bg-clip-text ">
          UX/UI designer
        </h1>
        <ul className="flex justify-center md:justify-start gap-5 mt-[17px] mb-[61px] ">
          {socialLinks.map((link) => (
            <Link
              className="flex justify-center items-center h-[40px] w-[40px] rounded-full border-2 border-border-color bg-white/4"
              key={link.id}
              href={link.href}
            >
              {link.icon}
            </Link>
          ))}
        </ul>

        <div className="flex md:flex-row gap-6 justify-center md:justify-start md:items-center">
          <Button  children={"Hire Me"} />{" "}
          <Button variant={"outline"} children={"Download CV"} />
        </div>

        <div className=" rounded-[8px] shadow-sm p-6 bg-white/4 h-[125px] w-full md:w-[513px] mt-20 flex justify-between items-center ">
          <HeroCard title={"5+"} description={"Experiences"} />
          <div className="bg-[#959595] h-full w-[2px] rounded-full "></div>
          <HeroCard title={"20+"} description={"Project done"} />
          <div className="bg-[#959595] h-full w-[2px] rounded-full "></div>
          <HeroCard title={"80+"} description={"Happy Clients"} />
        </div>
        </div>
      </div>


      <div className="hero-right w-[100%] sm:w-[100%]  md:w-[50%]  relative flex justify-center items-center z-0 mt-40 md:mt-0 md:pr-40 ">
        <div className="h-[382.99px] w-[382.99px] md:h-[618px] md:w-[618px] top-10 rounded-full bg-white/3 absolute p-20 z-0">
          <Image
            className="absolute left-0 md:left-12 top-[-195] md:top-[-163]  z-[-50] "
            src={Heroimg}
            alt="hero image"
            
          />
        </div>
      </div>
    </section>
  );
}
