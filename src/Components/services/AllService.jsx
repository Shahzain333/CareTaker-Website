import React from 'react'
import Container from '../Container'
import { NavLink } from 'react-router-dom'
import Button from '../Button'

function AllService() {

  const navItem = [
    { title: "Assisted Living", link: '/allService'},
    { title: "Nursing Care", link: '/allService'},
    { title: "Medical & Health", link: '/allService'},
    { title: "Physical Assistance", link: '/allService'},
    { title: "Residential care", link: '/allService'},
    { title: "Personal Care", link: '/allService'},
  ]
  
  return (
    <section className='pt-30 pb-5'>
      
      <Container>
      
        <div className='flex md:flex-row flex-col gap-6 md:pl-15 p-4 sm:p-0'>
        
          <div className='flex flex-col gap-4 w-full md:w-[380px]'>
            
            {/* Services Linke sideBar */}
            <div className='border border-gray-200 rounded-3xl p-8 '>

              <h3 className='font-bold text-[1.5rem]'>All Services</h3>

              <div className='border-2 border-red-400 rounded-full w-13 h-[3px] mt-2'></div>

              <div className='text-[1.2em] pt-8'>
                        
                <ul className='flex flex-col gap-2 '>
                          
                  {navItem.map((nav) => (
                                        
                    <li key={nav.title}>

                      <NavLink to={nav.link} className={({isActive}) => isActive ? `text-black hover:text-red-400 
                        transform hover:rotate-x-180 transition-all duration-300 delay-150 ease-in-out group` : 
                        'text-black hover:text-red-400 transition-all duration-300 delay-150 ease-in-out'} >
                          <i class="fa-solid fa-angles-right mr-2 transition-transform duration-300 group-hover:rotate-x-180"></i>
                          {nav.title}
                      </NavLink> 

                      <div className={`border border-gray-200 rounded-full w-full  mt-2
                        ${nav.title === 'Personal Care' ? 'hidden' : 'block'}`}></div>

                    </li>
          
                    )
                  )}
                        
                </ul>
           
              </div>

            </div>
            
            {/* Download buttons */}
            <div className='border border-gray-200 rounded-3xl p-8 '>

              <h3 className='font-bold text-[1.5rem]'>Download</h3>
              <div className='border-2 border-red-400 rounded-full w-13 h-[3px] mt-2'></div>

              <NavLink to="">
                <Button className="border-2 border-red-400 text-gray-800 font-semibold transition-all 
                  duration-300 hover:bg-red-400 hover:text-white rounded-4xl w-full mt-8 flex items-center 
                  justify-start text-[1.1rem] py-4">
                  <i className="fa-regular fa-file-pdf mr-3 transition-transform duration-300 ml-1"></i>
                  Download Borchure
                </Button>
              </NavLink>

              <NavLink to="">
                <Button className="border-2 border-red-400 text-gray-800 font-semibold transition-all 
                  duration-300 hover:bg-red-400 hover:text-white rounded-4xl w-full mt-4 flex items-center 
                  justify-start text-[1.1rem] py-4">
                  <i className="fa-regular fa-file-lines mr-3 transition-transform duration-300 ml-1"></i>
                  Download Aplication
                </Button>
              </NavLink>
            
            </div>
          
          </div>
        
          <div className=''>
            <h2>Hi</h2>
            <h3>Hello</h3>
          </div>
        
        </div>
      
      </Container>
    
    </section>
  )
}

export default AllService