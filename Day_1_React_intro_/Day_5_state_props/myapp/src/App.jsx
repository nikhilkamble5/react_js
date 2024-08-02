import React from "react";
export default class App extends React.Component {
  // state defined
  constructor() {
    super();
    console.log("constructor called");

    //state object
    this.state = {
      empId: 1234,
      empName: "Rushi",
      empSkill: "Mern Stack",
      empCtc: "10LpA",
      empRole: "mern Dev",
      count:0
    };
  }

  //in a class
  Demo = () => {
    alert("on click event call");
  };


  //update state
  UpdateState=()=>{
    // alert('s')
    this.setState({
      empName:'prathmesh'
    })
  }
  render() {
    console.log(this.state);

    //normal function 
    const Demo3=()=>{
      alert('normal function')
    }

    //************ */

    
    return (
      <>
        <h1>Welcome to the class component</h1>
        <h1>Hello EMp Name Is {this.state.empName}</h1>
        <h1>Hello EMp Name Is {this.state.empCtc}</h1>
        <h1>Emp skill <mark>{this.state.empSkill}</mark></h1>
        {/* Event sIn React */}
        {/* Do something on a user acton */}
        {/* mouse ,windows */}

        {/* this */}
        <button onClick={this.Demo}>Click here</button>

        {/* 2 no need to bind this keyword .ie by default acess this keyword (current oibject) */}
        <button onClick={() => this.Demo()}>Click here 2</button>

        {/* 3  */}
        <button onClick={Demo3}>Normal Function</button>

        <button onClick={()=>this.UpdateState()}>Update state</button>
        <hr />
        <hr />

        <h1>Hello You Clicked {this.state.count}</h1>
        <button onClick={()=>Updatecount()}>Update COunt</button>
      </>
    );
  }
}
