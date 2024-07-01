//

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {/* Logo and Address */}
        <div>
          <Image src="/logo.webp" alt="Company Logo" width={40} height={40} className="w-32 mb-4" />
          <div className="mb-4">
            <h3 className="font-semibold text-lg mb-2">Corporate Office</h3>
            <p>Zakir Complex (9th Floor), Ka-218, Kuril Chowrasta, Dhaka-1229, Bangladesh.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Pickup Point</h3>
            <p>Siraj Garden, Ka-193/B, Sayed Ali Member Bari, Kuril Chowrasta, Dhaka-1229, Bangladesh.</p>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
          <div className="flex items-center mb-3">
            <FaMapMarkerAlt className="mr-3" />
            <a href="https://goo.gl/maps/xyz" target="_blank" rel="noopener noreferrer">Get Direction</a>
          </div>
          <div className="flex items-center mb-3">
            <FaPhone className="mr-3" />
            <p>(+88) 01322 908 240</p>
          </div>
          <div className="flex items-center mb-3">
            <FaEnvelope className="mr-3" />
            <p>support@robodocbd.com</p>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="mr-3" />
            <p>contact@robodocbd.com</p>
          </div>
        </div>

        {/* Store Hours */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Store Hours</h3>
          <div className="flex items-center mb-3">
            <FaClock className="mr-3" />
            <p>Sat - Thur - 9:00 AM - 8:00 PM</p>
          </div>
          <div className="flex items-center">
            <FaClock className="mr-3" />
            <p>Friday - Closed, No delivery</p>
          </div>
        </div>

        {/* Other Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Other Links</h3>
          <ul>
            <li className="mb-3"><Link href="/innovation-kit">Innovation Kit</Link></li>
            <li className="mb-3"><Link href="/contact-us">Contact Us</Link></li>
            <li className="mb-3"><Link href="/about-us">About Us</Link></li>
            <li className="mb-3"><Link href="/blog">Blog</Link></li>
            <li className="mb-3"><Link href="/faqs">FAQs</Link></li>
            <li className="mb-3"><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><a href="/terms-of-use">Terms of Use</a></li>
            <li><a href="/shipping-refund-policy">Shipping and Refund Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-5 mt-10 text-center border-t border-gray-700 pt-5">
        <div className="flex justify-center space-x-5">
          <Link href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FaFacebook /></Link>
          <Link href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><FaTwitter /></Link>
          <Link href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></Link>
        </div>
        <p className="mt-5">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
