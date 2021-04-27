import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js'
import Navbar from './components/Navbar';
import Header from './components/Header'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

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
      <Router>
        <Navbar />
        <Switch> {/* render the first Route component that matches url. If not found, than it renders NotFound component */}
            <Route exact path="/" component={Header} />
            {/* <Route path="/about" component={About} />
            <Route path="/projects" render={ () => <Projects projectData={this.state.projectData}/>}/> 
            <Route exact path="/contact" component={Contact} />        
            <Route component={NotFound} /> */}
          </Switch>
      </Router>
    </>
  );
}

export default App;
