import React,{useState}from 'react'
export default function TextForm(props) {  // Change from textform to TextFortext
const handleUpClick =()=>{
  let newtext=text.toUpperCase();
  settext(newtext);
  props.showAlert('Converted to Uppercase','success');
  
}
const handlelowClick =()=>{
  let newtext=text.toLowerCase();
  settext(newtext);
  props.showAlert('Converted to lowercase','success');
  
}
const handlechange =(event)=>{
  // console.log("hanlechange  was invoked");
  settext(event.target.value);// allows to write more in the text feild
}
const cleartext=()=>
{
  let newtext ="";
  settext(newtext);
  props.showAlert('text cleared sucess fully','success');
}

const getfirst=()=>
{
  let newtext=text.split(" ")[0];
  settext(newtext);
  props.showAlert('first word is extracted succesfully','success');
}
  const[text,settext]=useState("enter the text1")//use of state variable
  //settext("Hey i have ste the text through settext function that i have defined using the state variable")
  return (
    <div>
      <div className=" container mb-3">
        <h1>{props.heading}</h1>
        
        <textarea className="form-control" value={text} 
         onChange={handlechange} id="exampleFormControlTextarea1" rows="12"></textarea>
        <br />
        <button className="btn btn-primary mx-4"  onClick={handleUpClick} >
          convert to upper case
        </button>
         <button className="btn btn-primary mx-4"  onClick={handlelowClick} >
          convert to lower case
        </button>
        <button className="btn btn-primary mx=4" onClick={cleartext}>clear text</button>
        <button className="btn btn-danger mx-4" onClick={getfirst}>Get  first word</button>
      </div>
      <div className="container my-3">
        <h1>
          The summary of the given text is
         </h1>
         <p>
        total number of words{text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length}and nuber of characters{text.length}.
         </p>
         <p>
          time to reead the text{0.008 * text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length} minutes
         </p>
         <h2>preview</h2>
         <p>
          {text}
         </p>
      </div>
    </div>
  )
}