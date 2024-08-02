import React from "react";
export default class App extends React.Component{


  // getinitialState()-called before component is create 
  constructor(props){
    super(props)


    //1 ounting phase
    //our  component mount 
    this.state=({

      id:1,
      name:"nikhil",
      role:"front end dev",
      email:'nikhil@gmail.com'

    })
  }

 static getDerivedFroProps(props,state){
    console.log('static getDerivedFroProps methode call');
    console.log(state);

    //must be return
    return(null)
  }

  //************************************8 */

  componentDidMount(){
    console.log('componentDidMount called');

    setTimeout(() => {
      this.setState({
        color:'magenta'
      })
    }, 3000);
  }
    //************************************8 */

    updateColor=()=>{
      this.setState({
        color:purple
      })
    }
  render(){
    console.log();
    return(
      <>
      
      
      <h1 className={{color:this.state.color}}>React Life cycle methodmounting phase</h1>

      <button onClick={()=>this.UpdateColor}>Update Color</button>
      </>
    )
  }
}