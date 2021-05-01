import React from 'react'
import logo from '../logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//icon fa-bars for responsive nav
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor: '#012b4d'}}>
      <div className="container">
        {/* <a className="navbar-brand" href="#"><img className={logo} src={logo} alt='logo' /></a> */}
        <a className="navbar-brand logo" href="#"><h1>Iuliia Shevtsova</h1></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{color:"white"}}/>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#experience">Experience</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#portfolio">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#contacts">Contacts</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
