const Deposite=(amt)=>{
  return ((dispatch)=>{
      dispatch({
        type:'Deposite',
        payload:amt
      })
  })
}

const Withdraw=(amt)=>{
 
  return ((dispatch)=>{
    dispatch({
      type:'Withdraw',
      payload:amt
    })
  })
}

export {Deposite,Withdraw}