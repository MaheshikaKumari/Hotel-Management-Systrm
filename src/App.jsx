import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar';
import Services from './Components/Services';
import Gallery from './Components/Gallery';
import Contact from './Components/Contact';
import About from './Components/About';
import Home from './Components/Home';
import { Routes, Route } from "react-router-dom";
import Footer from './Components/Footer';
import Auth from './Components/Auth';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Navbar/>
    

      <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path='/About' element={<About/>}/>
          <Route path='/Services' element={<Services/>}/>
         <Route path='/Gallery' element={<Gallery/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Auth' element={<Auth/>}/>
      </Routes>
      

      
      
    </>
  )
}

export default App
