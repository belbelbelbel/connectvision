import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import Start from '../components/Start'
import Footer from '../components/Footer'

export default function page() {
  return (
    <div>
      <HeaderComponent title={'Patient Form'} image={'heroimg.png'} />
      <section className="w-full px-6 py-12">
        <div className="max-w-6xl mx-auto flex flex-col gap-8">
          <div>
            <h2 className="text-5xl text-gray-700 font-semibold mb-4">Patient Form</h2>
            <p className="mb-6 text-gray-600">
              We accept various payment methods to make it convenient for you.
              Please contact our office for more details on payment options and
              insurance coverage.
            </p>
          </div>
          <div>
            <img src="/patientform.png" alt="Patient Form" className="w-full h-auto rounded-lg shadow-md" />
          </div>
        </div>
      </section>
      <Start />
      <Footer />
    </div>
  )
}
