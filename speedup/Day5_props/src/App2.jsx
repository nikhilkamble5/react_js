import React from "react";
export default class App2 extends React.Component {
  constructor(props) {
    // Derived Class/child class

    super(props);
    console.log("constructer called");

    this.state = {
      // key: value
      name: "nikhil",
      role: "Dev",
      Ctc: "10Lpa",
      email: "nik@gmail.com",
      isEligible: true,
      mobile: 9876543210,
    };
  }


  // function called in a class
  // Demo2=()=>{
  //   alert("function called in a class")
  // }
  // Demo4=()=>{
  //   alert("called using arraw function")
  // }

  UpdateData=()=>{
    this.setState({
      name:'Shubam',
      role:'mern stack',
    })
  }
  render() {
    console.log(this.state);
    // normal function in render method 
    // const Demo1 = () => {
    //   alert("eelcome js");
    // };

    //props date
    console.log(this.props);
    return (
      <>
        <h1> Welcome to The Class COmpoent</h1>
        <h1>Your name is {this.state.name} And youre role is {this.state.role}</h1>
        <button onClick={()=>this.UpdateData()}>Update State</button>
        <br />
        <hr />
        <h1> Props Data- {this.props.skill}</h1>
        
        {/* <button onClick={Demo1}>Click Here</button>  
          <button onClick={this.Demo2}>cleik here 2</button>

          <button onClick={()=>alert("event in a class component")}>click here 3</button>
          
          <button onClick={()=>this.Demo4()}>click here 4</button> */}
        {/* Event is react */}
      </>
    );
  }
}
