export default function TextForm(props) {  // Change from textform to TextForm
  return (
    <div>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="12"></textarea>
      </div>
    </div>
  )
}