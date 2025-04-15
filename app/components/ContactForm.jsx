"use client"

import { Lato } from "next/font/google";
const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export default function ContactForm() {
  return (
    
    <form action="" className="flex flex-col md:flex-row justify-center items-start gap-[24px] w-full px-10 md:px-[214px]">
    <div className="flex flex-col gap-[30px] w-full">
        <input
        placeholder="Name"
        onChange={(e)=>e.target.value}
        type="text"
        id="name"
        name="name"
        className="py-[14px] px-[24px] bg-white/4 rounded-[8px] w-full "
        />
        <input
        placeholder="Number"
        onChange={(e)=>e.target.value}
        type="number"
        id="number"
        name="number"
        className="py-[14px] px-[24px] bg-white/4 rounded-[8px] w-full "
        />
        <input
        placeholder="Timeline"
        onChange={(e)=>e.target.value}
        type="text"
        id="timeline"
        name="timeline"
        className="py-[14px] px-[24px] bg-white/4 rounded-[8px] w-full "
        />
        

    </div>
    <div className="flex flex-col justify-center items-end  w-full gap-[30px]">
    <input
        placeholder="Email"
        onChange={(e)=>e.target.value}
        type="email"
        id="email"
        name="email"
        className="py-[14px] px-[24px] bg-white/4 rounded-[8px] w-full "
        />

        <select
        placeholder="Name"
        onChange={(e)=>e.target.value}
        type="text"
        id="name"
        name="name"
        className="py-[14px] px-[24px] bg-white/4 rounded-[8px] w-full "
        >

            <option name='website'>Website </option>
            </select>


        <textarea
        placeholder="Project Details..."
        onChange={(e)=>e.target.value}
        maxLength={100}
        type="text"
        id="name"
        name="name"
        className="py-[14px] px-[24px] bg-white/4 rounded-[8px] w-full "
        />

<button type="submit" className={` cursor-pointer text-[20px] font-bold ${lato.className} bg-background-color  border-[#959595] border-2 rounded-[8px] px-10 py-3`}>
Send
</button>
    </div>
  </form>
  )
}
