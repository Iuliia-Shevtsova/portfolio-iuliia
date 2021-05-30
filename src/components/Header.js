import React from 'react'
import Typed from 'react-typed'

const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
      <h1>Frontend and Ruby on Rails Web Development</h1>
        <Typed 
          className="typed-text"
          strings={["React development", "Ruby on Rails development"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href='mailto:uliyaal2018@gmail.com' target="_blank" rel="noopener noreferrer" className="btn-main-offer">Contact me</a>
      </div>
    </div>
  )
}

export default Header
