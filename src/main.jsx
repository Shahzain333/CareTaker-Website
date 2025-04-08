import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// ---------------import user Pages -----------
import Home from "./Pages/Home.jsx"
import About from './Pages/About.jsx'
import Service from './Pages/Service.jsx'
import AllService from './Pages/AllService.jsx'
import Pricing  from './Pages/Pricing.jsx'

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
      element: <About />,
    },
    {
      path: '/services',
      element: <Service />, //Parent route
      // children: [
      //   {
      //     path: 'allService',  //Child route
      //     element: <AllService />,  
      //   } 
      // ]
    },
    {
      path: '/allService',
      element: <AllService />,
    },
    { 
      path: '/allService/:categoryName', 
      element: <AllService /> 
    },
    {
      path: '/pricing',
      element: <Pricing />
    },
    {
      path: '/donation',
      element: <About />
    },
    {
      path: '/portfolio',
      element: <About />
    },
    {
      path: '/contact',
      element: <About />
    },
  ]
}
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
