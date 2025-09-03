'use client'
import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import { useState } from "react";
import Start from '../components/Start';
import Footer from '../components/Footer';


export default function page() {
      const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    comments: "",
  });
  return (
    <div>
      <HeaderComponent title={'Contact Us'} image={'heroimg.png'}/>
      <section className="w-full px-6 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Form */}
        <div>
          <p className="mb-6 text-gray-600">
            Please complete the form below and our team will be in touch with you
            to schedule a consultation, or answer any questions.
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Enter Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="Enter Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Enter Email Address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="Placeholder..."
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              placeholder="Ask a question or add a comment"
              value={formData.comments}
              onChange={(e) =>
                setFormData({ ...formData, comments: e.target.value })
              }
              className="w-full p-3 border rounded-lg h-28 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white font-medium px-6 py-2 rounded-lg hover:bg-blue-600"
            >
              Send
            </button>
          </form>
        </div>

        {/* Map */}
        <div className="rounded-lg overflow-hidden">
          <img
            src="/mapimg.png"
            alt="map"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Contact details */}
      <div className="text-center mt-16">
        <h2 className="text-2xl font-semibold mb-6">Contact Detail</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-blue-50 p-6 rounded-xl">
            <p>3711 Justin Road #150 Flower Mound, TX 75028</p>
            <p className="mt-2 font-semibold">Address</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl">
            <p>(972) 355-5818</p>
            <p className="mt-2 font-semibold">Phone Number</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl">
            <p>ConnectVisionEyeCare@gmail.com</p>
            <p className="mt-2 font-semibold">Email Address</p>
          </div>
        </div>
      </div>
    </section>
    <Start/>
    <Footer/>
    </div>
  )
}
