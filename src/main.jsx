import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login from './pages/Login/Login.jsx'
import Home from './pages/Home/Home.jsx'
import HardSkills from './pages/HardSkills/HardSkills.jsx'
import SoftSkills from './pages/SoftSkill/SoftSkills.jsx'
import Library from './pages/Library/Library.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
  {
    path:'home/:id',
    element:<App/>,
    children:[
      {
        path:'',
        element:<Home/>
      },
      {
        path:'hardskills',
        element:<HardSkills/>
      },
      {
        path:'softskills',
        element:<SoftSkills/>
      },
      {
        path:'biblioteca',
        element:<Library/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
