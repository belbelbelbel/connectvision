// components/Footer.jsx
import React from "react";
import Image from "next/image";

const quickLinks = ["Home", "About", "Services", "Contact"];
const services = [
  "Comprehensive Eye Exam",
  "Contact Lenses",
  "Pediatric Vision Care",
  "Retinal Exams",
  "Free Lasic Co-management",
];
const contact = {
  address: "3711 Justin Road  #150 Flower Mound, TX 75028",
  phone: "(972) 355-5818",
  email: "ConnectVisionEyeCare@gmail.com",
};

export default function Footer() {
  return (
    <footer className="bg-white mt-30 border-t-0 border-b-10 border-34 border-[#3794C7] text-gray-800 py-10">
      <div className=" w-[92%] text-gray-600 mx-auto flex flex-col md:flex-row md:justify-between ">

        {/* Logo */}
        <div className="mb-8 md:mb-0 flex-shrink-0">
          <Image
            src="/logo.svg"
            alt="ConnectVision Eye Care"
            width={150}
            height={80}
          />
        </div>
        <div className="  px-4 md:flex   gap-24">

          {/* Quick Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="font-bold md:text-[20px] text-gray-800 mb-2">Quick Links</h3>
            <ul className="space-y-5">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, "-")}`} className="hover:underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="mb-6 md:mb-0">
            <h3 className="font-bold md:text-[20px] text-gray-800 mb-2">Services</h3>
            <ul className="space-y-5">
              {services.map((service) => (
                <li className="" key={service}>{service}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold md:text-[20px] text-gray-800 mb-2">Address</h3>
            <p>{contact.address}</p>
            <h3 className="font-bold mt-4 text-[20px] text-gray-800 mb-1">Telephone</h3>
            <p>{contact.phone}</p>
            <h3 className="font-bold mt-4 text-[20px] text-gray-800 mb-1">Email Address</h3>
            <p>{contact.email}</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
