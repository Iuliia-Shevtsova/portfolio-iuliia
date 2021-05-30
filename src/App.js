import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import ParticlesStyle from './components/ParticlesStyle'
import Navbar from './components/Navbar';
import Header from './components/Header'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Portfolio from './components/Portfolio/Portfolio'
import Contacts from './components/Contacts/Contacts'


function App() {

  const [projectData, setProjectData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const isCancelled = React.useRef(false);

  useEffect(() => {
    getResults();

    return () => {
      isCancelled.current = true;
    };
  }, [projectData]);

  const getResults = async () => {
    setLoading(true);
    try {
      await fetch('https://api.airtable.com/v0/appxHbAmWEaapw9Gf/Table%201?api_key=keyHoZe6iixLcTeeA')
			.then(res => res.json())
			.then(res => {
        if (!isCancelled.current) {
          console.log(res.records);
          setProjectData(res.records);
        }
			})
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  console.log(projectData)

  return (
    <>
      <ParticlesStyle />
      <Navbar />
      <Header />
      <About />
      <Skills  projectData={projectData}/>
      <Portfolio projectData={projectData} />
      <Contacts />
      {/* {loading ? (<div></div>) : (<div></div>) } */}
    </>
  );
}

export default App;
