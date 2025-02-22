import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'

// const router = createBrowserRouter ({
//   path: '/',
//   element: <App/>,
//   children: [
//     {
//       // path: '/',
//       // element: <Home />
//     },
//     {
//       // path: '/menu',
//       // element: <Menu />
//     },
//   ]
// })

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <RouterProvider router={router} /> */}
    <App />
  </BrowserRouter>,
)
