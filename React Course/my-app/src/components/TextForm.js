export default function TextForm(props) {  // Change from textform to TextForm
  return (
    <div>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="12"></textarea>
        <br />
        <button className="btn btn-primary">
          convert to upper case
        </button>
      </div>
    </div>
  )
}