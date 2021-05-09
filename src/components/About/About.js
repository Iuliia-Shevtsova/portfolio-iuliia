import React from 'react'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './About.css'
import PageHeader from './../PageHeader/PageHeader'
import me from '../../me.jpg'

const About = () => {
  return (
    <div className='about-wrapper' id='about'>
      <PageHeader title={'About me'}/>
      <div className='about-container'>
        <div className='text'>
          <h2>
            Hi, I'm Iuliia Shevtsova
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className='photo'>
          <img className='me' src={me} alt="Iuliia Shevtsova"></img>
        </div>
      </div>

      {/* <Row justify-content-xs-center md={8}>
        <Col md={{ offset: 2 }} >
            <img src={me} alt="Iuliia Shevtsova" className="img_about"/>
        </Col>
        <Col md={{ span: 6 }}>
          <div className='text'>
            <h2>
              Hi, I'm Iuliia Shevtsova
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </Col>
      </Row> */}
    </div>
    
  )
}

export default About

