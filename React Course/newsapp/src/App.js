
import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';

export default class App extends Component {
  name='dipeen';
  render() {
    return (
      <div> <Navbar/>
        <News/>
       <h1> hello my first calss based component {this.name}</h1>
      
      </div>
    )
  }
}
p