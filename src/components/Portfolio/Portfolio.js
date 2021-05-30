import React from 'react'
import './Portfolio.css'
import PageHeader from '../PageHeader/PageHeader'
import Technologies from './Technologies'

const Portfolio = ({projectData}) => {
  return (
    <div className='portfolio' id='portfolio'>
        <PageHeader title={'Portfolio'} />
      <div className="container">
        {
          projectData.map((project, index)=>{
            if (project.fields.Name !== undefined ){
              return (
                <div className="portfolio-item" key={index}>
                  <div className="portfolio-img">
                    <img src={project.fields.image[0].url} alt=""/>
                  </div>

                  <div className="portfolio-description">
                    <h3>{project.fields.Name}</h3>
                    <p>{project.fields.Notes}</p>
                    <Technologies project={project.fields}/>
                    <div className="links">
                      <a href={project.fields.link} target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-github" aria-hidden="true"></i>
                      </a>
                      <a href={project.fields.link} target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-external-link" aria-hidden="true"></i>
                      </a>
                    </div>
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
