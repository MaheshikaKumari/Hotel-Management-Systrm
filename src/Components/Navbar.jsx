import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
 <nav class="bg-amber-900 text-white px-6 py-4 shadow-md font-bold">
   <div class="container mx-auto flex justify-between items-center">
    <div class="text-2xl font-bold">The Royal Orchid </div>

     <div class="flex space-x-6">
     <Link to="/" className='hover:text-pink-300 transition duration-300'>Home</Link>
     <Link to="/About" className='hover:text-pink-300 transition duration-300'>About</Link>
     <Link to="/Services" className='hover:text-pink-300 transition duration-300'>Services</Link>
     <Link to="/Gallery" className='hover:text-pink-300 transition duration-300'>Gallery</Link>
     <Link to="/Contact" className='hover:text-pink-300 transition duration-300'>Contact</Link>
    </div>
  </div>
 </nav>  

      </>
  )
}

export default Navbar
