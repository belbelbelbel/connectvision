'use client'
import React from 'react'
import NavBar from '../components/NavBar'
import HeaderComponent from '../components/HeaderComponent'
import Image from 'next/image'
import Footer from '../components/Footer'
import Start from '../components/Start'

export default function page() {
    return (
        <div>
            <NavBar />
            <HeaderComponent title={'About Us'} image={'/heroimg.png'} position={''} />

            {/* Optometrist Section */}
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl my-8 text-[#3D3D3D] font-semibold text-center sm:text-left'>Meet our Optometrist</h1>

                <div className='flex flex-col lg:flex-row gap-8 mb-10 items-center'>
                    <div className='bg-[#3794C7] text-white rounded-xl lg:rounded-r-none p-6 lg:p-10 flex-1'>
                        <div className='flex items-center gap-3 font-semibold text-xl sm:text-2xl mb-5'>
                            <div className='bg-gray-400 h-6 w-1'></div>
                            <div>Dr. Nneoma Nwachukwu</div>
                        </div>
                        <p className='text-sm sm:text-base md:text-lg'>
                            Nneoma Nwachukwu (Wa-choo-koo) received a degree in Computer Science from the University of Texas at Dallas and her Doctor of Optometry degree from Oklahoma College of Optometry, Northeastern Oklahoma State University, Tahlequah, Oklahoma.
                            She has extensive experience in family eye care, including comprehensive eye examinations of patients of all ages, diagnoses and treatment of eye diseases, ocular injuries and visual system disorders. Treatment and recommendation of different ocular disorders include the use of laser, prescription drugs, contact lenses, glasses and vision training.  Dr. Nwachukwu is also very knowledgeable and proficient in the use of the most recent technology as a tool in the diagnosis of ocular disorders.
                        </p>
                    </div>

                    <div className='w-full lg:w-1/2 h-64 sm:h-80 md:h-96 relative'>
                        <Image src={'/aboutus.png'} alt={'aboutus'} fill className='object-contain rounded-xl' />
                    </div>
                </div>
            </div>

            {/* Mission Section */}
            <div className='max-w-7xl mx-auto md:mt-36 px-4 sm:px-6 lg:px-8 mb-16'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl font-semibold text-[#3D3D3D] text-center my-8'>Our Mission</h1>

                <div className='flex flex-col lg:flex-row items-center gap-8 mt-5'>
                    <div className='w-full lg:w-1/2'>
                        <Image src={'/ourmisionimg.png'} alt={'mission'} width={2000} height={1300} className='object-contain rounded-xl' />
                    </div>
                    <div className='w-full lg:w-1/2 text-base sm:text-lg'>
                        {`Our mission is to ensure patients the best possible vision performance by providing the highest quality vision and eye health care possible in a comfortable, professional, and "patient friendly" environment. We will keep overall patient wellness and understanding as first priorities in everything we do. We will maintain the highest health care standards, state of the art instrumentation, and commitment to continued improvement in our profession.`}
                    </div>

                </div>
            </div>

            {/* Start Component */}
            <Start />

            {/* Footer */}
            <Footer />
        </div>
    )
}
