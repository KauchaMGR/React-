import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class news extends Component {
  render() {
    return (
      <div className='Container my-10'>
    <h1>News Monkey Headlines</h1>
    <div className='row'>
        <div className="col-md-3">
            <Newsitem title="war" description="war is going on" />
        </div>
        <div className="col-md-3">
            <Newsitem title="war" description="war is going on" />
        </div>
        <div className="col-md-3">
            <Newsitem title="war" description="war is going on" />
        </div>
        <div className="col-md-3">
            <Newsitem title="war" description="war is going on" />
        </div>
    </div>
        
        
      </div>
    )
  }
}

export default news
