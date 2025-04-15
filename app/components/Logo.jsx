import { K2D } from "next/font/google"
const k2d=K2D({
weight:['400','300','600'],
    subsets:['latin']
})
export default function Logo() {
  return (
    <h1 className={`${k2d.className} text-[30px] font-bold bg-gradient-to-r  from-[#FA6E00] to-[#E60026] text-transparent cursor-pointer bg-clip-text`}>
SdEV
      
    </h1>
  )
}
