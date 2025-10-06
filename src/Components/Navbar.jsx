import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-amber-900 text-white px-6 py-4 shadow-md font-bold">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">The Royal Orchid</div>

        <div className="flex space-x-6 items-center">
          <Link to="/" className='hover:text-pink-300 transition duration-300'>Home</Link>
          <Link to="/About" className='hover:text-pink-300 transition duration-300'>About</Link>
          <Link to="/Services" className='hover:text-pink-300 transition duration-300'>Services</Link>
          <Link to="/Gallery" className='hover:text-pink-300 transition duration-300'>Gallery</Link>
          <Link to="/Contact" className='hover:text-pink-300 transition duration-300'>Contact</Link>
          <Link to="/Auth"  className="ml-4 border-2 border-pink-500 text-pink-500 px-5 py-2 rounded-full font-semibold hover:bg-pink-500 hover:text-white transition-all duration-300">  Sign Up  </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
