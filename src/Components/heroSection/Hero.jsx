import React from 'react'
import Container from '../Container'
import heroImage from "../../assets/img/HeroImage.jpg"
import { Link } from 'react-router-dom'
import Button from '../Button'
import Input from '../Input'

function Hero() {
  return (

  <section className='md:pb-35 pb-80 md:pt-20 pt-22 relative overflow-hidden'>

    <div className='relative'>

      {/* Overlay  */}
      <div className='absolute inset-0 bg-black opacity-50'></div>

      {/* Background Image */}
      <div className=''>

        <img src={heroImage} className="w-full h-auto sm:min-h-[100vh] min-h-[120vh] bg-cover 
        bg-center bg-no-repeat" 
         alt="SenoCare HeroSection Image"/>

      </div>

      {/* Text */}
      <div className='absolute inset-0 top-25 sm:top-28 sm:left-8 text-white flex flex-col sm:gap-4 sm:px-2 
      sm:ml-[5rem] ml-[2rem]'>
        
        <div className='flex items-center justify-start gap-2 sm:text-[1.3rem] text-[1.2rem] font-bold bg-red-400 
        rounded-3xl p-[3px] sm:w-72 w-67 '>
          
          <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full">
            <i className="fa-solid fa-house text-center text-red-400"></i>
          </div>
          
          <p className='tracking-widest'>BEST ELDERLY CARE</p>
        
        </div>

        <div className='mt-2 sm:m-0 mx-1'>

        <h1 className="sm:text-6xl text-5xl font-bold font-sans tracking-wider">Live In Care & 
          <span className="ml-2" >Your</span> <br />
          <span className="text-gray-300 animate-pulse">Family</span> Will Love
        </h1>

        <p className='mt-8 text-[1.2rem] font-light md:w-150 sm:w-100 w-75'>There are many variations of passages orem psum availabale but the majority have suffered alteration in some form by injected humor.</p>

        <div className='flex items-center justify-start gap-4 text-[1.2rem] font-bold mt-8'>
          
          <Button className='bg-red-400 text-white text-[1em] font-semibold py-3 px-4 transition-all 
          duration-300 hover:bg-gray-700 group rounded-lg '>
            Add More
            <i className="fa-solid fa-arrow-up rotate-45 ml-2 transition-transform duration-300 group-hover:rotate-90"></i>
          </Button>
          
          <Button className='bg-blue-400 text-white text-[1em] font-semibold py-3 px-4 transition-all 
          duration-300 hover:bg-gray-700 group rounded-lg '>
            Learn More
            <i className="fa-solid fa-arrow-up rotate-45 ml-2 transition-transform duration-300 group-hover:rotate-90"></i>
          </Button>
        
        </div>

        </div>

      </div>

    </div>

    <div className="absolute top-175 left-5 right-5 md:top-170 md:left-30 md:right-90 
    max-w-[90%] md:max-w-[60%] w-full p-4 rounded-4xl bg-white shadow-md min-h-[150px]">
        
    <h1 className="text-[1.3rem] sm:text-2xl font-bold mb-4 mx-2 sm:mx-4">Find Us Near You</h1>
    
    <form className="mx-2 sm:mx-4">

      <div className="flex flex-col sm:flex-row flex-wrap gap-4">

        <div className="flex items-center gap-2 px-2 border border-gray-300 rounded-lg w-full sm:w-auto">

          <i className="fa-solid fa-location-dot text-red-500"></i>

          <select className="text-gray-500 outline-none w-full sm:w-40 p-3">
            <option>Choose City</option>
            <option>New York</option>
            <option>Los Angeles</option>
            <option>Chicago</option>
          </select>

        </div>

        <div className="flex items-center border border-gray-300 rounded-lg px-2 w-full sm:w-auto">
          
          <i className="fa-solid fa-location-dot text-red-500"></i>
          
          <Input type="text" className="border-none text-gray-500 w-full sm:w-40" placeholder="Enter Area" />
        
        </div>

        <div className="flex items-center border border-gray-300 rounded-lg px-2 w-full sm:w-auto">
          <i className="fa-solid fa-location-dot text-red-500"></i>
          <Input type="text" className="border-none text-gray-500 w-full sm:w-40" placeholder="Enter Postal Code" />
        </div>

        <Button className="bg-red-400 text-white text-[1.1em] font-semibold py-3 px-5 transition-all duration-300 
          hover:bg-gray-700 rounded-lg w-full sm:w-auto">
          Find Now
        </Button>

      </div>
    </form>

</div>



  </section>

  )

}

export default Hero