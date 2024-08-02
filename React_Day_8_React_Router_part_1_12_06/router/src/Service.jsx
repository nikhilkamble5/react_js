import React from 'react'

//1
  import { useMatch,  } from 'react-router-dom'
const Service = () => {

  const match=useMatch('/service')
  //if match return path match object

  return (
    <>

<h1 className='my-3 text-center'>Contact Page</h1>
     <pre>
     {
        match && <code>{JSON.stringify(match,null,3)}</code>
      }
     </pre>
    </>
  )
}

export default Service