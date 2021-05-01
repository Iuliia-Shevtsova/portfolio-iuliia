import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js'
import Navbar from './components/Navbar';
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Portfolio from './components/Portfolio'
import Contacts from './components/Contacts'


function App() {
  return (
    <>
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
      {/* <Particles className="particals-canvas"
        params={{
          "particles": {
              "number": {
                  "value": 100,
                  "density": {
                      "enable": false
                  }
              },
              "color": {
                "value": "rgb(180, 127, 187)"
              },
              "size": {
                  "value": 5,
                  "random": true,
                  "anim": {
                      "speed": 4,
                      "size_min": 0.5
                  }
              },
              "line_linked": {
                  "enable": false
              },
              "move": {
                  "random": true,
                  "speed": 1,
                  "direction": "top",
                  "out_mode": "out"
              }
          },
          "interactivity": {
              "events": {
                "onhover": {
                    "enable": true,
                    "mode": "bubble"
                },
                "onclick": {
                    "enable": true,
                    "mode": "repulse"
                }
              },
              "modes": {
                "bubble": {
                    "distance": 250,
                    "duration": 2,
                    "size": 0,
                    "opacity": 0,
                },
                "repulse": {
                    "distance": 400,
                    "duration": 4
                }
              }
          }
      }} /> */}
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Experience />
      <Portfolio />
      <Contacts />
    </>
  );
}

export default App;
