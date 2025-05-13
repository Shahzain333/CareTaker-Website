import React, { useState, useEffect } from 'react'
import { Container, Button, Card, Input } from '../index'
import heroImage from '../../assets/img/HeroImage.jpg'
import Logo from '../../assets/img/Seno Care.png'
import { Link, NavLink, Outlet } from 'react-router-dom'

function Pricing() {

  const pricingPlans = [
    {
      name: "Basic",
      price: "$359",
      features: [
        "Best Quality Care",
        "Unlimited Transportation",
        "Emergency Call System",
        "Meals Facilities",
      ],
      missingFeatures: ["Laundry Servicing", "24/7 Live Support"],
    },
    {
      name: "Standard",
      price: "$559",
      features: [
        "Best Quality Care",
        "Unlimited Transportation",
        "Emergency Call System",
        "Meals Facilities",
        "Laundry Servicing",
      ],
      missingFeatures: ["24/7 Live Support"],
    },
    {
      name: "Premium",
      price: "$959",
      features: [
        "Best Quality Care",
        "Unlimited Transportation",
        "Emergency Call System",
        "Meals Facilities",
        "Laundry Servicing",
        "24/7 Live Support",
      ],
      missingFeatures: [],
    },
  ];  

  const [counts, setCounts] = useState([
    { name: "Project Done", value: 0, max: 6560 },
    { name: "Happy Client", value: 0, max: 7320 },
    { name: "Our Volunteer", value: 0, max: 1500 },
    { name: "Win Awards", value: 0, max: 50 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts(prevCounts =>
        prevCounts.map(item => {
          if (item.value < item.max) {
            return { ...item, value: Math.min(item.value + 50, item.max) };
          }
          return item;
        })
      );
    }, 30); // faster = smaller number
  
    return () => clearInterval(interval);
  }, []);
  


  // const reviewCount = [
  //   {
  //     pName: "Project Done",
  //     counting: counter,
  //   },
  //   {
  //     pName: "Happy Client",
  //     counting: counter,
  //   },
  //   {
  //     pName: "Our Volunteer",
  //     counting: counter,
  //   },
  //   {
  //     pName: "Win Awards",
  //     counting: counter,
  //   },
  // ];

  return (
    <section className='lg:pb-35 md:pb-55 pb-15 py-10'>
       
       <div className='relative'>
                
            {/* Overlay to make text readable */}
            <div className="absolute inset-0 bg-black opacity-50"></div>
             
            {/* Background Image */}
            <img className="w-full h-[350vh] md:h-[260vh] lg:h-[150vh] object-cover" src={heroImage} alt="Hero Section" />
            
            {/* Text */}
            <div className="absolute lg:top-1/9 top-1/20 left-1/2 transform -translate-x-1/2 text-center w-full px-4 ">
            
              <div className="flex flex-col items-center justify-center gap-4">
            
                <div className="flex items-center justify-start gap-2.5 font-semibold 
                bg-red-400 rounded-3xl p-[4px] w-40">
            
                  <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full">
                    <i className="fa-solid fa-house text-[1rem] sm:text-[1.1rem]  text-center text-red-400"></i>
                  </div>
            
                  <p className="text-[1.2rem] text-white">Pricing Plan</p>
                
                </div>
            
                <h1 className="text-5xl lg:text-6xl text-center font-bold ">
                  Let's Check Our Pricing 
                </h1>

                <h2 className='text-5xl lg:text-6xl text-center font-bold text-white'>
                  Plan For You
                </h2>
            
              </div>

            </div>

            {/* Pricing Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center lg:mt-12 mt-4 md:gap-16 
            gap-10 p-6 md:p-9 absolute lg:top-[30%] md:top-[20%] top-[17%] w-full ">
              
              {pricingPlans.map((plan, index) => (
                
                <div key={index} className={`relative w-full bg-white p-8 sm:p-10 rounded-4xl shadow-lg
                ${plan.name === "Standard" ? 'border-4 border-red-400 ' : ''} transform 
                transition-transform duration-500 hover:-translate-y-5`}>
                  
                  <h3 className={`absolute top-0 right-8 -translate-y-1/2 bg-red-400 text-white px-4 py-1 
                  text-[1.3rem] font-bold tracking-widest rounded-r-[120px] rounded-t-[130px] `}>{plan.name}</h3>
                  
                  <p className="text-5xl font-bold mb-6">{plan.price}<span className="text-lg font-semibold">/Monthly</span></p>
                   
                  <Button className="bg-red-400 text-white py-3 w-full rounded-lg mb-8 text-[1.2rem] transition-all 
                  duration-300 group">
                    Purchase Now
                    <i className="fa-solid fa-arrow-up rotate-45 ml-2 transition-transform duration-300 group-hover:rotate-90"></i>
                  </Button>

                  <ul className='text-left space-y-4'>

                      {plan.features.map((feature, i) => (
                        <li key={i} className="text-gray-800 font-semibold flex items-center gap-3">

                          <div className="flex items-center justify-center w-4 h-4 bg-red-400 rounded-full">
                            <i className="fa-solid fa-check text-[0.5rem] text-center text-white"></i>
                          </div>

                          {feature}
                        </li>
                      ))}

                      {plan.missingFeatures.map((feature, i) => (
                        <li key={i} className="text-gray-800 font-semibold flex items-center gap-3">

                          <div className="flex items-center justify-center w-4 h-4 bg-gray-600 rounded-full">
                            <i className="fa-solid fa-xmark text-[0.5rem] text-center text-white"></i>
                          </div>

                          {feature}
                        </li>
                      ))}

                  </ul>

                </div>
                
              ))}
            
            </div>

            {/* Box TO Find User Absolute */}
            <div className="absolute bg-[#202d4d] text-white shadow-md p-2 md:p-6 rounded-2xl w-[90%] 
            lg:mx-15 md:mx-10 mx-5 -translate-y-10 md:-translate-y-12">

              <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-1 md:gap-2'>
                
                {counts.map((review,index) => (

                  <div key={index} className="flex items-center justify-center text-center gap-1 md:gap-3 border 
                  border-gray-600 p-1.5 md:p-3 rounded-2xl w-full">
                  
                    <div className="bg-white text-[#00c9c3] md:p-4 w-9 h-9 md:w-20 md:h-20 rounded-full 
                    text-2xl md:text-5xl">
                      <i className="fas fa-chair"></i>
                    </div>
  
                    <div className='flex flex-col items-start md:gap-2'>
  
                      <p className="text-[1.2rem] md:text-5xl font-bold text-[#00c9c3]">{review.value.toLocaleString()}</p>
      
                      <p className="text-[0.6rem] md:text-[1.1rem] font-bold">+ {review.name}</p>
  
                    </div>
                  
                  </div>
                ))}

              </div>

              {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>

                <div className="flex items-center justify-center text-center gap-3 border border-gray-600 
                p-3 rounded-2xl w-full">
                
                  <div className="bg-white text-[#00c9c3] p-4 w-20 h-20 rounded-full text-5xl">
                    <i className="fas fa-chair"></i>
                  </div>

                  <div className='flex flex-col items-start gap-2'>

                    <p className="text-5xl font-bold text-[#00c9c3]">6560</p>
    
                    <p className="text-[1.1rem] font-bold">+ Projects Done</p>

                  </div>
                
                </div>

                <div className="flex items-center justify-center text-center gap-3 border border-gray-600 
                p-3 rounded-2xl w-full">
                
                  <div className="bg-white text-[#00c9c3] p-4 w-20 h-20 rounded-full text-5xl">
                    <i className="fas fa-chair"></i>
                  </div>

                  <div className='flex flex-col items-start gap-2'>

                    <p className="text-5xl font-bold text-[#00c9c3]">6560</p>
    
                    <p className="text-[1.1rem] font-bold">+ Projects Done</p>

                  </div>
                
                </div>

                <div className="flex items-center justify-center text-center gap-3 border border-gray-600 
                p-3 rounded-2xl w-full">
                
                  <div className="bg-white text-[#00c9c3] p-4 w-20 h-20 rounded-full text-5xl">
                    <i className="fas fa-chair"></i>
                  </div>

                  <div className='flex flex-col items-start gap-2'>

                    <p className="text-5xl font-bold text-[#00c9c3]">6560</p>
    
                    <p className="text-[1.1rem] font-bold">+ Projects Done</p>

                  </div>
                
                </div>

                <div className="flex items-center justify-center text-center gap-3 border border-gray-600 
                p-3 rounded-2xl w-full">
                
                  <div className="bg-white text-[#00c9c3] p-4 w-20 h-20 rounded-full text-5xl">
                    <i className="fas fa-chair"></i>
                  </div>

                  <div className='flex flex-col items-start gap-2'>

                    <p className="text-5xl font-bold text-[#00c9c3]">6560</p>
    
                    <p className="text-[1.1rem] font-bold">+ Projects Done</p>

                  </div>
                
                </div>
              
              </div> */}

            </div>

        </div>
            
    </section>
  )
}

export default Pricing