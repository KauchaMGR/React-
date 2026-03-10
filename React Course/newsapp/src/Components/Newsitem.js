import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description, Url, newsUrl } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={Url || "https://placehold.co/600x400?text=No+Image"}
            onError={(e) => {
              e.target.src = "https://placehold.co/600x400?text=No+Image";
            }}
            className="card-img-top"
            alt="news thumbnail"
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read more
            </a>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Newsitem;
