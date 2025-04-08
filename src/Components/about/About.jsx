import React from 'react';
import { Button, Container } from '../index';
import FristImg from "../../assets/img/About1.jpg";
import SecondImg from "../../assets/img/About2.png";

function About() {
  return (
    <section className='pt-22 pb-16'>
      
      <Container>

       <div className='grid grid-cols-1 lg:grid-cols-2'>
       
        {/* Images */}
        <div className='flex items-center justify-center gap-4 md:gap-6'>

          {/* Left Column */}
          <div className='flex flex-col gap-2 items-center'>
      
            {/* First Image */}
            <img src={FristImg} className="rounded-4xl w-full max-w-[160px] sm:max-w-[220px] md:max-w-[260px]" alt='About First Image' />

            {/* Red Circle with Dashed Border */}
            <div className='relative flex items-center justify-center'>
      
              <div className='bg-red-500 rounded-full text-white text-center text-2xl sm:text-3xl md:text-5xl font-bold p-6 
                sm:w-[200px] sm:h-[100px] md:w-[240px] md:h-[120px] w-[160px] h-[100px] flex flex-col items-center 
                justify-center'>30+<span className='text-sm md:text-lg'>Years of Experience</span>
              </div>
      
              <div className='absolute border-4 border-dashed border-white sm:w-[180px] sm:h-[80px] md:w-[220px] 
              md:h-[100px] w-[150px] h-[90px] rounded-full'></div>
      
            </div>
      
          </div>

          {/* Right Column */}
          <div className='flex flex-col gap-2 items-center '>
      
            {/* Circular Image with Dashed Border */}
            <div className='relative flex items-center justify-center'>
             
              <img src={SecondImg} className='rounded-full sm:w-[160px] sm:h-[160px] md:w-[220px] 
              md:h-[220px] w-[130px] h-[130px]' alt='About Second Image' />
             
              <div className='absolute border-4 border-white sm:w-[140px] sm:h-[140px] 
               md:w-[200px] md:h-[200px] w-[120px] h-[120px] rounded-full'></div>
            
            </div>

            {/* Second Image */}
            <img src={FristImg} className='rounded-4xl w-full sm:max-w-[170px] md:max-w-[280px] md:h-[300px]
            max-w-[130px]' alt='About First Image' />
      
          </div>

        </div>

        {/* About me */}
        <div className='pt-5 px-2'>
          
          <div className='flex items-center justify-start gap-2 text-[1.2rem] font-bold 
           bg-red-400 rounded-3xl p-[3px] w-38'>
          
            <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full">
              <i className="fa-solid fa-house text-center text-red-400"></i>
            </div>
            <p className='tracking-widest text-white'>About Us</p>
        
          </div>

          <h1 className='font-bold text-5xl pt-6'>We Are the Best And Expert 
            <span className="text-gray-300"> For Senior</span> Care
          </h1>

          <p className='pt-6 text-lg'>There are many variations of passages of Lorem Ipsum available, but the majority have 
            suffered alteration in some form, by injected humour randomised words which don't look even.Many desktop 
            publishing packages and web page editors now use as their default model text.
          </p>
          
          <div className='flex md:flex-row flex-col gap-4 mt-6'>

            <div className='border border-gray-200 rounded-2xl flex items-center md:justify-center justify-items-start p-3'>

              <div className=''>
                <div className='bg-red-500 rounded-full h-16 w-16'></div>
              </div>

              <div className='flex flex-wrap flex-col mx-4'>
                <h2 className='text-[1.1rem] font-bold'>Our Experts Nurse</h2>
                <p className='font-light'>Take a look at our up of the round shows</p>
              </div>

            </div>

            <div className='relative border border-gray-200 rounded-2xl flex items-center md:justify-center justify-items-start p-3'>

              <div className=''>
                <div className='bg-red-500 rounded-full h-16 w-16'></div>
                <div className=''></div>
              </div>

              <div className='flex flex-wrap flex-col mx-4'>
                <h2 className='text-[1.1rem] font-bold'>24/7 Live Support</h2>
                <p className='font-light'>Take a look at our up of the round shows</p>
              </div>

            </div>

          </div>

          <Button type="button" className="bg-red-400 text-white text-[1.4em] font-semibold py-2 px-3 
            transition-all duration-300 hover:bg-gray-700 group rounded-lg mt-6 ">
            Discover More 
            <i className="fa-solid fa-arrow-up rotate-45 ml-2 transition-transform duration-300 group-hover:rotate-90"></i>
          </Button>
        
        </div>

       </div>
      
      </Container>

    </section>
  );
}

export default About;
