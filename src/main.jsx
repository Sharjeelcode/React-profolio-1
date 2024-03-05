import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Dashboard from './pages/Dashboard'
import Income from './pages/Income'
import Expense from './pages/Expense'
import Catagories from './pages/Catagories'
import Settings from './pages/Settings'
import Profile from './pages/Profile'
import Register from './pages/Register'
import SignIn from './pages/SignIn'


const router = createBrowserRouter([
  {
    path: "",
    element: <Register />
  },
  {
    path: "signin",
    element: <SignIn/>
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />
      },
      {
        path: "income",
        element: <Income />
      },
      {
        path: "expense",
        element: <Expense />
      },
      {
        path: "catagories",
        element: <Catagories />
      },
      {
        path: "settings",
        element: <Settings />
      },
      {
        path: "profile",
        element: <Profile />
      },
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
