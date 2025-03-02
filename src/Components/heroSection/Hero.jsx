
import React from 'react'
import heroImage from '../../assets/img/HeroImage.jpg'
import { Container, Button, Input } from '../index'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function HeroSection(props) {

    return (
        
      <section className='lg:pb-40 md:pb-75 pb-85 py-15 '>
                
        <div className='relative'>
                    
            {/* Overlay to make text readable */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Background Image  */}
            <div className=''>
              <img className='w-full object-cover md:h-[50vh] lg:h-[55vh] xl:h-auto h-[42vh] ' src={heroImage} 
                alt="Hero Section Image Home" />
            </div>

            {/* Text */}
            <div className='absolute top-15 md:top-28 left-8 md:left-8 text-white flex flex-col gap-2 md:gap-6
              px-2 md:ml-20'>

              <div className='flex items-center justify-start gap-2 sm:text-[1.3rem] text-[1.2rem] font-bold 
                bg-red-400 rounded-3xl p-[3px] sm:w-72 w-67 '>
          
                <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full">
                  <i className="fa-solid fa-house text-center text-red-400"></i>
                </div>
          
                <p className='tracking-widest'>BEST ELDERLY CARE</p>
        
              </div>

              <h1 className='font-bold text-5xl md:text-6xl xl:text-7xl'>Live In Care & 
                <span className="ml-2 text-gray-300" >Your</span> <br />
                <span className="text-gray-300">Family</span> Will Love
              </h1>
                        
              <p className='text-sm md:text-md lg:w-150'>There are many variations of passages orem psum availabale 
              but the majority have suffered alteration in some form by injected humor.</p>
                        
              <div className='flex items-center gap-4'>
                          
                <Link to="/">
                  <Button type='button' className='bg-red-400 text-white  font-semibold md:py-3 md:px-4 
                    transition-all duration-300 hover:bg-gray-700 group rounded-lg text-sm md:max-w-36 
                    text-center cursor-pointer'>
                      Add more
                      <i className="fa-solid fa-arrow-up rotate-45 ml-2 transition-transform duration-300 
                        group-hover:rotate-90"></i>
                  </Button>
                </Link>

                <Link to="/">
                  <Button type='button' className='bg-blue-400 text-white  font-semibold md:py-3 md:px-4 
                    transition-all duration-300 hover:bg-gray-700 group rounded-lg text-sm md:max-w-36 
                    text-center cursor-pointer'>
                      Learn more
                      <i className="fa-solid fa-arrow-up rotate-45 ml-2 transition-transform duration-300 
                        group-hover:rotate-90"></i>
                  </Button>
                </Link>

              </div>
                    
            </div>

            {/* Box TO Find User Absolute */}

            <div className="absolute left-1/2 transform lg:-translate-x-2/3 -translate-x-1/2 bottom-[-18.5rem] 
              md:bottom-[-19.5rem] lg:bottom-[-7rem] bg-white shadow-md p-4 md:p-6 rounded-2xl w-[90%] md:w-[85%] 
              lg:w-[60%] max-w-4xl flex-wrap flex-col">
        
              <h1 className="text-[1.3rem] sm:text-2xl font-bold mb-4 mx-2 sm:mx-4">Find Us Near You</h1>
    
              <form className="mx-2 sm:mx-4">

                <div className="flex flex-col lg:flex-row flex-wrap gap-4">

                  <div className="flex items-center gap-2 px-2 border border-gray-300 rounded-lg w-full sm:w-auto">

                    <i className="fa-solid fa-location-dot text-red-500"></i>

                    <select className="text-gray-500 outline-none w-full p-3">
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

                  <Button className="bg-red-400 text-white text-[1.1em] font-semibold py-3 px-5 transition-all 
                   duration-300 hover:bg-gray-700 rounded-lg w-full sm:w-auto">
                   Find Now
                  </Button>

                </div>

              </form>

            </div>

        </div>
        
      </section>
        
    )
}
