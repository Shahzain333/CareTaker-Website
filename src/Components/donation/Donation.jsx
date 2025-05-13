import React, { useEffect, useState } from 'react'
import Image from '../../assets/img/healthCareImg.jpeg'
import { AnimatedProgressBar, Button } from '../../Components/index'
import { Link } from 'react-router-dom';

export default function Donation() {

  const [currentSlide, setCurrentSlide] = useState(0);
  const cardsPerPage = 3;

  const donationData = [
    {
      title: "Relatives Accommodation",
      description: "There are many variations of passages of Lorem Ipsum available passages of Lorem Ipsum available...",
      date: "30",
      month: "Dec",
      progress: 75,
      raised: "24,350",
      goal: "35,000",
      image: Image,
    },
    {
      title: "Relatives Accommodation",
      description: "There are many variations of passages of Lorem Ipsum available...",
      date: "2",
      month: "Dec",
      progress: 75,
      raised: "24,350",
      goal: "35,000",
      image: Image,
    },
    {
      title: "Relatives Accommodation",
      description: "There are many variations of passages of Lorem Ipsum available...",
      date: "4",
      month: "Dec",
      progress: 75,
      raised: "24,350",
      goal: "35,000",
      image: Image,
    },
    {
      title: "Help The Senior Care",
      description: "There are many variations of passages of Lorem Ipsum available...",
      date: "26",
      month: "Dec",
      progress: 85,
      raised: "24,350",
      goal: "35,000",
      image: Image,
    },
    {
      title: "Specialist Nursing Care",
      description: "There are many variations of passages of Lorem Ipsum available...",
      date: "25",
      month: "Dec",
      progress: 85,
      raised: "24,350",
      goal: "35,000",
      image: Image,
    },
    {
      title: "Specialist Nursing Care",
      description: "There are many variations of passages of Lorem Ipsum available...",
      date: "25",
      month: "Dec",
      progress: 85,
      raised: "24,350",
      goal: "35,000",
      image: Image,
    },
  ];

  const maxSlideIndex = donationData.length - cardsPerPage;

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentSlide((prev) => (prev === maxSlideIndex ? 0 : prev + 1));

    }, 3000);

    return () => clearInterval(interval);

  }, [maxSlideIndex]);

  return (

    <section className="py-12 bg-white mt-12">
      
      {/* Text */}
      <div className="text-center w-full px-4 ">
            
        <div className="flex flex-col items-center justify-center gap-2 md:gap-4">
                
          <div className="flex items-center justify-start gap-2.5 font-semibold 
          bg-red-400 rounded-3xl p-[4px] w-37">
                
            <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full">
              <i className="fa-solid fa-heart text-[1rem] sm:text-[1.1rem]  text-center text-red-400"></i>
            </div>
                
            <p className="text-[1.2rem] text-white">Donations</p>
                    
          </div>
    
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-center font-bold ">
            We Are Always Where Senior
          </h1>
    
          <h2 className='text-4xl md:text-5xl lg:text-6xl text-center font-bold text-pink-500'>
            People Need Help
          </h2>
             
        </div>
    
      </div>

      {/* Card */}

      <div className="overflow-hidden w-[90%] mx-auto relative mt-6">
        
        <div className="flex transition-transform duration-700 ease-in-out"
          style={{
            width: `${(donationData.length * 100) / cardsPerPage}%`,
            transform: `translateX(-${(100 / donationData.length) * currentSlide}%)`,
          }}>
          
          {donationData.map((item, i) => (
            
            <div key={i} className="w-1/3 p-4 box-border relative">
              
              <div className="bg-[#E8F7FA] rounded-2xl shadow-lg pt-24 pb-4 px-4 relative z-0 mt-25">

                {/* Content */}
                <h3 className="text-[1.5rem] font-bold text-gray-800 mb-2 mt-10">{item.title}</h3>
                   
                <p className="text-[1.1rem] text-gray-600 mb-4">{item.description}</p>

                {/* Progress badge */}
                <div className="flex items-center justify-end mx-4 mb-2">
                  
                  <span className="bg-cyan-500 text-white text-[1.1rem] font-semibold px-2 py-1 
                  rounded-t-[10px] rounded-r-[10px] rounded-l-[10px]">
                    {item.progress}%
                  </span>
                
                </div>

                {/* Progress bar */}
                <AnimatedProgressBar value={item.progress} duration={1000}/>

                {/* Raise & Goal */}
                <div className="flex justify-between">
                  
                  <span className="text-gray-600 text-[1rem] font-bold">
                    <span className="text-red-600">${item.raised}</span> Raised
                  </span>
                    
                  <span className="text-gray-600 text-[1rem] font-bold">
                    <span className="text-red-600">${item.goal}</span> Goal
                  </span>

                </div>

                {/* Donate Button */}
                <Link to="/">
                  <Button type='button' className='bg-red-400 text-white font-semibold py-3 px-3 md:px-6 
                  transition-all duration-300 hover:bg-gray-700 group rounded-lg text-center cursor-pointer mt-4
                  text-[1rem] opacity-85'>
                    Donate Now
                    <i className="fa-solid fa-arrow-up rotate-45 ml-2 transition-transform duration-300 
                    group-hover:rotate-90"></i>
                  </Button>
                </Link>


              </div>

              {/* Overlapping Image with Date Badge */}
              <div className="absolute -top-0 left-4 right-4 z-10 px-6">
                 
                <div className="relative">
                  
                  <div className='w-full h-60'>
                    
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover rounded-[1.5rem] 
                    shadow-md hover:scale-105"/>
                  
                  </div>

                  {/* Date Badge */}
                  <div className="absolute top-4 right-3 bg-cyan-500 text-white px-4 py-2 
                  text-center rounded-r-[120px] rounded-t-[130px] rounded-l-[10px]">
                    
                    <p className="text-[2rem] font-bold leading-none">{item.date}</p>
                    <p className="text-[1rem] font-semibold leading-none">{item.month}</p>

                  </div>
                
                </div>
                
              </div>
 
            </div>
          
          ))}
        
        </div>
      
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 gap-2">
        
        {Array.from({ length: maxSlideIndex  }).map((_, i) => (

          <span key={i} className={`w-4 h-1 rounded-full cursor-pointer ${ i === currentSlide ? 'bg-pink-500' : 
            'bg-gray-300'}`} onClick={() => setCurrentSlide(i)}></span>

        ))}
      
      </div>
    
    </section>
  );
}
