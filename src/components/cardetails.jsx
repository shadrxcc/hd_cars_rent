import React, { useEffect } from 'react'
import ferrari from '../assets/ferrari.png'
import Navbar from './navbar'
import Specscard from './specscard'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { selectedCar } from '../redux/actions/actions';

const Cardetails = () => {

 
  const cars = useSelector((state) => state.selectedCarReducer)
   const { car_name, car_description, image_url, price } = cars 
   window.localStorage.setItem('car', car_name)
  window.localStorage.setItem('carimage', image_url)
  const dispatch = useDispatch();
  const { carId } = useParams()

  const getSelectedcars = async () => {
    const response = await axios.get(`http://localhost:3100/car_menu_items/${carId}`)
    dispatch(selectedCar(response.data))
  }


  useEffect(() => {
    if (carId && carId !== '') {
      getSelectedcars();
    }
  }, [carId])
  return (
  <>
  <div className='flex'>
  <Navbar/>

    <div>
        <h1 className='text-center text-white font-bold text-4xl pt-5' data-aos="slide-down"  data-aos-duration="1500">{car_name}</h1>

        <div className='' data-aos-easing="ease-in-out-cubic" data-aos="zoom-in-up" data-aos-duration="1500">
            <img src={image_url} className="mx-auto" alt="ferrari" />
        </div>
        <div><p className='text-white px- pb-3 text-center' data-aos="zoom-out-right" data-aos-duration="1000">{car_description}</p></div>
        <Specscard/>
        <a className='text-white text-center bg-red-700' href='/book-car'>Book this car</a>
    </div>
    </div>
    </>
  )
}

export default Cardetails
