import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";

const Carcomponent = () => {
    const cars = useSelector((state) => state.carReducer.cars);
   
   const renderList = cars.map((car) => {
    const {id, car_name, image_url, price} = car
    return (
        <div className='container relative' key={id}>
    <div className='card relative'>
        <div className='card-img'>
            <img src={image_url} className='w-full img' alt="car" />
        </div>
        <div className='body'>
            <h2>{car_name}</h2>
            <div className='price'>
                <h2>{price}</h2>

            </div>
            <Link to={`/details/${id}`}><p className="check">Check meee out</p></Link>

        </div>
    </div>
</div>
    )
   })
    
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

  return (
   <>{renderList}</>
  )
}

export default Carcomponent