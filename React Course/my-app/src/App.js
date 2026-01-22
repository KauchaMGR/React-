import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
//import TextForm from './components/TextForm';
import About from './components/about';



function App() {
  return (
    <>
      <Navbar title="textutils" home="about home" news="about news" />
     {/* <div className="container "> <TextForm  heading="Hey enter the text here"/></div> */}
     <About />
    </>
  
  );
}

export default App;