import ServiceCard from "../Service-Card";
import UserIcon from "@/public/user.svg";
import { Lato } from "next/font/google";
import Title from "../title";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export default function Services({isHome}) {
  return (
    <section className={` ${isHome? "mt-[450px]":"mt-[100px]" }  md:mt-[50px] md:top-0 flex justify-center flex-col w-full text-orange-600 text-center px-[26px] gap-[24px] md:px-20`}>
    
    <Title title={'Services'} desc="Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit
        felis ligula aliquam" />
{/*     
     <div>
      <h1 className={`${lato.className} font-bold text-[40px] text-white`}>
        Services
      </h1>
      <p
        className={`mb-0md:mb-[80px] ${lato.className} font-medium text-[20px] text-service-card`}
      >
        Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit
        felis ligula aliquam
      </p>
      </div> */}

      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 justify-center ">
        
        
        <ServiceCard
          img={UserIcon}
          title={"App Design"}
          description={
            "Lorem ipsum dolor sit amet . Imperdiet Lorem ipsum dolor sit amet consectetur"
          }
        />
        
        <ServiceCard
          img={UserIcon}
          title={"App Design"}
          description={
            "Lorem ipsum dolor sit amet . Imperdiet Lorem ipsum dolor sit amet consectetur"
          }
        />
        
        <ServiceCard
          img={UserIcon}
          title={"App Design"}
          description={
            "Lorem ipsum dolor sit amet . Imperdiet Lorem ipsum dolor sit amet consectetur"
          }
        />
        
        <ServiceCard
          img={UserIcon}
          title={"App Design"}
          description={
            "Lorem ipsum dolor sit amet . Imperdiet Lorem ipsum dolor sit amet consectetur"
          }
        />
        
        <ServiceCard
          img={UserIcon}
          title={"App Design"}
          description={
            "Lorem ipsum dolor sit amet . Imperdiet Lorem ipsum dolor sit amet consectetur"
          }
        />
        
        <ServiceCard
          img={UserIcon}
          title={"App Design"}
          description={
            "Lorem ipsum dolor sit amet . Imperdiet Lorem ipsum dolor sit amet consectetur"
          }
        />







      </div>
    </section>
  );
}
