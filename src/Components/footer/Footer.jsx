import React from 'react'
import Container from '../Container'
import Logo from "../../assets/img/Seno Care.png"
import Button from '../Button'
import Input from '../Input'
import { Link, NavLink } from 'react-router-dom'

function Footer() {
  
  const footerItem1 = [
    { title: "About Us", link: "/" },
    { title: "Update News", link: "/" },
    { title: "Testimonials", link: "/" },
    { title: "Contact Us", link: "/" },
    { title: "Terms Of Service", link: "/" },
    { title: "Privacy policy", link: "/" },
  ]

  const footerItem2 = [
    { title: "Assisted Living", link: "/" },
    { title: "Nursing Care", link: "/" },
    { title: "Medical & Health", link: "/" },
    { title: "Personal Care", link: "/" },
    { title: "Physical Assistance", link: "/" },
    { title: "Residential Care", link: "/" },
  ]

  const info = [
    { icon: "fa-solid fa-location-dot", head: "Our Address ", address:"25/AB Milford Road, New York, USA", link:"/" },
    { icon: "fa-solid fa-phone", head: "Call Us ", address:"+92 3333422776", link:"/" },
    { icon: "fa-solid fa-envelope", head: "Mail Us",address:"info@example.com", link:"/" }
  ]

  const social = [
    { style: "fa-brands fa-facebook-f", link: "" },
    { style: "fa-brands fa-linkedin-in", link: "" },
    { style: "fa-brands fa-twitter", link: "" },
    { style: "fa-brands fa-instagram", link: "" },
  ]

  return (

    <footer className='bg-gray-700 text-white pt-10 pb-10'>

      <Container>
        
      <div className=''> 

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 py-6'>
        
        {/* First Portion Input */}
        <div className='space-y-4 md:p-0 md:mr-20 m-0'>

          <img src={Logo} width={100} alt='footer logo'/>

          <p className='font-medium'>
            We are many variations of passages available but the majority have suffered alteration some form by 
            injected humour words believable.
          </p>
 
          <h3 className='font-bold text-2xl mt-6'>Subscribe Our Newsletter</h3>

          <div className="flex flex-wrap md:flex-nowrap items-center mt-8 gap-2 md:w-full">

          {/* Input with Red Border on Focus */}
           <div className="flex items-center rounded-lg px-2 flex-1 min-w-[180px] md:w-64 border-b text-white border-gray-300 
         focus-within:border-red-500">

           <i className="fa-regular fa-envelope text-red-500"></i>
    
           <Input 
            type="text" 
            className="border-none w-full text-sm p-2 outline-none 
            focus:ring-0 focus:border-b-2 focus:border-red-500 bg-transparent" 
            placeholder="Your Email"
           />
          </div>

          {/* Subscribe Button with Adjusted Size */}
          <Button className="bg-red-500 rounded-3xl font-bold px-4 py-2 text-sm 
         hover:bg-white hover:text-red-500 hover:animate-pulse w-full md:w-auto 
           flex justify-center md:justify-start group">
            Subscribe
            <i className="fa-solid fa-arrow-up rotate-45 ml-2 transition-transform duration-300 group-hover:rotate-90"></i>
          </Button>

          </div>

        </div>

        {/* Company Portion */}
        <div className='grid grid-cols-2 md:grid-cols-3 md:pt-4'>
        {/* 1st portion */}
        <div className='space-y-2 p-2 md:p-0'>
         
         <h3 className='font-medium text-2xl'>Company</h3>
         
         <div className='border-2 border-red-500 rounded-full md:w-1/8 w-1/12 h-[3px] ml-1'></div>
         
         <div className='mt-6'>
            
            <ul className='flex flex-col items-start justify-start gap-4 font-semibold cursor-pointer'>
                
              {footerItem1.map((foot) => (
                              
                <li key={foot.title}>
                  
                  <NavLink to={foot.link} className={({ isActive }) => isActive ? `transform transition-transform 
                    duration-300 translate-x-12 text-white hover:text-red-400`
                    : `transform transition-transform 
                    duration-300 translate-x-12 text-white hover:text-red-400`}>
                    {foot.title}
                  </NavLink> 

                </li>
              )
              )}
              
            </ul>
         
         </div> 

        </div>
        {/* 2nd portion */}
        <div className='space-y-2 p-2 md:p-0'>
         
         <h3 className='font-medium text-2xl'>Services</h3>
         
         <div className='border-2 border-red-500 rounded-full md:w-1/8 w-1/12 h-[3px] ml-1'></div>
         
         <div className='mt-6'>
            
            <ul className='flex flex-col items-start justify-start gap-4 font-semibold cursor-pointer'>
                
              {footerItem2.map((foot) => (
                              
                <li key={foot.title}>
                  
                  <NavLink to={foot.link} className={({ isActive }) => isActive ? `text-white hover:text-red-400 
                    transform transition-transform duration-300 hover:translate-x-12 `: 
                  `text-white hover:text-red-400 
                    transform transition-transform duration-300 hover:translate-x-12`} >
                    {foot.title}
                  </NavLink> 

                </li>
              )
              )}
              
            </ul>
         
         </div> 

        </div>
        {/* 3rd portion */}
        <div className='space-y-2 p-2 md:p-0 md:mt-0 mt-8'>
         
         <h3 className='font-medium text-2xl'>Get In Touch</h3>
         
         <div className='border-2 border-red-500 rounded-full md:w-1/8 w-1/12 h-[3px] ml-1'></div>
         
         <div className='mt-6'>
            
            <ul className='flex flex-col items-start justify-start gap-4 font-semibold cursor-pointer'>
                
              {info.map((info) => (
                              
                              
                <li key={info.head}>

                  <div className="flex items-start justify-start gap-2">

                    <div className="bg-red-500 rounded-full w-10 h-10 flex items-center justify-center text-white">
                      <i className={info.icon}></i>
                    </div>

                    <div className="font-medium">{info.head}</div>

                  </div>

                  <div className='ml-12 -mt-2'>

                  <NavLink to={info.link} className={({ isActive }) => isActive ? `text-white`: `text-white`} >
                    {info.address} 
                  </NavLink> 

                  </div>

                </li>
              )
              )}
              
            </ul>
         
         </div> 

        </div>

        </div>

      </div>

      <div className='pt-10'>
        
        <div className='border-b border-b-gray-500 shadow-md m-8'></div>

        <div className='flex md:items-center items-start md:justify-between justify-start md:gap-0 gap-2 px-8 md:flex-row flex-col'>

          <p className='font-medium text-[1rem]'>&copy; Copyright 2025 <span className='text-red-500'>SenoCare</span> All Rights Reserved.</p>
          
          <div>

            <div className="flex items-center justify-between gap-4">

              {social.map((social) => (
                <Link key={social.style} to={social.link || "#"} className='bg-white text-red-400 h-10 w-10 rounded-full flex items-center justify-center
                hover:bg-red-400 hover:text-white'><i className={social.style}></i></Link>
              ))}

            </div>

          </div>
        
        </div>
        
      
      </div>

      </div>

      </Container>

    </footer>

  )
}

export default Footer