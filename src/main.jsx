import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Dashboard from './components/Dashboard'
import Income from './components/Income'
import Expense from './components/Expense'
import Catagories from './components/Catagories'
import Settings from './components/Settings'
import Profile from './components/Profile'
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
