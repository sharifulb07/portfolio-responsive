import Image from "next/image"
import { Lato } from "next/font/google";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export default function ServiceCard({img, title, description}) {

  return (
    <div className=" h-[322px] p-[34px] shadow-lg bg-white/4 cursor-pointer flex flex-col rounded-[24px] justify-center gap-[34px] ">
       <div className="flex flex-col justify-center items-center gap-4">
        
       <Image src={img} alt="" />
       <h3 className={`${lato.className} font-bold text-[24px] `}>{title} </h3>
        </div> 
        <p className={`${lato.className} font-medium text-[20px] text-service-card`}>{description} </p>
      
    </div>
  )
}
