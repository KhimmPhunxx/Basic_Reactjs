

import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <main className="w-full bg-slate-400">
        <nav className="max-w-7xl mx-auto p-2 h-full flex justify-between">
            <div>
                <h1 className="text-xl font-bold">logo</h1>
            </div>
            <div>
                <ul className="flex space-x-7 text-xl">
                    <NavLink to="/" className="text-white" activeClassName="text-red-500">Home</NavLink>
                    <NavLink to="about" className="text-white" activeClassName="text-red-500">About</NavLink>
                    <NavLink to="contact" className="text-white" activeClassName="text-red-500">Contact</NavLink>
                    <NavLink to="" className="text-white" activeClassName="text-red-500">Blog</NavLink>
                    <NavLink to="about" className="text-white" activeClassName="text-red-500">Service</NavLink>
                </ul>
            </div>
            <div className="space-x-2">
                <button className="bg-slate-300 text-white p-1 rounded">Login</button>
                <button className="bg-slate-300 text-white p-1 rounded">Sign Up</button>
            </div>
        </nav>
    </main>
  )
}

export default Navbar

