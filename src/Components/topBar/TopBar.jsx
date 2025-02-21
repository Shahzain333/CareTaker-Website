import React, { useState } from "react";
import Button from "../Button";
import { Link, NavLink } from "react-router-dom";


export default function TopBar() {
  
  const [isOpen, setIsOpen] = useState(false);

  // Move options above useState
  const options = [
    { label: "English", value: "en" },
    { label: "German", value: "gr" },
    { label: "Russian", value: "rus" },
    { label: "Spanish", value: "spain" },
  ];

  const [selectedOption, setSelectedOption] = useState(options[0]); // Default to first option

  const topBarOne = [
    { title: "info@gmail.com", style: "fa-regular fa-envelope" },
    { title: "+92 333-3422776", style: "fa-solid fa-phone-volume" },
    { title: "Sun - Fri (08AM - 10PM)", style: "fa-regular fa-clock" },
  ];

  function handleSelect(option) {
    setSelectedOption(option);
    setIsOpen(false);
  }

  return (
    <>
      <div className="bg-gray-900 fixed w-full text-white flex flex-col m-0 p-0">
  
        {/* First TopBar */}
        <div className="flex justify-between items-center p-3">
          
          <div className="">evantomarket</div>

          <div className="">
            <Button type="button" className="bg-green-600 shadow-md border-none cursor-pointer hover:opacity-95 
            transition-all duration-300">
              Buy Now
            </Button>
          </div>

        </div>

        {/* Second TopBar */}
        <div className="h-12 text-[1rem] font-semibold bg-[linear-gradient(135deg,_#000080_60%,_#87CEEB_40%)] p-2">
          
          <div className="mx-auto flex justify-between items-center">
          
            <div className="flex items-center space-x-6 ml-18">
          
              {topBarOne.map((top, index) => (
                
                <span key={index} className="flex items-center justify-between gap-2 hover:text-red-500 transition-all 
                duration-300 ease-in-out cursor-pointer">
                  <i className={top.style} style={{ color: "#f00511" }}></i>
                  {top.title}
                </span>

              ))}

            </div>

           
              
              <div className="flex items-center justify-between gap-2 transition-all duration-300 ease-in-out 
              cursor-pointer mr-20">
              
                <div className="">
              
                  <Button type="button" className="flex items-center justify-between gap-2 hover:text-gray-800 cursor-pointer">
                    <i className="fa-solid fa-right-to-bracket" style={{ color: "white" }}></i>
                    Login
                  </Button>
              
                </div>

                <div className="flex items-center justify-between gap-2">

                <i class="fa-solid fa-globe"></i>

                {/* Custom Select Dropdown */}
                <div className="relative">
                  
                  <div className="rounded cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                    {selectedOption?.label || "Select an option"}
                  </div>

                  {isOpen && (
                    
                    <ul className="absolute w-22 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                      
                      {options.map((option) => (
                        
                        <li key={option.value} className="px-4 py-2 cursor-pointer text-black hover:bg-red-500
                        rounded-lg" onClick={() => handleSelect(option)}>
                          {option.label}
                        </li>
                       
                       ))}

                    </ul>

                  )}

                </div>

                </div>

                <div className="flex items-center justify-between gap-3">
                  
                  <h6 className="ml-4">Follow Us:</h6>
                  
                  <div className="flex items-center justify-between gap-4">
                    <i className="fa-brands fa-facebook hover:text-black"></i>
                    <i className="fa-brands fa-linkedin hover:text-black"></i>
                    <i className="fa-brands fa-twitter hover:text-black"></i>
                    <i className="fa-brands fa-instagram hover:text-black"></i>
                  </div>
                
                </div>

              </div>
           
            </div>
          
          </div>

        </div>
      
     
    </>
  );
}
