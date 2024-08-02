import React, { Component } from 'react'

export default class App3 extends Component {

  constructor(props){
    super(props)
    this.state=({

    })
  }
  render() {
    return (
      <div><div className="card">
        <div className="card-header">
          <h2 className="text-center font-weight-bold">{this.props.name}</h2>
        </div>
        <div className="card-body text-center">
          <img
            src={this.props.img}
            alt="img-fluid"
            style={{ height: "250px" }}
            // style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </div>
        <div className="card-footer p-3">
          <button className="btn btn-danger px-4 font-weight-bold mx-3">
            {this.props.btn1}
          </button>
          <button className="btn btn-outline-dark px-4 font-weight-bold mx-3">
            {this.props.btn2}
          </button>
        </div>
      </div></div>
    )
  }
}
