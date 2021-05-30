import React from 'react'
import './Portfolio3.css'

const Technologies = ({project}) => {
  const technologies = project.technologies.split(','); 
  return (
    <div className="portfolio-techologies">
      {
        technologies.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))
      }
    </div>
  )
}
  
export default Technologies
