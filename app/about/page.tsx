import React from 'react'
import NavBar from '../components/NavBar'
import HeaderComponent from '../components/HeaderComponent'
import Image from 'next/image'
import Footer from '../components/Footer'
import Button from '../components/Button'

export default function page() {
    return (
        <div>
            <HeaderComponent title={'About Us'} />
            <div className='w-[80%] mx-auto '>
                <h1 className='text-5xl my-8 text-[#3D3D3D] font-semibold'>Meet our optomerist</h1>
            </div>
            <div className='flex w-[80%] mb-10  mx-auto justify-center items-center'>
                <div className='w-[80%] rounded-xl rounded-r-none p-15  text-white  bg-[#3794C7]'>
                    <div className='flex flex-row items-center gap-3  font-semibold text-2xl mb-5'>
                        <div className='bg-gray-400 h-10 w-1'></div>
                        <div>Dr. Nneoma Nwachukwu</div>
                    </div>
                    <div className='w-[80%]'>Nneoma Nwachukwu (Wa-choo-koo) received a degree in Computer Science from the University of Texas at Dallas and her Doctor of Optometry degree from Oklahoma College of Optometry, Northeastern Oklahoma State University, Tahlequah, Oklahoma.
                        She has extensive experience in family eye care, including comprehensive eye examinations of patients of all ages, diagnoses and treatment of eye diseases, ocular injuries and visual system disorders. Treatment and recommendation of different ocular disorders include the use of laser, prescription drugs, contact lenses, glasses and vision training.  Dr. Nwachukwu is also very knowledgeable and proficient in the use of the most recent technology as a tool in the diagnosis of ocular disorders.</div>

                </div>
                <div className='h-100 w-[40%]  relative '>
                    <Image src={'/aboutus.png'} alt={'aboutus'} fill className='object-contain' />
                </div>
            </div>
            <div className='flex flex-col w-[80%] mb-10  mx-auto justify-center '>
                <h1 className='text-5xl font-semibold text-[#3D3D3D] text-center my-8'>Our Mission</h1>
                <div className='w-[80%] flex items-center flex-row gap-10 mt-5'>
                    <div>
                        <Image src={'/ourmisionimg.png'} alt={'mission'} width={2000} height={1300} className='object-contain' />
                    </div>
                    <div className='text-lg'>Our mission is to ensure patients the best possible vision performance by providing the highest quality vision and eye health care possible in a comfortable, professional, and "patient friendly" environment. We will keep overall patient wellness and understanding as first priorities in everything we do. We will maintain the highest health care standards, state of the art instrumentation, and commitment to continued improvement in our profession.</div>
                </div>
            </div>
            <div className='w-full flex flex-col items-center justify-center mt-20'>
                <h1 className='text-5xl my-8 text-[#3D3D3D] font-semibold text-center'>Not sure where to start? </h1>
                <div className='text-center mb-8 w-[55%] mx-auto'>We’re here to help you see your world in its fullest clarity. Book an appointment or get in touch today. At ConnectVision eye care, clear vision isn’t just a goal, it’s a future waiting for you</div>
                <Button/>
            </div>
            <Footer />
        </div>
    )
}
