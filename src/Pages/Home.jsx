import React from 'react'
import { Card, HeroSection, About, Services, ChooseUs, Pricing,Donation } from "../Components/index"

function Home() {
  
    // const cardItems = [
    //     {
    //         id: 1,
    //         name: 'Dedicated Team',    
    //         description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis excepturi words of voluptatum deleniti atque.',
    //         image: Logo,
    //     },
    //     {
    //         id: 2,
    //         name: 'Trusted Institute',
    //         description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis excepturi words of voluptatum deleniti atque.',
    //         image: Logo,
    //     },
    //     {
    //       id: 3,
    //       name: 'Affordable Price',
    //       price: 1500,
    //       description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis excepturi words of voluptatum deleniti atque.',
    //       image: Logo,
    //   },
    //   {
    //     id: 4,
    //     name: 'Emergency Support',
    //     description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis excepturi words of voluptatum deleniti atque.',
    //     image: Logo,
    //   },
    // ]
      
  return (
    <main>
        <HeroSection />
        <Card className={`grid-cols-2 lg:grid-cols-4`} />
        <About />
        <Services />
        <ChooseUs />
        <Pricing />
        <Donation />
    </main>
  )
}

export default Home