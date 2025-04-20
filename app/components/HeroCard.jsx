"use client"
import { Lato } from "next/font/google";
import { motion } from "motion/react";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export default function HeroCard({ title, description }) {
  return (
    <motion.div
    initial={{ x: 200, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    
    className="flex h-full items-center py-1.5 gap-[30px]">
      <div className="flex h-full flex-col gap-3">
        <h3
          className={`text-[#FD6F00] ${lato.className} font-extrabold tracking-3percent text-[24px]`}
        >
           {title}
        </h3>
        <p
          className={`text-[#DFDFDF] ${lato.className} font-bold italic text-[20px]`}
        >
          {description}
        </p>
      </div>
      
    </motion.div>
  );
}
