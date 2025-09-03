import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import Start from '../components/Start'
import Footer from '../components/Footer'

export default function page() {
  const images = [
    'insurance1.png',
    'insurance2.png',
    'insurance3.png',
    'insurance4.png',
    'insurance5.png',
    'insurance6.png',
    'insurance7.png',
    'insurance8.png',
  ]
  return (
    <div>
      <HeaderComponent title={' Insurance'} image={'heroimg.png'} />
      <section className="w-full px-6 py-12">
        <div className="max-w-6xl mx-auto flex flex-col gap-8">
          <div>
            <h2 className="text-5xl text-gray-700 font-semibold mb-4">Acceptable insurances</h2>
            <p className="mb-6 text-gray-600">
              We accept numerous insurance plans. If you do not see your plan listed below feel free to call us for assistance.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {images.map((img, index) => (
              <div key={index} className="flex justify-center items-center p-2  rounded-lg  bg-white">
                <img src={`/${img}`} alt={`Insurance ${index + 1}`} className="max-h-12 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Start />
      <Footer />
    </div>
  )
}
