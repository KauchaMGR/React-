import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  const toggleMode = (mode) => {
    props.toggleMode(mode);
    // Close the dropdown after mode change
    const dropdownElement = document.querySelector('.dropdown-menu');
    if (dropdownElement) {
      dropdownElement.classList.remove('show');
    }
  }

  return (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">{props.home}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">{props.news}</a>
            </li>
          </ul>
         <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
          <div className="btn-group" role="group">
            <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              Switch mode
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); toggleMode('dark'); }}>
                  Dark
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); toggleMode('light'); }}>
                  Light
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); toggleMode('blue'); }}>
                  Blue
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); toggleMode('green'); }}>
                  Green
                </a>
              </li>
            </ul>
          </div>
        </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  home: PropTypes.string,
  news: PropTypes.string,
  mode: PropTypes.string,
  toggleMode: PropTypes.func.isRequired
}

Navbar.defaultProps = {
  title: "hey its test",
  home: "i am home",
  news: "i am news",
  mode: "light"
}