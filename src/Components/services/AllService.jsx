import React, { useState, useRef, useEffect }  from 'react'
import Container from '../Container'
import { NavLink, useParams, useNavigate } from 'react-router-dom'
import Button from '../Button'
import HealthServiceimg from '../../assets/img/healthCareImg.jpeg'
import HealthServiceMainImg from '../../assets/img/HeroImage.jpg'

function AllService() {

  const services = {
    "Assisted-Living": {
      heading_first: "Assisted Living",
      paragraph1: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto 
                beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut 
                odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, 
                sed quia non numquam eius modi tempora incidunt ut labore et.`,
      paragraph2: `But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain 
                was born and I will give you a complete account of the system, and expound the actual teachings 
                of the great explorer of the truth, the master-builder of human happiness. No one rejects, 
                dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know 
                how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again 
                is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, 
                but because occasionally circumstances occur in which toil and pain can procure him some great 
                pleasure. To take a trivial example`,
      paragraph3: `Power of choice is untrammelled and when nothing prevents our being able to do what we like 
                best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and 
                owing to the claims of duty or the obligations of business it will frequently occur that 
                pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in 
                these matters to this principle of selection.`,
      paragraph4: `Aliquam facilisis rhoncus nunc, non vestibulum mauris volutpat non. Vivamus tincidunt accumsan 
                urna, vel aliquet nunc commodo tristique. Nulla facilisi. Phasellus vel ex nulla. Nunc tristique 
                sapien id mauris efficitur, porta scelerisque nisl dignissim. Vestibulum ante ipsum primis in 
                faucibus orci luctus et ultrices posuere cubilia curae; Sed at mollis tellus. Proin consequat, 
                orci nec bibendum viverra, ante orci suscipit dolor, et condimentum felis dolor ac lectus.`,  
      heading_second: `Why Choose Our Services ?`,         
      paragraph5: `Quisque a nisl id sem sollicitudin volutpat. Cras et commodo quam, vel congue ligula. Orci varius 
                natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras quis venenatis 
                neque. Donec volutpat tellus lobortis mi ornare eleifend. Fusce eu nisl ut diam ultricies 
                accumsan. Integer lobortis vestibulum nunc id porta. Curabitur aliquam arcu sed ex dictum, a 
                facilisis urna porttitor. Fusce et mattis nisl. Sed iaculis libero consequat justo auctor 
                iaculis. Vestibulum sed ex et magna tristique bibendum. Sed hendrerit neque nec est suscipit, 
                id faucibus dolor convallis.`       
    },
    "Nursing-Care": {
      heading_first: "Nursing Care",
    },
    "Medical-Health": {
      heading_first: "Medical & Health",
    },
    "Physical-Assistance": {
      heading_first: "Physical Assistance",
    },
    "Residential-care": {
      heading_first: "Residential care",
    },
    "Personal-Care": {
      heading_first: "Personal Care",
    }

  };

  const navigate = useNavigate();

  const { serviceName } = useParams(); // Get service from URL

  const [selectedService, setSelectedService] = useState(serviceName || "Assisted Living"); // Default service

  const contentRef = useRef(null); // Ref to the content section

  // Update content when URL changes
  useEffect(() => {
    if (serviceName) {
      setSelectedService(serviceName);
      setTimeout(() => {
        contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [serviceName]);

  // Function to handle sidebar click
  const handleServiceClick = (service) => {
    setSelectedService(service);  // Update content
    navigate(`/allService/${service}`, { replace: true }); // Update URL without reload

    setTimeout(() => {
      contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }); // Scroll smoothly
    }, 100);
  };
  
  return (
    <section className='pt-25 pb-25'>

        <div className='flex lg:flex-row flex-col gap-6 p-4'>
        
          <div className='flex flex-col gap-4 w-full lg:w-[650px]'>
            
            {/* Services Link sideBar */}
            <div className='border border-gray-200 rounded-3xl p-8 '>

              <h3 className='font-bold text-[1.5rem]'>All Services</h3>

              <div className='border-2 border-red-400 rounded-full w-13 h-[3px] mt-2'></div>

              {/* Side Bar */}
              <div className='text-[1.2em] pt-8'>
                        
                <ul className='flex flex-col gap-2 outline-none'>
                          
                  {Object.keys(services).map((service) => (
                                        
                    <li key={service}>

                      {/* <NavLink to={nav.link} className={({isActive}) => isActive ? `text-black hover:text-red-400 
                        transform hover:rotate-x-180 transition-all duration-300 delay-150 ease-in-out group` : 
                        'text-black hover:text-red-400 transition-all duration-300 delay-150 ease-in-out'} >
                          <i class="fa-solid fa-angles-right mr-2 transition-transform duration-300 group-hover:rotate-x-180"></i>
                          {nav.title}
                      </NavLink>  */}
                      
                      <Button  onClick={() => handleServiceClick(service)} className={({isActive}) => isActive ? `text-black hover:text-red-400 
                        transform transition-all duration-300 delay-150 ease-in-out group` : `text-black hover:text-red-400 
                        transform transition-all duration-300 delay-150 ease-in-out group  `}>
                        <i class="fa-solid fa-angles-right mr-2 transition-transform duration-300 group-hover:rotate-x-180"></i>
                        {services[service]?.heading_first} 
                      </Button>

                      <div className={`border border-gray-200 rounded-full w-full  mt-2
                        ${service === 'Personal Care' ? 'hidden' : 'block'}`}></div>

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
                  justify-start py-3 text-[1.3rem]">
                  <i className="fa-regular fa-file-pdf mr-3 transition-transform duration-300 ml-5 text-[1.1rem]"></i>
                  Download Borchure
                </Button>
              </NavLink>

              <NavLink to="">
                <Button className="border-2 border-red-400 text-gray-800 font-semibold transition-all 
                  duration-300 hover:bg-red-400 hover:text-white rounded-4xl w-full mt-8 flex items-center 
                  justify-start py-3 text-[1.3rem]">
                  <i className="fa-regular fa-file-lines mr-3 transition-transform duration-300 ml-5 text-[1.1rem]"></i>
                  Download Application
                </Button>
              </NavLink>
            
            </div>
          
          </div>
        
          {/* Main Content */}
          <div className='flex flex-col gap-7 w-full'>
            
            <div className=''>
              <img src={HealthServiceMainImg} className='md:h-[510px] h-[300px] w-full rounded-3xl' />
            </div>
            
            <div className='pt-16' ref={contentRef}>

              <h1 className='text-[1.5rem] font-bold'>{services[selectedService]?.heading_first}</h1>

              <p className='pt-3 text-[1.1rem]'>{services[selectedService]?.paragraph1}</p>

              <p className='pt-3 text-[1.1rem]'>{services[selectedService]?.paragraph2}</p>

              <div className='flex flex-col md:flex-row gap-6 pt-6'>

                <img src={HealthServiceimg} className='w-full h-100 rounded-3xl object-cover' />

                <img src={HealthServiceimg} className='w-full h-100 rounded-3xl object-cover' />

              </div>

              <p className='pt-6 text-[1.1rem]'>{services[selectedService]?.paragraph3}</p>

              <h1 className='text-[1.8rem] font-bold pt-4'>Our Work Process</h1>

              <p className='pt-4 text-[1.1rem]'>{services[selectedService]?.paragraph4}</p>

              <div className='pt-4 flex flex-col gap-2'>

                <div className='flex items-center justify-start gap-3'>
                  <i class="fa-solid fa-check-double text-red-400 text-[1.2rem]"></i>
                  <p className='text-[1.2rem]'>Fusce justo risus placerat in risus eget tincidunt consequat elit.</p>
                </div>

                <div className='flex items-center justify-start gap-3'>
                  <i class="fa-solid fa-check-double text-red-400 text-[1.2rem]"></i>
                  <p className='text-[1.2rem]'>Nunc fermentum sem sit amet dolor laoreet placerat.</p>
                </div>

                <div className='flex items-center justify-start gap-3'>
                  <i class="fa-solid fa-check-double text-red-400 text-[1.2rem]"></i>
                  <p className='text-[1.2rem]'>Nullam rhoncus dictum diam quis ultrices.</p>
                </div>

                <div className='flex items-center justify-start gap-3'>
                  <i class="fa-solid fa-check-double text-red-400 text-[1.2rem]"></i>
                  <p className='text-[1.2rem]'>Integer quis lorem est uspendisse eu augue porta ullamcorper dictum..</p>
                </div>

                <div className='flex items-center justify-start gap-3'>
                  <i class="fa-solid fa-check-double text-red-400 text-[1.2rem]"></i>
                  <p className='text-[1.2rem]'>Quisque tristique neque arcu ut venenatis felis malesuada et.</p>
                </div>

              </div>

              <h1 className='text-[1.8rem] font-bold pt-4'>{services[selectedService]?.heading_second}</h1>

              <p className='pt-4 text-[1.1rem]'>{services[selectedService]?.paragraph5}</p>

            </div>

          </div>
        
        </div>
    
    </section>
  )
}

export default AllService