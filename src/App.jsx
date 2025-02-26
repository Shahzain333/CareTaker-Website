import { Footer, Header } from './Components/index'
import { Outlet } from 'react-router-dom'

import Home from './Pages/Home'
import About from './Pages/About'

function App() {
  
  // const router = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: <Home />
  //   },
  //   {
  //     path: '/about',
  //     element: <About />
  //   },
    
  // ])

  return (
    <>
      <div>
        
        <Header />
        
        <main>
          <Home />
        </main> 

        <Footer />
        
      </div>
      
    </>
  )
}

export default App
