import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
   <main className="w-full">
        <Navbar />
        
        <Outlet />

        <Footer />
   </main>
  )
}

export default Layout
