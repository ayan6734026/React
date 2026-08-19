import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import './index.css'
import Layout from './Component/Layout/Layout.jsx'
import Home from "./Component/Home/Home.jsx"
import About from "./Component/About/About.jsx"
import Contact from "./Component/Contact/Contact.jsx"
import User from "./Component/User/User.jsx"
import Github,{GithubInfo} from './Component/Github/Github.jsx'

// Type-1
// const router=createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children:[
//       {
//         path:'',
//         element:<Home/>
//       },
//       {
//         path:'about',
//         element:<About/>
//       }
//     ]
//   }
// ])

// Type-2
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} >
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='user/:userId' element={<User/>} />
      <Route loader={GithubInfo} path='github' element={<Github/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)
