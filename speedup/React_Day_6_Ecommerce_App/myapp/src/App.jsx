import React from "react";
export default class App extends React.Component {
  // calss component

  constructor() {
    super();
    this.state = {
      emp_id: 1,
      empName: "Nikhil",
      count: 0,
      show: true,
    };
  }

  UpdateState = () => {
    // alert()
    this.setState({
      count: this.state.count + 1,
    });
  };

  // data hide sathi lenthy code
  ToggelData = () => {
    this.setState({
      show:!this.state.show,
    }) 

    // if (this.state.show) 
    // {
    //   this.setState({
    //     show:false,
    //   })
    // }
    // else{
    //   this.setState({
    //     show:true,
    //   })
    // }
  };
  render() {
    return (
      <>
        <h1>State And props</h1>
        <h1>Initial Count: {this.state.count}</h1>
        <button onClick={() => this.UpdateState()}>Update Count</button>

        <hr />
        <br />

        <button onClick={() => this.ToggelData()}>Toggle Data </button>

        {/* conditional rendering : 
      >data hide karaycha  */}

        {/* Ternary operator  codnition ? true : false */}
        {/*  logical && operator  && */}
        {/* {this.state.show ? (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur, deserunt.
          </p>
        ) : null} */}

        {
          this.state.show &&   <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Consectetur, deserunt.
        </p>
        }
      </>
    );
  }
}
