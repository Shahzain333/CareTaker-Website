import React from 'react';
import { Button, Container } from '../index';
import FristImg from "../../assets/img/About1.jpg";
import SecondImg from "../../assets/img/About2.png";
import { Card } from '../index';
import Logo from "../../assets/img/Seno Care.png"

export default function ChooseUs(props) {

    const cardItem = [
            {
              id: 1,
              name: 'Affordable Cost',    
              description: 'There are many variations words passage available majority.',
              image: Logo,
          },
          {
              id: 2,
              name: 'Our Experience Team',
              description: 'There are many variations words passage available majority.',
              image: Logo,
          },
          {
            id: 3,
            name: 'Quality Services',
            price: 1500,
            description: 'There are many variations words passage available majority.',
            image: Logo,
        },
        {
          id: 4,
          name: 'Certified Company',
          description: 'There are many variations words passage available majority.',
          image: Logo,
        },
    ]

  return (
    <section className='pt-22 pb-16 md:mx-20 mx-3'>
      
      <Container>
        
        <div className=''>
            
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-30 gap-5'>

            <div className=''>
          
              <div className='flex items-center justify-start gap-2 text-[1.2rem] font-bold 
              bg-red-400 rounded-3xl p-[3px] w-55'>
          
                <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full">
                   <i className="fa-solid fa-house text-center text-red-400"></i>
                </div>
                <p className='tracking-widest text-white'>Why Choose Us</p>
        
              </div>

               <h1 className='font-bold text-5xl pt-6'>Trusted And Experience <br/> 
                 <span className="text-gray-300">Senior Care</span> Provider 
               </h1>
        
            </div>

            <div className='md:pt-2'>

              <p className='text-[1.1rem]'>
                It is a long established fact that a reader will be distracted by the readable content of a page 
                when will uncover many web sites still in their infancy looking at its layout.
              </p>

              <Button type="button" className="bg-red-400 text-white text-[1.2em] font-semibold py-3 px-3 
                transition-all duration-300 hover:bg-gray-700 group rounded-lg mt-6">
                Contact Us 
                <i className="fa-solid fa-arrow-up rotate-45 ml-2 transition-transform duration-300 group-hover:rotate-90"></i>
              </Button>

            </div>

          </div>

          <div className='pt-8 pb-5'>

            <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-30 gap-5'>
              
              {/* Card */}
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-8`}>

                {cardItem.map((item) => (

                  <div key={item.id} className={`flex gap-4 flex-col rounded-2xl shadow-md overflow-hidden 
                    transform transition-transform duration-300 hover:scale-102 `}>
    
                    {/* Image portion */}
    
                    <div className="flex items-center justify-between p-4 w-full">

                      {/* Left Side: Image */}
                      <img className="w-14 object-cover" src={item.image} alt={item.name} />

                      {/* Right Side: Number & Border */}
                      <div className="flex items-center gap-2 absolute top-2 right-3">
                        <div className="w-8 border-b-4 border-b-red-500 rounded-full"></div>
                        <h1 className="text-4xl font-bold text-red-500">0{item.id}</h1>
                      </div>

                    </div>

                    {/* Description Portion */}
                    <div className='px-4 pb-4 flex flex-col gap-3'>

                      <h3 className='font-medium text-[1.3rem]'>{ item.name }</h3>

                      <p className='text-gray-600 text-sm'>{ item.description }</p>

                    </div>

                  </div>

                ))}

              </div>
              
              {/* Image */}
              <div className=''>
                <img src={FristImg} className='lg:w-[500px] w-full h-[450px] rounded-4xl' />
              </div>
            
            </div>

          </div>


       </div>
      
      </Container>

    </section>
  );
}


2