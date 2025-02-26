import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'

// ---------------import user Pages -----------
import Home from "./Pages/Home.jsx"
import About from './Pages/About.jsx'

// const router = createBrowserRouter ({
//   path: '/',
//   element: <App />,
//   children: [
//     {
//       path: '/',
//       element: <Home />
//     },
//     {
//       path: '/about',
//       element: <About />
//     },
//     {
//       path: '/services',
//       element: <About />
//     },
//     {
//       path: '/pages',
//       element: <About />
//     },
//     {
//       path: '/portfolio',
//       element: <About />
//     },
//     {
//       path: '/blog',
//       element: <About />
//     },
//     {
//       path: '/contact',
//       element: <About />
//     },
//   ]
// })


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      {/* <RouterProvider router={router} /> */}
      <App />
  </BrowserRouter>,
)
