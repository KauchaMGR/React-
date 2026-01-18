import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

let name = "dipeen kaucha Magar";

function App() {
  return (
    <>
      <Navbar title="textutils" home="about home" news="about news" />
      <TextForm />
    </>
  );
}

export default App;