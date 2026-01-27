import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
//import TextForm from './components/TextForm';
import About from './components/about';
import React, { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light'); // Start with light mode
  
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#212529';
      document.body.style.color = 'white';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  };

  return (
    <>
      <Navbar title="textutils" home="about home" news="about news" mode={mode} toggleMode={toggleMode} />
       <Alert />
      {/* <div className="container "> <TextForm  heading="Hey enter the text here"/></div> */}
      <About />
     
    </>
  );
}

export default App;