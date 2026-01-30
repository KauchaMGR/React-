import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
//import TextForm from './components/TextForm';
import About from './components/about';
import React, { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light'); // Start with light mod
  const [alert, setAlert]=useState('null');

  const showAlert=(message,type)=>
  {
    setAlert({
      msg:message,
      ty:type
    })
  }
  
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#212529';
      document.body.style.color = 'white';
      showAlert('dark mode has benn enables','success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert('light mode has benn enables','success');
    }
  };

  return (
    <>
      <Navbar title="textutils" home="about home" news="about news" mode={mode} toggleMode={toggleMode} />
       <Alert alert={alert}/>
      {/* <div className="container "> <TextForm  heading="Hey enter the text here"/></div> */}
      <About />
     
    </>
  );
}

export default App;