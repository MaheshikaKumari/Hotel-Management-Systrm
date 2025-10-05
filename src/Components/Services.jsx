import React from 'react';
import { FaSwimmingPool, FaSpa, FaDumbbell, FaUtensils, FaWifi, FaParking } from 'react-icons/fa';

const Services = () => {
  return (
    <div className="bg-orange-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-4xl font-bold text-center mb-12 text-amber-900">
          Facilities & Services
        </h2>

        
        <div className="grid md:grid-cols-3 gap-10">

          
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:scale-105 transform transition duration-300">
            <FaSwimmingPool className="mx-auto mb-4 text-6xl text-pink-500" />
            <h3 className="text-2xl font-bold text-amber-900 mb-2">Swimming Pool</h3>
            <p className="text-gray-600">
              Relax and refresh in our crystal-clear pool with comfortable lounge seating.
            </p>
          </div>

         
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:scale-105 transform transition duration-300">
            <FaSpa className="mx-auto mb-4 text-6xl text-pink-500" />
            <h3 className="text-2xl font-bold text-amber-900 mb-2">Luxury Spa</h3>
            <p className="text-gray-600">
              Experience soothing treatments and massages in our relaxing spa center.
            </p>
          </div>

          
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:scale-105 transform transition duration-300">
            <FaDumbbell className="mx-auto mb-4 text-6xl text-pink-500" />
            <h3 className="text-2xl font-bold text-amber-900 mb-2">Fitness Center</h3>
            <p className="text-gray-600">
              Stay active during your stay with our modern gym and professional equipment.
            </p>
          </div>

          
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:scale-105 transform transition duration-300">
            <FaUtensils className="mx-auto mb-4 text-6xl text-pink-500" />
            <h3 className="text-2xl font-bold text-amber-900 mb-2">Restaurant</h3>
            <p className="text-gray-600">
              Savor delicious cuisines from around the world prepared by our top chefs.
            </p>
          </div>

          
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:scale-105 transform transition duration-300">
            <FaWifi className="mx-auto mb-4 text-6xl text-pink-500" />
            <h3 className="text-2xl font-bold text-amber-900 mb-2">Free Wi-Fi</h3>
            <p className="text-gray-600">
              Enjoy unlimited high-speed internet access throughout the hotel premises.
            </p>
          </div>

          
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:scale-105 transform transition duration-300">
            <FaParking className="mx-auto mb-4 text-6xl text-pink-500" />
            <h3 className="text-2xl font-bold text-amber-900 mb-2">Secure Parking</h3>
            <p className="text-gray-600">
              Complimentary secure parking available for all our guests during their stay.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Services;

