import React from 'react'
import NavBar from './NavBar'

type HeaderProps = {
  title: string
  image: string
  position?: string
}

export default function HeaderComponent({ title, image, position }: HeaderProps) {
  return (
    <div className="mt-20 mb-20">
      <NavBar />
      <div className="relative z-30 h-[50vh] w-[100%] mx-auto">
        <div
          className="h-full w-full  mx-auto bg-cover bg-center flex flex-col justify-center items-center text-center relative"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition:  `${position}`,
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="absolute h-full w-full  bg-[#3D3D3D] opacity-70"></div>
          <div className="text-6xl text-white z-40 leading-16 text-center font-bold">
            {title}
          </div>
        </div>
      </div>
    </div>
  )
}
