import './index.css'
// import Head from './noUse/Head'
// import Nav from './noUse/Nav'

import Navbar from "./components/Navbar/Navbar"
import { Routes , Route } from 'react-router-dom'
import Mens from "./components/men/Mens"
import Womens from "./components/women/Womens"
import Home from "./components/home/Home"
import Cartdetails from "./components/women/Cartdetails"
import { useState } from "react"
import Menscartdetails from "./components/men/Menscartdetails"
import StepperMain from "./components/stepper/StepperMain"

function App() {

  const [search, setsearch] = useState('')
  // console.log(search,"from app.js");

  return (
    <div>
      
      <Navbar search={search} setsearch={setsearch}/>

      <Routes>
        
        <Route path="/" element={<Home/>}/>
        <Route path="/mens" element={<Mens search={search}/>}/>
        <Route path="/womens" element={<Womens search={search}/>}/>

        <Route path="/womens/cartdetails/:id" element={<Cartdetails/>}/>

        <Route path="/mens/Menscartdetails/:id" element={<Menscartdetails/>}/>

        <Route path="/checkout" element={<StepperMain/>}/>

      </Routes>

    </div>
  )
  
}

export default App
