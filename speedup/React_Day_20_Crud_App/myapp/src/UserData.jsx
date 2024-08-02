import React from 'react'
import  Axios  from 'axios'
const UserData = () => {
const loadData=()=>{
  Axios.get('')
}
  return (
    <>
<h1 className='bg-dark p-4 my-3 fw-bold text-center text-light'>User Data</h1>

    </>
  )
}

export default UserData
