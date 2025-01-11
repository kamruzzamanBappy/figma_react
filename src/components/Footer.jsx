import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import footerLogo from "../assets/footer-logo.png";
import FooterContact from "./FooterContact";
const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div className="bg-secondary rounded-t-2xl">
        {/* first section*/}

        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 px-4 sm:px-6 lg:px-8 py-12">
          {/*logo */}

          <div>
            <img src={footerLogo} alt="" className="h-8" />
          </div>

          {/* menu items */}
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8">
            <a href="#about" className="text-white hover:text-gray-400">
              Home
            </a>
            <a href="#services" className="text-white hover:text-gray-400">
              Services
            </a>
            <a href="#use-cases" className="text-white hover:text-gray-400">
              Use Cases
            </a>
            <a href="#contact" className="text-white hover:text-gray-400">
              Contact
            </a>
          </div>

          {/*social icons */}

          <div className="flex justify-end space-x-4">
            <a href="#" className="p-1.5 text-black rounded-full bg-white">
              <FaFacebookF className="  hover:text-gray-400  " />
            </a>
            <a href="#" className="p-1.5 text-black rounded-full bg-white">
              <FaTwitter className="  hover:text-gray-400" />
            </a>
            <a href="#" className="p-1.5 text-black rounded-full bg-white">
              <FaLinkedinIn className="  hover:text-gray-400" />
            </a>
          </div>
        </div>

        {/* Contact and newsletter */}

        <FooterContact />
      </div>
    </footer>
  );
};

export default Footer;
