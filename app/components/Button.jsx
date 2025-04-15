import { Lato } from "next/font/google";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export default function Button({ variant, children,  ...props }) {
  if (variant == "outline") {
    return (
      <button
        className={` ${lato.className} flex font-bold text-[20px] px-10 py-3 cursor-pointer border-2 border-border-color rounded-[8px]`}
      >
        {children}
      </button>
    );
  } else {
    return (
      <button className={` ${lato.className} button flex justify-center gap-2 items-center`}>{children}</button>
    );
  }
}
