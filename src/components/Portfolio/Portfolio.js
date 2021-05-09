import React from 'react'
import './Portfolio.css'
import PageHeader from './../PageHeader/PageHeader'

const Portfolio = ({projectData}) => {
  return (
    <div className='portfolio-page' id='portfolio'>
    {/* <div className="PortfolioPage"> */}
      <div className="title">
          <PageHeader title={'Portfolio'} />
      </div>
      <div className="portfolio">
        {
          projectData.map((project)=>{
            return <div className="project" key={project.fields.id}>
              <div className="project-content">
                <img src={project.fields.image[0].url} alt=""/>
                <a href={project.fields.link} className="project-link">
                  {project.fields.Name}
                </a>
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Portfolio
