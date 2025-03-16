import React from 'react'
import { Card, HeroSection, About, Services } from "../Components/index"

function Home() {
  return (
    <main>
        <HeroSection />
        <Card />
        <About />
        <Services />
    </main>
  )
}

export default Home