import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Carmenu from './components/carmenu'
import Navbar from './components/navbar'


const RouteSwitch = () => {
  return (
    <>
    <Routes>
      <Route path="" element={<Navbar/>}>
       <Route path="/cars" element={<Carmenu/>}></Route>
       </Route>
    </Routes>
    </>
  )
}

export default RouteSwitch