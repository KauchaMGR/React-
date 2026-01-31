import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/about';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      ty: type,
      timestamp: Date.now()
    });
    setTimeout(() => {
      setAlert(null);
    }, 15000);
  }
  
  const toggleMode = (mod) => {
    if (mod === 'dark') {
      setMode('dark');
      showAlert('dark mode has been enabled', 'success');
      document.body.style.backgroundColor = '#2d3033';
      document.body.style.color = 'white';
      document.title="text utils -dark mode";
    } 
    else if(mod=='light')
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert('light mode has been enabled', 'success');
      document.title="text utils -light mode";
    }
     else if(mod=='blue')
    {
      setMode('blue');
      document.body.style.backgroundColor = '#0774e1';
      document.body.style.color = 'black';
      showAlert('blue mode has been enabled', 'success');
      document.title="text utils -blue mode";
    }
    else{
      setMode('green');
      document.body.style.backgroundColor = '#39d715';
      document.body.style.color = 'black';
      showAlert('green mode has been enabled', 'success');
      document.title="text utils -green mode";
    }
  };

  return (
    <>
      <Navbar title="textutils" home="about home" news="about news" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      {/* <div className="container "> <TextForm  heading="Hey enter the text here"/></div> */}
       <About /> 
      <TextForm showAlert={showAlert} />
    </>
  );
}

export default App;