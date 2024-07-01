
//
import React from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const NewsletterSignup = () => {
  return (
    <div className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-5 flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-4">Sign Up to Newsletter</h2>
        <p className="mb-6 text-center">Stay updated with our latest news and offers</p>
        <form className="flex flex-col sm:flex-row items-center w-full max-w-md mb-6">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 w-full mb-4 sm:mb-0 sm:mr-2 border border-gray-400 rounded-md"
          />
          <button type="submit" className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md">
            Subscribe
          </button>
        </form>
        <div className="flex space-x-5">
          <Link href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={24} />
          </Link>
          <Link href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} />
          </Link>
          <Link href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} />
          </Link>
          <Link href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup;
