import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Addcars from './components/addform'
import Bookings from './components/bookings'
import Cardetails from './components/cardetails'
import Carmenu from './components/carmenu'
import Navbar from './components/navbar'

const RouteSwitch = () => {
  return (
    <>
    
    
    <Routes>
       <Route path="/cars" element={<Carmenu/>}></Route>
       <Route path="/details" element={<Cardetails/>}></Route>
       <Route path="/add-cars" element={<Addcars/>}></Route>
       <Route path="/bookings" element={<Bookings/>}></Route>
    </Routes>
   
    </>
  )
}

export default RouteSwitch