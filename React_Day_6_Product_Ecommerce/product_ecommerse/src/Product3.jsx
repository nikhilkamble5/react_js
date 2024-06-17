import React from "react";
export default class Product3 extends React.Component{
  constructor(props)
  {
    super(props)
    this.state={
      name:"nikhil"
    }
  }

  render(){
    return(
      <>
      <div className="card">
      <div className="card-header">
        <h1 className="text-center text-dark">{this.props.name}</h1>
      </div>
      <div className="card-body p-3 text-center">
        <img
          src={this.props.img}
          className="img-fluid"
          alt=""
          style={{ height: "300px" }}
        />
      </div>
      <div className="card-footer text-center">
        <button className="btn btn-danger px-4 fw-bold mx-2 btn-sm">
          {this.props.btn1}
        </button>
        <button className="btn btn-outline-primary px-4 fw-bold mx-2 btn-sm">
          {this.props.btn2}

        </button>
      </div>
    </div>
      
      
      
      </>
    )
  }
}

