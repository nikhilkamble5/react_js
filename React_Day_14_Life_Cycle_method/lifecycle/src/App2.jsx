import React, { Component } from 'react'

export default class App2 extends Component {

  constructor(){
    console.log('constructor call');
    super()
    this.state=({
      id:1,
      name:"nikhil",
      empMobile:"98765463210",
      empCtc:'20'
    })
  }

  //4 componentDidmount
  componentDidMount()
  {
    console.log('componentDidMount');
  }


  //updating phase-when we update something in our component ie state or prop change

  //getSnapshotBeforeUpdate() or componentWillUpdate

  shouldComponentUpdate(nextProps,nextState){
    console.log('shouldComponentUpdate');
  }

  //3
  static getDerivedStateFromProps(props,state){
    console.log('static getDerivedStateFromProps called');
  }
  render() {
    return (
      <div>App2</div>
    )
  }
}
