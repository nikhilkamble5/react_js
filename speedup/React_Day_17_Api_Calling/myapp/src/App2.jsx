import React, { Component } from 'react'

export default class App2 extends Component {

  constructor(){
    super()
    this.state={
      user:'',
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((result)=>result.json()
    .then((res)=>{
      console.log(res);

      this.setState({
        user:res
      })
    }))
  }
  render() {
    console.log(this.state.user);
    return (
      <>

<h1 className="text-center fw-bold my-4">
        Api Calling in stateless functional component
      </h1>
      <h1 className="text-center bg-dark p-3 my-3 text-light">User Records</h1>

      <table className="table table-border table-striped table-hover text-center fw-bold  table-light">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>First Name</th>
            <th>User Name</th>
          </tr>
        </thead>

        <tbody>
        {
          this.state.user ?
           this.state.user.map((val,index)=>{
            return(
              <>
              <tr key={index || val.id} >
                <td>{val.id}</td>
                <td>{val.email}</td>
                <td>{val.username}</td>
                <td>{val.email}</td>
              </tr>
              </>
            )
            }):null
        }
        </tbody>
      </table>
     
      </>
    )
  }
}
