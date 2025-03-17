import React, { useState } from "react";
import Logo from '../../assets/img/Seno Care.png'
import Conatiner from "../Container"
import Button from "../Button";
import { Link, NavLink } from "react-router-dom"

export default function Header() {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItem = [
    { title: "Home", link: '/'},
    { title: "About", link: '/about'},
    { title: "Service", link: '/services'},
    { title: "Pages", link: '/pages'},
    { title: "Portfolio", link: '/portfolio'},
    { title: "Blog", link: '/blog'},
    { title: "Contact", link: '/contact'},
  ]

  // const navItem = [
  //   { title: "Home", link: '/'},
  //   { title: "About", link: '/'},
  //   { title: "Service", link: '/'},
  //   { title: "Pages", link: '/'},
  //   { title: "Portfolio", link: '/'},
  //   { title: "Blog", link: '/'},
  //   { title: "Contact", link: '/'},
  // ]

  return (
    <>

      <header className="h-18 shadow-md fixed bg-white text-black w-full top-0 left-0 right-0 z-10">

          <div className="flex items-center justify-between mt-2 transition-all duration-300 ease-in-out mr-2">

            <div className="lg:ml-15 ml-4">
              <img src={Logo}  width={60} alt="Seno Care Logo"/>
            </div>

            {/* For desktop  and laptop */}
            <div className='hidden md:block text-[1.2em]'>
                        
              <ul className='flex items-center justify-between md:gap-4 lg:gap-6 gap-0 font-semibold '>
                
                {navItem.map((nav) => (
                              
                  <li key={nav.title}>
                    <NavLink to={nav.link} className={({isActive}) => isActive ? 'text-black hover:text-red-400 transition-all duration-300 delay-150 ease-in-out' : 
                    'text-black hover:text-red-400 transition-all duration-300 delay-150 ease-in-out'} >
                      {nav.title}
                    </NavLink> 
                  </li>

                )
                )}
              
              </ul>
 
            </div>

            
            <div className=" flex items-center justify-between">
              
              {/* Search Button */}
              <Button className="hidden md:block">
              
                <svg xmlns="http://www.w3.org/2000/svg"  className="h-6 w-6"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round"  strokeLinejoin="round"  strokeWidth={2} 
                    d="M11 19a8 8 0 1 1 5.29-2.29l4.3 4.3a1 1 0 0 1-1.42 1.42l-4.3-4.3A8 8 0 0 1 11 19z" />
                </svg>

              </Button >
              
              {/* TAlk Button */}
              <Button type="button" className="bg-red-400 text-white text-[1em] font-semibold py-3 px-4 hidden  
                transition-all duration-300 hover:bg-gray-700 group md:block rounded-lg ">
               Let's Talk
               <i className="fa-solid fa-arrow-up rotate-45 ml-2 transition-transform duration-300 group-hover:rotate-90"></i>
              </Button>

              {/* Header for small device */}
              <div className="md:hidden">
              
               <Button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
               </Button>
              
              </div>

            </div>

            {/* mobile menu */}
            {isMobileMenuOpen && (
              // <div className="fixed " onClick={() => setIsMobileMenuOpen(false)}/>
              <div className={`fixed left-0 top-0 h-full w-70 bg-white shadow-md z-50 p-6 transform
                ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"} hover:shadow-md transition-transform 
                duration-300 ease-in-out`}>
              
                {/* Image Logo in Small Device */}
                 
                <img src={Logo} width={70} className="-mt-2" alt="Seno Care Logo"/>
                
                {/* Close Button */}
                
                <Button type="button" className={`absolute top-4 right-4 h-12 w-12 rounded-full bg-red-500 
                text-white`}
                  onClick={() => setIsMobileMenuOpen(false)}>
                  <i className="fa-solid fa-xmark text-[1.3rem]"></i>
                </Button>
                

                {/* Navigation Menu */}
                <ul className="mt-12 space-y-5">
                  
                  {navItem.map((nav) => (
                   
                   <li key={nav.title}>
                     
                      <NavLink to={nav.link} className={({ isActive }) => isActive ? "text-black font-bold" : "text-gray-700 hover:text-black"}
                        onClick={() => setIsMobileMenuOpen(false)}>
                        {nav.title}
                      </NavLink>
  
                    </li>
                 
                 ))}
              
                </ul>
  
              </div>
              
            )}
            
          </div>
        
        
      
      </header>
    </>
  );
}
