import { Footer, Header } from './Components/index'
import { Outlet, createBrowserRouter } from 'react-router-dom'

import Home from './Pages/Home'
import About from './Pages/About'
import Service from './Pages/Service'
import AllService from './Pages/AllService'

function App() {
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/services',
        element: <Service />
      },
      {
        path: '/allServices',
        element: <AllService />, //Parent route
      },
      {
        path: '/pages',
        element: <About />
      },
      {
        path: '/portfolio',
        element: <About />
      },
      {
        path: '/blog',
        element: <About />
      },
      {
        path: '/contact',
        element: <About />
      },
    ]
  }
  ])

  return (
    <>
      <div>
        <Header />
        <main>
          <Outlet />
          {/* <Home /> */}
        </main> 
        <Footer />
        
      </div>
      
    </>
  )
}

export default App
