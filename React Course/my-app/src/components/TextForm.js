import React,{useState}from 'react'



export default function TextForm(props) {  // Change from textform to TextForm
  const[text,settext]=useState("enter the text1")
  return (
    <div>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        
        <textarea className="form-control" value={text} id="exampleFormControlTextarea1" rows="12"></textarea>
        <br />
        <button className="btn btn-primary">
          convert to upper case
        </button>
      </div>
    </div>
  )
}