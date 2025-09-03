'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
import { NavArray } from "../array";
import Button from "./Button";

export default function NavBar() {
  const router = useRouter()
  return (
    <div>
      <div className=" fixed z-50 top-0  justify-between bg-white items-center  w-full mx-auto">
        <div className="flex  justify-between bg-white/40 backrdrop-blur  items-center p-3 w-[92%] mx-auto ">
          <div className="cursor-pointer" onClick={() => router.push('/')} >
            <Image src={"logo.svg"} className="object-contain " alt={""} width={90} height={90} />
          </div>
          <div className="flex flex-row ">
            {
              NavArray.map((items) => (
                <div className="flex flex-row items-center px-6 font-medium  hover:text-gray-900 cursor-pointer" key={items.name}>
                  <a className="text-[#3D3D3D] font-semibold text-[16px]" href={items.href}>{items.name}</a>
                </div>
              ))
            }
          </div>
          <Button />
        </div>
      </div>
    </div>
  )
}
