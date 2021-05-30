import React from 'react'
import './Portfolio2.css'
import PageHeader from './../PageHeader/PageHeader'

const Portfolio = ({projectData}) => {
  return (
    <div className='portfolio' id='portfolio'>
      <div className="container">
        <div className="section-headling">
            <h1>Portfolio</h1>
            <h6>View some of my recent work</h6>
            {/* <PageHeader title={'Portfolio'} /> */}
        </div>

          {
            projectData.map((project)=>{
              if (project.fields.Name !== undefined ){
                return (
                  <div className="portfolio-item" key={project.fields.id}>
                    <div className="portfolio-img marg">
                      <img src={project.fields.image[0].url} alt=""/>
                    </div>

                    <div className="portfolio-description marg">
                      <h6>{project.fields.Name}</h6>
                      <h1>{project.fields.Name}</h1>
                      <p>{project.fields.Notes}</p>

                      <a href={project.fields.link} className="cta">
                        View details
                      </a>
                    </div>
                  </div>
                )
              }
            })
          }
      </div>
    </div>
  )
}

export default Portfolio
