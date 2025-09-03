'use client'
import Image from "next/image";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { NavArray } from "../array";
import Button from "./Button";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const menuVariants = {
    hidden: { x: "-100%" },
    visible: { x: 0, transition: { type: "spring", stiffness: 80, damping: 20, staggerChildren: 0.1 } },
    exit: { x: "-100%", transition: { type: "spring", stiffness: 80, damping: 20 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="fixed top-0 w-full bg-white/90 backdrop-blur-md  shadow-md z-50">
      {/* Navbar Container */}
      <div className="flex justify-between items-center p-4 max-w-[92%] mx-auto   ">
        {/* Logo */}
        <div className="cursor-pointer" onClick={() => router.push('/')}>
          <Image src="/logo.svg" alt="Logo" width={90} height={90} />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
          {NavArray.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`relative px-4 py-2 rounded-lg font-semibold text-[16px] transition-all duration-300 ${
                pathname === item.href
                  ? "bg-blue-100 text-blue-600 "
                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              {item.name}
            </a>
          ))}
         
        </div>
         <Button title="Book an Appointment" />

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col justify-between w-6 h-5 focus:outline-none"
          >
            <span
              className={`block h-0.5 w-full bg-black transform transition duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            ></span>
            <span
              className={`block h-0.5 w-full bg-black transition duration-300 ${menuOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`block h-0.5 w-full bg-black transform transition duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu + Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Sliding Menu */}
            <motion.div
              className="md:hidden fixed top-0 left-0 w-3/4  bg-white z-50  h-[100vh] p-6 flex flex-col justify-between shadow-lg"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex flex-col gap-6">
                <div className="cursor-pointer" onClick={() => router.push('/')}>
                  <Image src="/logo.svg" alt="Logo" width={90} height={90} />
                </div>
                {NavArray.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className={`block px-4 py-3 rounded-lg font-semibold text-lg transition-all duration-300 ${
                      pathname === item.href
                        ? "bg-blue-100 text-blue-600 shadow-md"
                        : "text-gray-800 hover:bg-gray-100 hover:text-gray-900"
                    }`}
                    variants={itemVariants}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
              <motion.div variants={itemVariants} className="mt-4">
                <Button title="Book an Appointment" />
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
