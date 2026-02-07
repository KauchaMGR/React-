
import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';

export default class App extends Component {
  name='dipeen';
  render() {
    return (
      <div> <Navbar/>
       <h1> hello my first calss based component {this.name}</h1>
      
      </div>
    )
  }
}
