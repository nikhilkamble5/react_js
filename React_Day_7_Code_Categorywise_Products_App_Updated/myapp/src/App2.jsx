import React, { Component } from 'react'

export default class App2 extends Component {

  constructor(){
    super();
    this.state={
      show:true,
      name:'nishi'
    }
  }

  ToggleData=()=>{
    // if(this.state.show){
    //   this.setState({
    //     show:false,
    //   })
    // }
    // else{
    //   this.setState({
    //     show:true
    //   })
    // }

    this.setState({
      show:!this.state.show,
    })
  }
  render() {
    return (
      <div>

        <button className='btn btn-danger' onClick={()=>this.ToggleData()}>toggle</button>
        {/* conditionla rendering  if else switch */}

        {/* {
          this.state.show ?    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, dolores.</p> :null
        } */}

          {
            this.state.show && <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, dolores.</p>
          }
    
      </div>
    )
  }
}
