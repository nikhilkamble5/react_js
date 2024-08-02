import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div>
      <h1 className="bg-dark p-4 my-3 fw-bold text-center text-light"></h1>

<div className="container-fluid">
  <div className="row">
    <div className="col-md-12">

      <div className="row">
        <div className="col-md-12">
          <div className="form-group">
            <label htmlFor="">Enter Your Name:</label>
            <input type="text" className='form-group' placeholder='Enter your name' />
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="">Enter Your Emial</label>
            <input type="email"  className='form-control' placeholder='Enter Your Email' />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        
      </div>
    )
  }
}
