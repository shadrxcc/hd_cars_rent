import React from 'react'
import { useSelector } from 'react-redux'

const Carcomponent = (car) => {
    // const cars = useSelector((state) => state.carsReducer);
    // const wrap = cars.cars
    // console.log(wrap)

//   const renderList = cars.map((car) => {
//     const {id, carname, image, description} = car;
//       return (
/* <div className='container relative' key={id}>
    <div className='card relative'>
        <div className='card-img'>
            <img src={image} className='w-full img' alt="car" />
        </div>
        <div className='body'>
            <h2>{carname}</h2>
            <div className='price'>
                <h2></h2>

            </div>
            <a href="/details">Check meee out</a>

        </div>
    </div>
</div> */
//   )
// })

  return (<>
    <div className='container relative' key={car.id}>
    <div className='card relative'>
        <div className='card-img'>
            <img src={car.image_url} className='w-full img' alt="car" />
        </div>
        <div className='body'>
            <h2>{car.car_name}</h2>
            <div className='price'>
                <h2></h2>

            </div>
            <a href="/details">Check meee out</a>

        </div>
    </div>
</div></> )
}

export default Carcomponent