import React from 'react'
import Button from './Button'

export default function Start() {
    return (
        <div className='w-full flex flex-col text-gray-600 items-center justify-center my-30'>
            <h1 className='text-4xl my-4 text-[#3D3D3D] font-semibold text-center'>Not sure where to start? </h1>
            <div className='text-center mb-5 max-w-3xl mx-auto'>We’re here to help you see your world in its fullest clarity. Book an appointment or get in touch today. At ConnectVision eye care, clear vision isn’t just a goal, it’s a future waiting for you</div>
            <Button title={'Book an Appointment '} />
        </div>
    )
}
