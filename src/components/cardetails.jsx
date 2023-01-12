import React from 'react'
import ferrari from '../assets/ferrari.png'
import Navbar from './navbar'
import Specscard from './specscard'

const Cardetails = () => {
  return (
  <>
  <div className='flex'>
  <Navbar/>
    <div>
        <h1 className='text-center text-white font-bold text-4xl pt-5' data-aos="slide-down"  data-aos-duration="1500">Enzo Ferrari</h1>

        <div className='' data-aos-easing="ease-in-out-cubic" data-aos="zoom-in-up" data-aos-duration="1500">
            <img src={ferrari} className="mx-auto" alt="ferrari" />
        </div>
        <div><p className='text-white px-20 pb-3 text-center' data-aos="zoom-out-right" data-aos-duration="1000">The Enzo Ferrari (Type F140) mid-engine sports car</p></div>
        <Specscard/>
        
    </div>
    </div>
    </>
  )
}

export default Cardetails
