import React from "react";
import img1 from "../assets/Room1.jpg";
import img2 from "../assets/Room2.jpg";
import img3 from "../assets/Room3.jpg";
import img4 from "../assets/Pool.jpg";
import img5 from "../assets/Spa.jpg";
import img6 from "../assets/Resturant1.jpg";
import img7 from "../assets/Gym.jpg";
import img8 from "../assets/Lobby.jpg";

const Gallery = () => {
  return (
    <div className="bg-orange-50 py-16 px-8">
      <h1 className="text-4xl font-bold text-center mb-12 text-amber-900">
        Gallery
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        
        
        <div className="overflow-hidden rounded-xl shadow-lg bg-white">
          <img src={img1} alt="Room 1" className="h-64 w-full object-cover hover:scale-105 transition-transform duration-300" />
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold text-amber-800">Deluxe Room</h3>
          </div>
        </div>

        
        <div className="overflow-hidden rounded-xl shadow-lg bg-white">
          <img src={img2} alt="Room 2" className="h-64 w-full object-cover hover:scale-105 transition-transform duration-300" />
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold text-amber-800">Luxury Suite</h3>
          </div>
        </div>

        
        <div className="overflow-hidden rounded-xl shadow-lg bg-white">
          <img src={img3} alt="Room 3" className="h-64 w-full object-cover hover:scale-105 transition-transform duration-300" />
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold text-amber-800">Family Room</h3>
          </div>
        </div>

        
        <div className="overflow-hidden rounded-xl shadow-lg bg-white">
          <img src={img4} alt="Pool" className="h-64 w-full object-cover hover:scale-105 transition-transform duration-300" />
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold text-amber-800">Swimming Pool</h3>
          </div>
        </div>

        
        <div className="overflow-hidden rounded-xl shadow-lg bg-white">
          <img src={img5} alt="Spa" className="h-64 w-full object-cover hover:scale-105 transition-transform duration-300" />
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold text-amber-800">Relaxing Spa</h3>
          </div>
        </div>

        
        <div className="overflow-hidden rounded-xl shadow-lg bg-white">
          <img src={img6} alt="Restaurant" className="h-64 w-full object-cover hover:scale-105 transition-transform duration-300" />
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold text-amber-800">Restaurant</h3>
          </div>
        </div>

       
        <div className="overflow-hidden rounded-xl shadow-lg bg-white">
          <img src={img7} alt="Gym" className="h-64 w-full object-cover hover:scale-105 transition-transform duration-300" />
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold text-amber-800">Fitness Gym</h3>
          </div>
        </div>

        
        <div className="overflow-hidden rounded-xl shadow-lg bg-white">
          <img src={img8} alt="Lobby" className="h-64 w-full object-cover hover:scale-105 transition-transform duration-300" />
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold text-amber-800">Luxury Lobby</h3>
          </div>
        </div>

      </div>
    </div>

    
  );
};

export default Gallery;

