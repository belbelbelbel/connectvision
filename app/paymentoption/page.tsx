import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import Start from '../components/Start'
import Footer from '../components/Footer'

export default function page() {
  const image = [
    'payment1.png',
    'payment2.png',
    'payment3.png',
  ]
  return (
    <div>
      <HeaderComponent title={'Payment Options'} image={'heroimg.png'}/>
      <section className="w-full px-6 py-12">
        <div className="max-w-6xl mx-auto flex flex-col gap-8">
          <div>
            <h2 className="text-5xl text-gray-700 font-semibold mb-4">Payment Options</h2>
            <p className="mb-6 text-gray-600">
              We accept cash, personal checks,  MasterCard®, Visa®, and Discover®.
            </p>
          </div>
          <div className='grid grid-cols-3 gap-4'>
            {image.map((img, index) => (
              <div key={index} className="flex justify-center items-center p-2  rounded-lg  bg-white">
                <img src={`/${img}`} alt={`Payment ${index + 1}`} className="max-h-12 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Start/>
      <Footer/>
    </div>
  )
}
