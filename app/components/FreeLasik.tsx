import React from 'react'
import Start from './Start'
import Footer from './Footer'

export default function FreeLasik() {
    return (
      <div>
          <div className='flex flex-col py-12 max-w-6xl mx-auto gap-5 my-20'>
            <div className='flex flex-col text-gray-600 gap-3'>
                <div className='text-5xl mb-3 font-semibold text-[#3D3D3D]'>Lasik co-management</div>
                <div className='font-semibold'>We offer a pre-consultation to see if you qualify for LASIK sugery and post-consultation after your LASIK surgery.</div>
                <div>We offer Refractive surgery is the term used to describe surgical procedures that correct common vision problems (nearsightedness, farsightedness, astigmatism and presbyopia) to reduce your dependence on prescription eyeglasses and/or contact lenses</div>
                <div>Currently, a laser procedure called LASIK (LAY-sik) is the most popular refractive surgery performed in the United States. But there are other types of refractive surgery — including other laser procedures and intraocular lens (IOL) procedures — that might be an even better choice for you, depending on your needs.a pre-consultation to see if you qualify for LASIK sugery and post-consultation after your LASIK surgery.</div>
            </div>
        </div>
        <Start/>
        <Footer/>
      </div>
    )
}
