import React from 'react';
import Deluxe from '../assets/Deluxe room.jpg'
import Suite from '../assets/Suite Room.jpg'
import Family from '../assets/family room.jpg'

const Rooms = () => {
  return (
    <div className="bg-orange-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">
        
       <h2 className="text-4xl font-bold text-center mb-12 text-amber-900">Rooms & Suites </h2>

       <div className="grid md:grid-cols-3 gap-10">
           <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300">
            <img src={Deluxe} alt="Deluxe Room" className="h-56 w-full object-cover"/>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold text-amber-900 mb-2">Deluxe Room</h3>
              <p className="text-gray-600 mb-4">
                Elegant room with a comfortable king-size bed, modern interior and city view.
              </p>
              <p className="text-lg font-semibold text-pink-600">Rs. 15,000 / night</p>
            </div>
          </div>

         
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300">
            <img src={Suite} alt="Suite Room" className="h-56 w-full object-cover"/>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold text-amber-900 mb-2">Suite Room</h3>
              <p className="text-gray-600 mb-4">
                Spacious suite with living area, balcony and luxurious amenities for your comfort.
              </p>
              <p className="text-lg font-semibold text-pink-600">Rs. 25,000 / night</p>
            </div>
          </div>

         
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300">
            <img  src={Family}  alt="Family Room" className="h-56 w-full object-cover" />
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold text-amber-900 mb-2">Family Room</h3>
              <p className="text-gray-600 mb-4">
                Perfect for families — includes multiple beds, a cozy lounge and mountain view.
              </p>
              <p className="text-lg font-semibold text-pink-600">Rs. 18,500 / night</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Rooms;


