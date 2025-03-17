import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { Button } from '../index'
import serviceImg from '../../assets/img/HeroImage.jpg'
import Logo from "../../assets/img/Seno Care.png"

function Service() {
  const cardItem = [
    { 
      id: 1, 
      name: 'Dedicated Team', 
      description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis excepturi words of voluptatum deleniti atque.', 
      image: Logo, 
      link: '/allService'
    },
    { 
      id: 2, 
      name: 'Trusted Institute', 
      description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis excepturi words of voluptatum deleniti atque.', 
      image: Logo, 
      link: '/allService'
    },
    { 
      id: 3, 
      name: 'Affordable Price', 
      description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis excepturi words of voluptatum deleniti atque.', 
      image: Logo, 
      link: '/allService' 
    },
    { 
      id: 4, 
      name: 'Emergency Support', 
      description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis excepturi words of voluptatum deleniti atque.', 
      image: Logo, 
      link: '/allService' 
    },
    { 
      id: 5, 
      name: '24/7 Assistance', 
      description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis excepturi words of voluptatum deleniti atque.', 
      image: Logo, 
      link: '/allService' 
    },
    { 
      id: 6, 
      name: 'Expert Doctors', 
      description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis excepturi words of voluptatum deleniti atque.', 
      image: Logo, 
      link: '/allService' 
    },
    { 
      id: 7, 
      name: 'Dedicated Team', 
      description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis excepturi words of voluptatum deleniti atque.', 
      image: Logo, 
      link: '/allService' 
    },
  ];

  return (
    <section className="pb-10 pt-18">
      
      <div className="relative">

        {/* Image Section */}
        <div className="text-white overflow-hidden relative">
         
          <div className="absolute inset-0 bg-black opacity-50"></div>
         
          <img className="w-full h-[60vh] lg:h-[88vh] object-cover" src={serviceImg} alt="Hero Section" />

          {/* Text */}
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center w-full px-4">
         
            <div className="flex flex-col items-center justify-center gap-6">

              <div className="flex items-center justify-start gap-2 font-semibold 
                bg-red-400 rounded-3xl p-[4px] w-45 opacity-60">

                <div className="flex items-center justify-center w-7 h-7 bg-white rounded-full">
                  <i className="fa-solid fa-house text-[1rem] sm:text-[1.1rem]  text-center text-red-400"></i>
                </div>

                <p className="tracking-widest text-[1.2rem] ">Our Services</p>

              </div>

              <h1 className="text-3xl sm:text-5xl md:text-5xl text-center font-bold max-w-3xl">
                We Believe Everyone Deserves Our Quality Care
              </h1>

            </div>
          </div>

        </div>

        {/* Card Section */}
        <div className="relative bg-white rounded-3xl p-6 shadow-md mx-5 lg:mx-25 -mt-60 ">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">

            {/* Show only 6 cards */}
            {cardItem.slice(0, 6).map((item) => (
              
              <div key={item.id} className="flex items-start gap-4 overflow-hidden pb-6">
                
                {/* Left Section: Icon & Number */}
                <div className="flex flex-col items-center sm:gap-8 gap-5 mx-2">
                  
                  <div className="flex items-center justify-center bg-red-400  rounded-r-[120px] rounded-t-[130px] 
                     rounded-l-4xl p-4 h-20 w-20">
                    <i className="fa-solid fa-house text-5xl text-white"></i>
                  </div>
                  
                  <h1 className="text-6xl sm:text-7xl font-light text-gray-300">0{item.id}</h1>
                
                </div>

                {/* Right Section: Description */}
                <div className="flex flex-col gap-3">
                  
                  <h3 className="font-bold text-[1.2rem] sm:text-[1.6rem]">{item.name}</h3>
                  
                  <p className="text-gray-600 text-sm">{item.description}</p>
                  
                  <NavLink to={item.link}>
                    <Button className="bg-red-400 text-white font-semibold py-0 px-4 transition-all 
                    duration-300 hover:bg-gray-700 rounded-lg text-center group">
                      Details
                      <i className="fa-solid fa-arrow-up rotate-45 ml-2 transition-transform duration-300 
                      group-hover:rotate-90"></i>
                    </Button>
                  </NavLink>

                </div>

                <Outlet/>
              
              </div>
            ))}

          </div>
        </div>

        {/* Neste Routing */}
        <Outlet />

      </div>
    </section>
  );
}

export default Service;
