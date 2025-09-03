import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import Link from 'next/link'
import { Servicearray } from '../array'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa6'
import Start from '../components/Start'
import Footer from '../components/Footer'

export default function page() {
    return (
        <div>
            <HeaderComponent title={'Our Services'} image={'/heroimg.png'} />
            <div className='flex flex-wrap w-[90%] mx-auto my-10 gap-10 justify-center items-center '>
                {
                    Servicearray.map((item) => (
                        <Link key={item.title} href={`/service/${item.title}`}>
                            <div className='block rounded-lg overflow-hidden   transition-shadow duration-300'>
                                <div className='flex flex-col justify-center h-92 text-md font-semibold w-90 bg-[#DCF3FF4D] items-center  gap-5'>
                                    <div className='w-full h-[75%] relative'>
                                        <Image src={item.img} alt={item.title} width={1000} height={100} className='object-cover' />
                                         
                                    </div>
                                    <div className='h-[60%] flex justify-between items-center w-[90%] px-2'>
                                        <div>  {item.title}</div>
                                        <div><div><FaArrowRight /></div></div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
            <Start/>
            <Footer/>
        </div>
    )
}
