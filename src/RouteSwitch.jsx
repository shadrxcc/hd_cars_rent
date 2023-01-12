import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Addcars from './components/addform'
import Book from './components/book'
import Bookings from './components/bookings'
import Cardetails from './components/cardetails'
import Carmenu from './components/carmenu'
import Delete from './components/delete'
import Login from './components/login'
import Signup from './components/signup'
import Deletecars from './pages/delete'
import Landing from './pages/landing'

const RouteSwitch = () => {
  return (
    <>
    <Routes>
       <Route path="/cars" element={<Carmenu/>}></Route>
       <Route path="/details" element={<Cardetails/>}></Route>
       <Route path="/add-cars" element={<Addcars/>}></Route>
       <Route path="/bookings" element={<Bookings/>}></Route>
       <Route path="/book-car" element={<Book/>}></Route>
       <Route path="/delete" element={<Deletecars/>}></Route>
       <Route path="/landing" element={<Landing/>}></Route>
       <Route path="/login" element={<Login/>}></Route>
       <Route path="/sign-up" element={<Signup/>}></Route>
    </Routes>
   
    </>
  )
}

export default RouteSwitch