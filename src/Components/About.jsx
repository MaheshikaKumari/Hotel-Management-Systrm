import React from 'react';
import { FaUsers, FaBullseye, FaLightbulb } from 'react-icons/fa';

const About = () => {
  return (
    <div className="bg-orange-50 py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-24">About Us</h2>

        <div className="grid md:grid-cols-3 gap-10">
          
         
          <div className="bg-amber-900 rounded-xl shadow-xl p-8 text-center hover:scale-105 transform transition duration-300">
            <FaBullseye className="mx-auto mb-6 text-7xl text-pink-500"/>
            <h3 className="text-2xl font-bold mb-4 text-white">Our Mission</h3>
            <p className="text-white text-lg">We aim to provide the best services for our customers, ensuring satisfaction and quality in every project.</p>
          </div>

          
          <div className="bg-amber-900 rounded-xl shadow-xl p-8 text-center hover:scale-105 transform transition duration-300">
            <FaLightbulb className="mx-auto mb-6 text-7xl text-yellow-400"/>
            <h3 className="text-2xl font-bold mb-4 text-white">Our Vision</h3>
            <p className="text-white text-lg">To be recognized as the most reliable company in our field, providing innovative solutions and excellence.</p>
          </div>

          
          <div className="bg-amber-900 rounded-xl shadow-xl p-8 text-center hover:scale-105 transform transition duration-300">
            <FaUsers className="mx-auto mb-6 text-7xl text-blue-500"/>
            <h3 className="text-2xl font-bold mb-4 text-white">Our Team</h3>
            <p className="text-white text-lg">Our dedicated team of professionals work tirelessly to achieve the best results for our clients every day.</p>
          </div>

        </div>
      </div>
      
    </div>
  )
}

export default About;
