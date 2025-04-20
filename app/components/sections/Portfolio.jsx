"use client";
import React, { useState } from "react";
import Title from "../title";
import QueryBtn from "../QueryBtn";
import portfolioCardInfo from "@/lib/data";
import Image from "next/image";

import { Lato } from "next/font/google";
const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export default function Portfolio() {
  const [selected, setSelected] = useState("All");
  const queries = [
    "All",
    "Website Design",
    "App Mobile Design",
    "App Desktop",
    "Braiding",
  ];

  const filteredCards =
    selected === "All"
      ? portfolioCardInfo
      : portfolioCardInfo.filter((card) => card.category === selected);

  return (
    <div className="flex  flex-col justify-center items-center px-[80px]">
      <div className="portfolio-top mb-[70px] flex flex-col  justify-center items-center">
        <div className="">
          <Title title={"Portfolio"} />
        </div>
        <div className="flex justify-center items-center flex-wrap gap-6">
          {queries.map((title) => (
            <QueryBtn
              key={title}
              title={title}
              isSelected={selected === title}
              onSelect={() => setSelected(title)}
            />
          ))}
        </div>
      </div>

      <div className="portfolio-card grid grid-cols-1 md:grid-cols-3 gap-[24px]">
        {filteredCards.map((card) => (
          <div
            key={card.id}
            className="bg-white/8 rounded-[28px] shadow-lg cursor-pointer"
          >
            <Image
              src={card.url}
              alt="card image"
              className="rounded-tl-[28px] rounded-tr-[28px]"
            />
            <div className="card-footer flex justify-between items-center p-[16px]">
              <h3
                className={`${lato.className} font-bold text-[16px] leading-[1.6] tracking-3percent text-card-title`}
              >
                {card.name}
              </h3>
              <p
                className={`text-border-color ${lato.className} text-[16px] font-bold leading-[1.6]`}
              >
                {card.category}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
