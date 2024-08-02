import React from 'react'
import { useSelector } from 'react-redux'


import {Deposite,WithDraw} from './State/Action_Creators'

//used to 
import { useDispatch } from 'react-redux'
import ActionCreators from './State/Action_Creators/index'
const Shop = () => {
  const amt =useSelector((state)=>state.amount)
  const dispatch=useDispatch();

  return (
    <>
    
    
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
        <center>

<button  className='btn btn-danger px-4 mx-4 fw-bold' onClick={()=>dispatch()}>Deposite </button>
{/* <span>Amout</span> */}
<button  className='btn btn-danger px-4 mx-4 fw-bold' onClick={()=>dispatch()}>WithDraw</button>
</center>
        </div>
      </div>
    </div>
    </>
  )
}

export default Shop