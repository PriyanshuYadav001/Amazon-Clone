import React from 'react'
import './navbar.css';
import NavbarBelt from './NavbarBelt/navbarBelt';
import NavbarBanner from './NavbarBanner/navbarBanner';

function Navbar() {
  return (
    <div className="navbar">
      <NavbarBelt/>
      <NavbarBanner/>
    </div>
  )
}

export default Navbar
