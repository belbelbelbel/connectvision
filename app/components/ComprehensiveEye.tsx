import React from 'react'
import Start from './Start'
import Footer from './Footer'

export default function ComprehensiveEye() {
    const imagearray = [
        '/Routineeyeexamimage1.png',
        '/Routineeyeexamimage2.png',
        '/Routineeyeexamimage3.png',
    ]
    return (
        <div className=' w-full  '>
            <div className='md:max-w-6xl w-[80%] mx-auto py-12 '>
                <div className='flex flex-col gap-5'>
                    <div className='text-5xl mb-1 font-semibold text-gray-700'>Routine eye exam</div>
                    <div className='text-gray-600'>A complete eye exam involves a series of tests designed to evaluate your vision and check for eye diseases. Our eye doctor may use a variety of instruments, shine bright lights directly at your eyes and request that you look through an array of lenses. Each test during an eye exam evaluates a different aspect of your vision or eye health.</div>
                </div>
                <div className='flex flex-col md:flex-row gap-10 justify-center items-center my-10'>
                    {
                        imagearray.map((item) => (
                            <div key={item} className='my-5'>
                                <img src={item} alt='Routineeyeexamimage' className='object-contain' />
                            </div>
                        ))
                    }
                </div>
              
            </div>
              <div>
                    <Start />
                </div>
            <Footer />
        </div>
    )
}
