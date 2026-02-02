import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

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
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-Link active text-decoration-none text-white me-3" aria-current="page" to="/home">{props.home}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-Link active text-white text-decoration-none me-3" to="/about">{props.news}</Link>
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