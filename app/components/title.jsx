"use client"
import { Lato } from "next/font/google";
import { motion } from "motion/react";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

function Title({ title, desc = "" }) {
  return (
    <div className="gap-[18px] px-[40px] flex flex-col justify-center items-center">
      <motion.h1
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className={`${lato.className} font-bold text-3xl md:text-[40px] text-white`}
      >
        {title}
      </motion.h1>
      <motion.p
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className={`mb-0 md:mb-[80px] ${lato.className} font-medium text-[16px] md:text-[20px] text-service-card`}
      >
        {desc}
      </motion.p>
    </div>
  );
}

export default Title;  // 