import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminBar from './Pages/AdminBar'
import ClippedDrawer from './Pages/DashClippedDrawer'
import UserAction from './SideBar/UserAction'

const AdminLayout = ({children}) => {
  return (
    <>
    <AdminBar/>
    <Outlet/>
    {/* <UserAction/> */}
    {/* <ClippedDrawer/> */}
    </>
  )
}

export default AdminLayout