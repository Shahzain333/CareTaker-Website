import React from 'react'
import Container from "../Container"
import Logo from "../../assets/img/Seno Care.png"

function Card() {

    const cardItem = [
        {
          id: 1,
          name: 'Dedicated Team',    
          description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis excepturi words of voluptatum deleniti atque.',
          image: Logo,
      },
      {
          id: 2,
          name: 'Trusted Institute',
          description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis excepturi words of voluptatum deleniti atque.',
          image: Logo,
      },
      {
        id: 3,
        name: 'Affordable Price',
        price: 1500,
        description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis excepturi words of voluptatum deleniti atque.',
        image: Logo,
    },
    {
      id: 4,
      name: 'Emergency Support',
      description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis excepturi words of voluptatum deleniti atque.',
      image: Logo,
    },
    ]
    
  return (

    <section className='px-10'>
    
    <Container>

        <div className="flex flex-col gap-8 pb-10">
  
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:grid-cols-4 pt-6">

                {cardItem.map((item) => (
       
                  <div key={item.id} className={`flex gap-4 flex-col rounded-2xl shadow-md overflow-hidden 
                   transform transition-transform duration-300 hover:scale-102 ${item.id === 1 ? 'bg-purple-300' 
                   : item.id === 2 ? "bg-blue-300" : item.id === 3 ? "bg-green-300" : "bg-yellow-300"}`}>
                    
                    {/* Image portion */}
                    
                    <div className="flex items-center justify-between p-4 w-full">

                        {/* Left Side: Image */}
                        <img className="w-10 sm:w-12 md:w-14 lg:w-18 object-cover" src={item.image} alt={item.name} />

                        {/* Right Side: Number & Border */}
                        <div className="flex items-center gap-2 absolute top-2 right-3">
                            <div className="w-4 sm:w-6 md:w-8 border-b-4 border-b-red-500 rounded-full"></div>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-500">0{item.id}</h1>
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

        </div>

    </Container>
    
    </section>
  
)
}

export default Card