import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Service from './Service'
import PageNotFound from './PageNotFound'
import SimpleInterestCalculator from '../../../Calculator/calculator/src/components/SimpleInterestCalculator'
import BMICalculator from './components/BMICalculator'
const App = () => {
  return (
    <>
      <h1 className='text-center bg-dark p-3 text-white'> React Router</h1>

      <Router> 
        <Navbar/>
    <Routes>
    {/* //nested container or wrapper boundary d=to defined ultiple route  */}
    <Route path='/' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    {/* url data handeling */}

    <Route path='/contact/:name/:name2' element={<Contact/>}></Route>
    
    <Route path='/service' element={<Service/>}></Route>
    <Route path='/simple-interest-calculator' element={<SimpleInterestCalculator />} /> {/* Add new route */}
              <Route path='/bmi' element={<BMICalculator />} />


      {/* fall back Routing */}
    <Route path='*' element={<PageNotFound/>}></Route>
    {/* <Route path='*' element={<Home/>}></Route> */}

    </Routes>

      </Router>
    
    </>
  )
}

export default App