import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title,description}=this.props;
    return (
      <div >
        <div className="card" style={{width: "18rem;"}}>
  <img src="https://assets2.cbsnewsstatic.com/hub/i/r/2026/03/04/aeafb2b3-6d1d-4db6-8db1-5a62cfeb2b3d/thumbnail/1200x630/c1d73beedc13b24772a36c000ea91f54/iran-war-tehran-2264172660.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href="/newsitem" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

      </div>
    )
  }
}

export default Newsitem
