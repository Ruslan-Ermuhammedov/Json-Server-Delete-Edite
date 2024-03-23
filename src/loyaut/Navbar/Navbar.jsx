import React from 'react'
import "../Navbar/Navbar.css"
import { NavLink } from 'react-router-dom'
function Navbar() {
    return (
        <nav className='Navbar'>
            <NavLink to={"/"}>
                Home
            </NavLink>
            <NavLink to={"/comments"}>
                Comments
            </NavLink>
           
        </nav>
    )
}

export default Navbar
