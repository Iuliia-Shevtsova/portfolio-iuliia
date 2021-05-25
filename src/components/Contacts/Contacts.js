import React from 'react'
import './Contacts.css'

const Contacts = () => {
  return (
    <div className='contact-page' id='contacts'>
      {/* <div>
      Contacts
      </div> */}
      <div className="contacts">
        <a href='https://www.linkedin.com/in/iuliia-shevtsova-b19828198' target="_blank" rel="noopener noreferrer"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
        <a href='https://github.com/Iuliia-Shevtsova' target="_blank" rel="noopener noreferrer"><i class="fa fa-github" aria-hidden="true"></i></a>
        <a href='mailto:uliyaal2018@gmail.com' target="_blank" rel="noopener noreferrer"><i class="fa fa-envelope" aria-hidden="true"></i></a>
      </div>
    </div>
  )
}

export default Contacts
