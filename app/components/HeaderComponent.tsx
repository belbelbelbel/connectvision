import React from 'react'
import NavBar from './NavBar'

export default function HeaderComponent({ title }: { title: string }) {
    return (
        <div className='mt-20 mb-20'>
            <NavBar />
            <div className="relative  z-30 h-[50vh] w-[90%] mx-auto">
                <div className="bg-['url('/heroimg.png')'] h-full w-full rounded-xl    mx-auto bg-cover bg-center flex flex-col justify-center items-center text-center" style={{
                    backgroundImage: "url('/heroimg.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}>
                    <div className="absolute h-full w-full rounded-xl bg-black opacity-60"></div>
                    <div className="text-6xl text-white z-40 leading-16 text-center font-bold">{title}</div>
                </div>
            </div>
        </div>
    )
}
