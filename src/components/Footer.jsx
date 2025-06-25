// src/components/Footer.jsx
import React from "react";
import { motion as Motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-16 px-4 text-white">
      <Motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="max-w-6xl mx-auto"
      >
        {/* Main Row: Logo left + Links & Icons right */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 font-display">
          {/* Far Left: PO TOOL Logo */}
          {/* <div className="md:w-1/4">
            <div className="text-2xl font-bold uppercase flex items-center gap-2">
              <p className="text-white">PO</p>
              <p className="text-secondary">TOOL</p>
            </div>
          </div> */}

          {/* Far Right: Links + Icons */}
          <div className="md:w-4/4 flex flex-col gap-10">
            {/* Link Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
              {/* Products */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Products</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  {["Voice", "Data", "Home Fibre", "M-PESA API"].map((item) => (
                    <li
                      key={item}
                      className="hover:text-secondary transition-colors cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Business */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Business</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  {[
                    "M-PESA for business",
                    "Internet for business",
                    "Cloud solutions",
                    "Mobile communication solutions",
                    "Cybersecurity solutions",
                  ].map((item) => (
                    <li
                      key={item}
                      className="hover:text-secondary transition-colors cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* About Us */}
              <div>
                <h3 className="text-lg font-semibold mb-4 px-20">About Us</h3>
                <ul className="space-y-2 text-gray-300 text-sm px-20">
                  {[
                    "Who We Are",
                    "Community Impact",
                    "Sustainability",
                    "Join Us",
                    "Brand Toolkit",
                  ].map((item) => (
                    <li
                      key={item}
                      className="hover:text-secondary transition-colors cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Divider + Socials */}
            <div className="pt-4">
              <hr className="mb-6 border-t border-gray-700" />
              <div className="flex justify-center">
                <div className="flex gap-6 text-2xl text-gray-300">
                  <FaFacebook className="hover:text-secondary transition-colors cursor-pointer" />                  
                  <FaYoutube className="hover:text-secondary transition-colors cursor-pointer" />
                  <FaLinkedin className="hover:text-secondary transition-colors cursor-pointer" />
                  <FaInstagram className="hover:text-secondary transition-colors cursor-pointer" />
                  <FaTwitter className="hover:text-secondary transition-colors cursor-pointer" />
                  <FaTiktok className="hover:text-secondary transition-colors cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Motion.div>
    </footer>
  );
}





// import { FaFacebook, FaTwitter, FaInstagram, FaLeaf } from "react-icons/fa";
// import { motion as Motion } from "framer-motion"

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 py-30 ">
//       <Motion.div
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }} 
//       transition={{ duration: 1, delay: 0.2 }} 
//       className="flex justify-between items-center px-4">
//         {/* Log Section */}
//         <div className="text-2xl flex items-center gap-2 font-bold uppercase">
//           <p className="text-white">PO</p>
//           <p className="text-white">TOOL</p>
//         </div>
//         {/* Social Icons Section */}
//         <div className="text-2xl flex items-center gap-4 text-gray-200">
//           <FaInstagram/>
//           <FaTwitter/>
//           <FaFacebook/>
//           <FaTwitter/>
//         </div>
//       </Motion.div>
//     </footer>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
//   )
// };

// export default Footer;