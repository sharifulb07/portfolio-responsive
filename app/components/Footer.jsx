import Link from "next/link";
import Logo from "./Logo";

// social icons
import { FaInstagram } from "react-icons/fa6";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { FiDribbble } from "react-icons/fi";
import { FaBehance } from "react-icons/fa";

import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

import { Lato } from "next/font/google";
const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

const navLinks = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "Services", href: "/services" },
  { id: 3, name: "About Me", href: "/aboutme" },
  { id: 4, name: "Portfolio", href: "/portfolio" },
  { id: 5, name: "Contact Me", href: "/contactme" },
];

export default function Footer() {
  return (
    <section className="w-full gap-5 md:gap-[50px] bg-white/4 pt-[40px] pb-[24px] px-[80px] flex flex-col justify-center items-center">
      <Logo />
      <div className="flex justify-center items-center gap-2 md:gap-[60px] flex-col md:flex-row">
        {navLinks.map((link) => (
          <Link href={link.href} key={link.id}>
            <p
              className={`text-[#959595] ${lato.className} cursor-pointer font-medium text-[20px]`}
            >
              {link.name}{" "}
            </p>
          </Link>
        ))}
      </div>

      <div className="flex gap-[20px]">
        <div className="h-[40px] w-[40px] cursor-pointer rounded-full border-[#BABABA] border-2 flex justify-center items-center">
          <FaInstagram size={24} />
        </div>
        <div className="h-[40px] w-[40px] cursor-pointer rounded-full border-[#BABABA] border-2 flex justify-center items-center">
          <PiLinkedinLogoBold size={24} />
        </div>
        <div className="h-[40px] cursor-pointer w-[40px] rounded-full border-[#BABABA] border-2 flex justify-center items-center">
          <FiDribbble size={24} />
        </div>
        <div className="h-[40px] cursor-pointer w-[40px] rounded-full border-[#BABABA] border-2 flex justify-center items-center">
          <FaBehance size={24} />
        </div>
      </div>
      <div className="flex gap-5 md:gap-10 flex-col md:flex-row ">
        <p
          className={`text-[#959595] ${lato.className} items-center flex gap-[14px] cursor-pointer font-medium text-[20px]`}
        >
          <MdOutlineMail size={24} />
          sharifuld07@gmail.com
        </p>
        <p
          className={`text-[#959595] ${lato.className} flex items-center gap-[14px] cursor-pointer font-medium text-[20px]`}
        >
          <FaPhoneAlt size={24} />
          +880-1404009489
        </p>
      </div>

      <div className=" py-4 flex flex-col items-center justify-center max-w-[593px] w-full border-t-2 border-t-[#707070]">
        <p className="text-[#707070] text-3 md:text-4 text-center">Designed by @mahmood.fazile UI/UX designer</p>

      </div>
    </section>
  );
}
