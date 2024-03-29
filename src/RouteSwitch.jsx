import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Addcars from './components/addform'
import Book from './components/book'
import Cardetails from './components/cardetails'
import Carmenu from './components/carmenu'
import Delete from './components/delete'
import Login from './components/login'
import Mobilenav from './components/mobilenav'
import Navbar from './components/navbar'
import Signup from './components/signup'
import Bookedcars from './pages/bookedcars'
import Deletecars from './pages/delete'
import Landing from './pages/landing'
import Welcome from './pages/welcome'

const RouteSwitch = () => {
  return (
    <>
    <div className='flex'>
    <Navbar/>
    <Routes>
       <Route path="/cars" element={<Carmenu/>}></Route>
       <Route path="/details/:carId" element={<Cardetails/>}></Route>
       <Route path="/add-cars" element={<Addcars/>}></Route>
       <Route path="/bookings" element={<Bookedcars/>}></Route>
       <Route path="/book-car" element={<Book/>}></Route>
       <Route path="/delete" element={<Deletecars/>}></Route>
       <Route path="/" element={<Landing/>}></Route>
       <Route path="/login" element={<Login/>}></Route>
       <Route path="/sign-up" element={<Signup/>}></Route>
       <Route path="/welcome" element={<Welcome/>}></Route>
       <Route path="/mobile" element={<Mobilenav/>}></Route>
    </Routes>
   </div>
    </>
  )
}

export default RouteSwitch