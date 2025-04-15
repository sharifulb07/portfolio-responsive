"use client";
import { useEffect, useState } from "react";

import CircularProgress from "@/app/components/CircularProgress";

import { TbBrandAdobeXd } from "react-icons/tb";
import { FaFigma } from "react-icons/fa6";
import { TbBrandAdobePhotoshop } from "react-icons/tb";
import { TbBrandAdobeIllustrator } from "react-icons/tb";
import { TbBrandAdobePremier } from "react-icons/tb";

export default function Progress() {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleSize = () => setScreenWidth(window.innerWidth);
    console.log(handleSize);

    window.addEventListener("resize", handleSize);

    return () => window.removeEventListener("resize", handleSize);
  }, []);
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 ">
      <CircularProgress
        percentage={`${screenWidth > 600 ? 100 : 50}`}
        circleWidth={screenWidth > 600 ? 250 : 125}
        icon={<FaFigma size={screenWidth > 600 ? 100 : 50}/>}
        title={"Figma"}
      />
      <CircularProgress
        percentage={screenWidth > 600 ? 100 : 50}
        circleWidth={screenWidth > 600 ? 250 : 125}
        icon={<TbBrandAdobeXd size={screenWidth > 600 ? 100 : 50} />}
        title={"Adobe Xd"}
      />
      <CircularProgress
        percentage={screenWidth > 600 ? 100 : 50}
        circleWidth={screenWidth > 600 ? 250 : 125}
        icon={<TbBrandAdobePhotoshop size={screenWidth > 600 ? 100 : 50} />}
        title={"Adobe Photoshop"}
      />
      <CircularProgress
        percentage={screenWidth > 600 ? 100 : 50}
        circleWidth={screenWidth > 600 ? 250 : 125}
        icon={<TbBrandAdobeIllustrator size={screenWidth > 600 ? 100 : 50} />}
        title={"Adobe Illustrator"}
      />
      <CircularProgress
        percentage={screenWidth > 600 ? 100 : 50}
        circleWidth={screenWidth > 600 ? 250 : 125}
        icon={<TbBrandAdobePremier size={screenWidth > 600 ? 100 : 50} />}
        title={"Adobe Premiere"}
      />
    </div>
  );
}
