// src/components/Footer.jsx
import React from "react";
import { motion as Motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black py-16 px-4 text-white">
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
                   <li><a href="https://www.safaricom.co.ke/voice-footer/voice-footer" className="hover:text-secondary transition-colors">Voice</a></li>
                  <li><a href="https://www.safaricom.co.ke/voice-footer/data-footer" className="hover:text-secondary transition-colors">Data</a></li>
                  <li><a href="https://www.safaricom.co.ke/home/" className="hover:text-secondary transition-colors">Home Fibre</a></li>
                  <li><a href="https://developer.safaricom.co.ke/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">M-PESA API</a></li>
                </ul>
              </div>

              {/* Business */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Business</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li><a href="https://www.business.safaricom.co.ke/products?category=121-m-pesa-for-business" className="hover:text-secondary transition-colors">M-PESA for business</a></li>
                  <li><a href="https://www.business.safaricom.co.ke/products?category=7-internet-for-business" className="hover:text-secondary transition-colors">Internet for business</a></li>
                  <li><a href="https://www.business.safaricom.co.ke/products?category=2-cloud-solutions" className="hover:text-secondary transition-colors">Cloud solutions</a></li>
                  <li><a href="https://www.business.safaricom.co.ke/products?category=9-mobile-communication-solutions" className="hover:text-secondary transition-colors">Mobile communication solutions</a></li>
                  <li><a href="https://www.business.safaricom.co.ke/products?category=6-cybersecurity-solutions" className="hover:text-secondary transition-colors">Cybersecurity solutions</a></li>
                </ul>
              </div>

              {/* About Us */}
              <div>
                <h3 className="text-lg font-semibold mb-4 px-20">About Us</h3>
                <ul className="space-y-2 text-gray-300 text-sm px-20">
                  <li><a href="https://www.safaricom.co.ke/about/who-we-are" className="hover:text-secondary transition-colors">Who We Are</a></li>
                  <li><a href="https://www.safaricom.co.ke/about/community-impact" className="hover:text-secondary transition-colors">Community Impact</a></li>
                  <li><a href="https://www.safaricom.co.ke/about/sustainability" className="hover:text-secondary transition-colors">Sustainability</a></li>
                  <li><a href="https://www.safaricom.co.ke/about/join-safaricom" className="hover:text-secondary transition-colors">Join Us</a></li>
                  <li><a href="https://www.safaricom.co.ke/about/brand-toolkit" className="hover:text-secondary transition-colors">Brand Toolkit</a></li>
                </ul>
              </div>
            </div>

            {/* Divider + Socials */}
            <div className="pt-4">
              <hr className="mb-6 border-t border-gray-700" />
              <div className="flex justify-center">
                <div className="flex gap-6 text-2xl text-gray-300">
                   <a href="https://www.facebook.com/SafaricomPLC/" target="_blank" rel="noopener noreferrer"><FaFacebook className="hover:text-secondary transition-colors" /></a>
                  <a href="https://www.youtube.com/user/SafaricomOfficial" target="_blank" rel="noopener noreferrer"><FaYoutube className="hover:text-secondary transition-colors" /></a>
                  <a href="https://www.linkedin.com/company/safaricom/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="hover:text-secondary transition-colors" /></a>
                  <a href="https://www.instagram.com/safaricomplc_/" target="_blank" rel="noopener noreferrer"><FaInstagram className="hover:text-secondary transition-colors" /></a>
                  <a href="https://twitter.com/safaricomplc/" target="_blank" rel="noopener noreferrer"><FaTwitter className="hover:text-secondary transition-colors" /></a>
                  <a href="https://www.tiktok.com/@safaricomplc" target="_blank" rel="noopener noreferrer"><FaTiktok className="hover:text-secondary transition-colors" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Motion.div>
    </footer>
  );
}
