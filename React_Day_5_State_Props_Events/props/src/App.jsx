import React from "react";
import { empName } from "../../../React_Day_4_Component_State_Class_Component_Code/myapp/src/App";
export default class App extends React.Component {
  //staate defined

  constructor(props) {
    //

    super(props);
    console.log("constructor called");

    //state object

    this.state = {
      empId: 1234,
      empName: "nikhil",
      empskill: "MERN Stack",
      empCtc: "10 Lpa",
      empRole: "mern dev",
      empData: [{}],
      empData2: {},
      count: 0,
    };
  }

  
    // in a class component
    Demo=()=>{
      alert('on click event call')
  }

  Demo2=()=>{
    alert('hellow even call in arrow function')
  }

    //update state

     UpdateState=()=>{
      // alert('update State')

      // setstate method to update state
      this.setState({
        empName:"aniket",
        empskill:"React js",
      })
    }
    UpdateCount=()=>{
      // alert('he')
      this.setState({
        count:this.state.count+1,

      })
    }
  render(){
    console.log(this.state);

    console.log(this.props);
    //normal function 

    // event s called in calss component using normal function 
    const Demo3=()=>{
      alert('Normla function Event called')
    }

  

    return(
      <>
      
      <h1> Welcome to the class component</h1>
      <h1> Hello Emp name {this.state.empName}</h1>
      <h1>  Emp Ctc {this.state.empCtc}</h1>
      <h1>  Emp Ctc {this.state.empskill}</h1>


      <button onClick={()=>this.UpdateState()}>Update State</button>

      <hr />
      {/* Events in Reac */}
      {/* do somethind on a user action */}

        {/* this */}
        <button onClick={this.Demo}>update</button>

        {/* 2 no need to bind this keyword in arrow function */}
        <button onClick={()=>this.Demo()}>Clik here 2</button>


        {/* 3  */}
        <button onClick={Demo3}> Normal FUnction even</button>

        <button onClick={()=>this.UpdateState()}>Update State</button>
        <hr />
        <hr />
        <h1>Hello you clicked {this.state.count} times</h1>

        <button onClick={()=>this.UpdateCount()}>Update Count</button>
        <button onClick={()=>this.setState({count:this.state.count-1})}>ReduceCount</button>

          <hr />
          <hr />
          {/* access props data */}

          <h1>Hello user name is {this.props.userName}</h1>
      </>



    )
  }
}
