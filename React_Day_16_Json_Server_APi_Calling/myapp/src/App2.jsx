import React, { Component } from 'react'

export default class App2 extends Component {

  constructor(){
    super()
    this.state={
      user:''
    }
  }
  componentDidMount()
  {
    fetch('https://reqres.in/api/users?page=2')
    .then((result)=>result.json())
      .then((res)=>{
        console.log(res.data)
        this.setState({
          user:res.data
        })
      }
    )
  }
  render() {



    console.log(this.setState.user);
    return (
      <>
      <h1>Api Calling in calss Component</h1>
      <table className='table table-border hover table-striped table-responsive'>
      <thead>
        <tr >
          <th>ID</th>
          <th>Email</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Avatar</th>

        </tr>
      </thead>

      <tbody>
      {  this.state.user &&
        this.state.user.map((val,index)=>{
          console.log(val);
          return(
            <tr key={val.id || index}>
             <td>{val.id}</td>
             <td>{val.email}</td>
             <td>{val.first_name}</td>
             <td>{val.last}</td>
             <td ><img src={val.avatar} alt="" /></td>
            </tr>
          )
        })
      }
        
      </tbody>
      </table>
      
      </>
    )
  }
}
