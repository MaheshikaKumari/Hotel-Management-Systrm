import React from 'react'
import hotelImage from '../assets/hotel1.jpg' 
import { Link } from "react-router-dom"; 
import About from './About';
import Rooms from './Rooms';
import Footer from './Footer';


const Home = () => {
  return (
    <>

       <section className="bg-orange-50 min-h-screen ">
        <div className=' pt-10' >
          <h1 className="text-center text-6xl font-bold text-gray-800">
            The Royal Orchid
          </h1>
          <h4 className= 'text-center text-3xl font-semibold mt-10 text-amber-900'>Luxury Business Hotel</h4>
        </div>
        <div className='justify-center'>
        <img src={hotelImage} alt="Hotel"  className="absolute top-65 left-1/2 transform -translate-x-1/2 h-[500px] w-[1300px] object-cover"/>
        <Link to="/Contact" className="absolute top-[85%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
               bg-amber-900 ring-1 hover:bg-amber-700 text-white font-bold px-8 py-4  
               shadow-xl/30 text-xl transition duration-300 " >Book Your Stay</Link>
        
        
        </div>
       
      </section>
      <About/>
      <Rooms/>
      <Footer/>
      </>
  )
}

export default Home;
