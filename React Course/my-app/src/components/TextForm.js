import React,{useState}from 'react'



export default function TextForm(props) {  // Change from textform to TextFortext
const handleUpClick =()=>{
  console.log("hanleupclick was invoked")
  settext("hey i have clicked the button")
  
}
const handlechange =()=>{
  console.log("hanlechange  was invoked")
}
  const[text,settext]=useState("enter the text1")//use of state variable
  //settext("Hey i have ste the text through settext function that i have defined using the state variable")
  return (
    <div>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        
        <textarea className="form-control" value={text} 
         onChange={handlechange} id="exampleFormControlTextarea1" rows="12"></textarea>
        <br />
        <button className="btn btn-primary"  onClick={handleUpClick} >
          convert to upper case
        </button>
      </div>
    </div>
  )
}