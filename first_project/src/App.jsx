import { useState } from 'react'; // Fixed: Imported useState and added quotes
import Card from './Components/Card.jsx'; 

function App() { 
  const [count, setCount] = useState(0); // Works perfectly now
  
  return ( 
    <> 
      <h1>Hello</h1> 
      <Card></Card> 
    </> 
  ); 
} 

export default App;
