import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js'
import Navbar from './components/Navbar';
import Header from './components/Header'


function App() {
  return (
    <>
      <Particles 
        className="particals-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
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
      <Navbar />
      <Header />
    </>
  );
}

export default App;
