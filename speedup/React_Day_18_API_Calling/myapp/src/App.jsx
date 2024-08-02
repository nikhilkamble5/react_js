import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Home'
import UserData from './UserData'
import Navbar from './Navbar'
const App = () => {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        {/* multiple route */}
        <Route path='/' element={<Home/>}></Route>
        <Route path='/userdata' element={<UserData/>}></Route>
        {/* fallbak routing */}

        <Route path='*' element={<Home/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App