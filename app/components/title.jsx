import { Lato } from "next/font/google";
const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export default function Title({ title, desc = "" }) {
  return (
    <div className="mb-[50px] gap-[18px] px-[40px] flex flex-col justify-center items-center">
      <h1
        className={`${lato.className} font-bold text-3xl md:text-[40px] text-white`}
      >
        {title}
      </h1>
      <p
        className={`mb-0md:mb-[80px] ${lato.className} font-medium text-[16px]  md:text-[20px] text-service-card`}
      >
        {desc}
      </p>
    </div>
  );
}
