import React from 'react'
import Button from './Button'
import Footer from './Footer'
import Start from './Start'

export default function ContactLense() {
    return (
        <div className='w-full'>
            <div className='max-w-6xl mx-auto my-30 flex flex-col gap-10'>
                <div className='flex flex-col gap-3'>
                    <div className='text-5xl mb-3 font-semibold text-[#3D3D3D]'>Contact lenses</div>
                    <div className='text-gray-600'>Contact lenses are an important part of almost any modern optometric practice.  We fit all types of contact lenses, however we specialize in advanced and difficult contact lenses such contacts for people that have been referred to us because they were unsuccessful with refractive surgery, have keratoconus, dry eyes, require bifocal contact lenses or have encountered  problems with contact lenses.</div>
                </div>
                <div>
                    <Button title={'Order Contacts'} />
                </div>

            </div>
            <Start />
            <Footer />
        </div>
    )
}
