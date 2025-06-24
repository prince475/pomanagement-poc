import React from "react";
import { motion as Motion} from "framer-motion"
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <>
    <nav className="sticky top-0 z-50 backdrop-blur-xlg bg-white/50 shadow-md">
    <Motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.7 }}
      className="flex justify-between items-center py-8 px-4 md:pt-8">
         {/* left section */}
        <div className="text-2xl flex items-center gap-2 font-bold uppercase">
          <h1 className="text-gray-900">📊 PO Dashboard</h1>
        </div>
         {/* right section */}
        <div className="hidden md:flex items-center gap-4 text-sm text-gray-700">
          <span className="font-semibold">Welcome, Admin</span>
          <img
            src={logo}
            alt="Logo"
            className="h-20 w-25 shadow-md"
          />
        </div>
    </Motion.div>
    </nav>

    </>
  );
}