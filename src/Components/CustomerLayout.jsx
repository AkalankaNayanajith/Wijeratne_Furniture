import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'

const CustomerLayout = ({children}) => {
  return (
   <>
   <Navbar/>
   <Outlet/>
   <Footer/>

   </>
  )
}

export default CustomerLayout