import React from 'react'
import './Skills.css'
import PageHeader from './../PageHeader/PageHeader'

const Skills = ({projectData}) => {
  // console.log(projectData[0].fields)
  return (
    <div className='skills-page' id='skills'>
      <PageHeader title={'Skills'}/>
      <div className="row">
        {
          projectData.map((icon)=>{
              return (
                <div className="skills" key={icon.fields.id}>
                  <div className="icon-box">
                    <div className="skill-icon">
                      <img src={icon.fields.iconURL[0].url} alt={icon.fields.icon}></img>
                    </div>
                  </div>
                  <h1>{icon.fields.icon}</h1>
                </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default Skills
