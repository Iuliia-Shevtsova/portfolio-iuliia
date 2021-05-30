import React from 'react'
import Particles from 'react-particles-js'

const ParticlesStyle = () => {
  return (
    <div>
      <Particles 
        className="particals-canvas"
        params={{
          particles: {
            number: {
              value: 20,
              density: {
                enable: true,
                value_area: 800
              },
              color: {
                value: "red"
              },
            },
           
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "rgb(180, 127, 187)"
              }

            }
          }
        }}
      />
    </div>
  )
}

export default ParticlesStyle
