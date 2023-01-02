import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Carmenu from './components/carmenu'
import Navbar from './components/navbar'

const RouteSwitch = () => {
  return (
    <>
    <div className='flex gap-x-10'>
    <Navbar/>
    <Routes>
       <Route path="/cars" element={<Carmenu/>}></Route>
    </Routes>
    </div>
    </>
  )
}

export default RouteSwitch