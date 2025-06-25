import React from "react";
import { motion as Motion} from "framer-motion"
import logo from "../assets/logo.png";
import image from "../assets/image.png"


export default function Navbar() {
  return (
    <>
    <nav className="sticky top-0 z-50 backdrop-blur-xlg bg-white/50 shadow-md">
    <Motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.7 }}
      className="flex justify-between items-center py-8 px-4 md:pt-2">
         {/* left section */}
        <div className="text-xl flex  flex-col items-start gap-2 uppercase">
        <img
            src={logo}
            alt="Logo"
            className="h-20 w-25 shadow-md"
          />
          <h1 className="font-display-500 text-gray-900">📊 Fixed Network financial dashboard</h1>
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