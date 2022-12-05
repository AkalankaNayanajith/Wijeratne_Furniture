import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminBar from './Pages/AdminBar'
import ClippedDrawer from './Pages/DashClippedDrawer'

const AdminLayout = ({children}) => {
  return (
    <>
    <AdminBar/>
    <Outlet/>
    <ClippedDrawer/>
    </>
  )
}

export default AdminLayout