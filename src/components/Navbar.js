import React, {useState} from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <>
    <nav className="navbar-nav">
      <nav className="navbar-container">
        <Link to="/" className="navbar-logo">
          <a className="navbar-brand logo" href="#"><h1>Iuliia Shevtsova</h1></a>
        </Link>
      </nav>
    </nav>
    </>
  )
}

export default Navbar
