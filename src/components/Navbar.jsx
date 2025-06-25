import React from "react";
import { motion as Motion} from "framer-motion"
import logo from "../assets/logo.png";
import image from "../assets/image.png"


export default function Navbar() {
  return (
    <>
    <nav className="bg-white shadow sticky top-0 z-50 backdrop-blur-md bg-opacity-80 h-[130px]">
    <Motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.7 }}
      className="flex justify-between items-center px-4 h-full">
         {/* left section */}
        <div className="text-lg flex  gap-6 items-center uppercase overflow-hidden">
        <img
            src={logo}
            alt="Logo"
            className="h-[110px] w-auto shadow-md"
          />
          <h1 className="font-display font-semibold text-gray-900 leading-tight">📊 Fixed Network financial dashboard</h1>
        </div>
         {/* right section */}
        <div className="hidden md:flex items-center gap-4 text-sm text-gray-700">
          <span className="font-display-700">Welcome, Admin</span>
          <img class="mx-auto block h-10 rounded-full sm:mx-0 sm:shrink-0" src={image} alt="image" />
        </div>
    </Motion.div>
    </nav>

    </>
  );
}