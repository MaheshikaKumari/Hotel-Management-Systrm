import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-white py-12  ">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center md:text-left">
        
        <div>
          <h3 className="text-2xl font-bold mb-3 text-pink-400">The Royal Orchid </h3>
          <p className="text-gray-200 leading-relaxed">
            Enjoy luxury and comfort the royal Orchid Hotel.  
            We provide top-notch rooms, excellent service 
            and unforgettable experiences.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-3 text-pink-300">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-pink-400">Home</a></li>
            <li><a href="/about" className="hover:text-pink-400">About Us</a></li>
            <li><a href="/Services" className="hover:text-pink-400">Services</a></li>
            <li><a href="/gallery" className="hover:text-pink-400">gallery</a></li>
           <li><a href="/contact" className="hover:text-pink-400">Contact</a></li>

          </ul>
        </div>

       
        <div>
          <h4 className="text-xl font-semibold mb-3 text-pink-300">Contact Us</h4>
          <ul className="space-y-2 text-gray-200">
            <li className="flex items-center justify-center md:justify-start space-x-2">
              <FaPhone /> <span>+94 76 123 4567</span>
            </li>
            <li className="flex items-center justify-center md:justify-start space-x-2">
              <FaEnvelope /> <span>info@royal.com</span>
            </li>
            <li className="flex items-center justify-center md:justify-start space-x-2">
              <FaMapMarkerAlt /> <span>Colombo, Sri Lanka</span>
            </li>
          </ul>
        </div>

        
        <div>
          <h4 className="text-xl font-semibold mb-3 text-pink-300">Follow Us</h4>
          <div className="flex justify-center md:justify-start space-x-5 text-2xl">
            <a href="https://www.facebook.com" className="hover:text-pink-400"><FaFacebook /></a>
            <a href="https://www.instragram.com" className="hover:text-pink-400"><FaInstagram /></a>
            <a href="https://www.twitter.com" className="hover:text-pink-400"><FaTwitter /></a>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-600 mt-10 pt-4 text-center text-gray-300 text-sm">
        © {new Date().getFullYear()} DreamStay Hotel. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
