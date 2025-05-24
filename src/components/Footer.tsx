"use client";

import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      {/* Desktop Footer */}
      <footer className="hidden md:block bg-gradient-to-b from-grey/80 via-white/40 to-transparent backdrop-blur-md shadow-sm text-gray-800 py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-grey-900">NQ Designs</h3>
            <p>
              Crafting exceptional architectural, construction, and interior solutions that blend aesthetics with functionality.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-md font-semibold mb-2 text-grey-900">Contact</h4>
            <p>Email: <a href="mailto:contact@nqdesigns.com" className="text-blue-400 hover:underline">nqdesigns87@gmail.com</a></p>
            <p>Phone: +91 7800714729</p>
            <p>Address:   Near Rustle Court, Gomati Nagar Extension, Lucknow, India</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-md font-semibold mb-2 text-grey-900">Quick Links</h4>
            <ul className="space-y-1">
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
              <li><Link href="/projects" className="hover:text-white">Designs</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
              <li><Link href="/" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/" className="hover:text-white">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-md font-semibold mb-2 text-grey-900">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/nqdesigns.lucknow?rdid=1qsTfN3loQcCIMf9&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Kkqms4D8p%2F#" target="_blank" rel="noopener noreferrer"><FaFacebook className="text-xl hover:text-white" /></a>
              <a href="https://www.instagram.com/_nqdesigns?igsh=MWozNjNzcjhxeTdteA%3D%3D" target="_blank" rel="noopener noreferrer"><FaInstagram className="text-xl hover:text-white" /></a>
              <a href="https://linkedin.com" target="#" rel="noopener noreferrer"><FaLinkedin className="text-xl hover:text-white" /></a>
              <a href="https://twitter.com" target="#" rel="noopener noreferrer"><FaTwitter className="text-xl hover:text-white" /></a>
              <a href="mailto:nqdesigns87@gmail.com"><FaEnvelope className="text-xl hover:text-white" /></a>
            </div>
          </div>
        </div>

        <div className="text-center mt-10 text-sm text-gray-700">
          &copy; {year} NQ Designs Private Limited. All rights reserved.
        </div>
      </footer>

      
    </>
  );
}
