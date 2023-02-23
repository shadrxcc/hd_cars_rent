import React, { useEffect, useState } from 'react'
import Delete from '../components/delete'
import jwtDecode from 'jwt-decode';
import { AiFillDelete } from "react-icons/ai";
import { useSelector } from 'react-redux';
import axios from 'axios';

const Deletecars = () => {
const jwt = window.localStorage.getItem("jwt");
  let setUser = jwtDecode(jwt)
  const currentUser = setUser.username;
console.log(currentUser)
const [cars, setCars] = useState([])

useEffect(() => {
    axios
      .get("http://localhost:3100/car_menu_items/")
      .then((res) =>
        setCars(res.data)
      );
  }, []);

  console.log(cars)

  const deleteReservation = id => {
    console.log('deleting....')
    fetch(`http://localhost:3100/car_menu_items/${id}`, {
      method: "DELETE",
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Something is wrong')
      }
      window.location.reload()
    })
    .catch((err) => console.log(err))
  }

  const renderCars = cars.map((car) => {
    const { car_name, image_url, id, user } = car
    if (currentUser === user) {
      return (
      <>
     <div className="bg-[#232323] items-center m-3 rounded-lg p-3" key={id}>
        <div className='flex justify-end'>
          <button onClick={() => deleteReservation(id)}><AiFillDelete className='text-white text-lg hover:text-red-800'/></button>
        </div>
        <div className="">
          <img src={image_url} className="w-[25rem]" alt="ferrari" />
        </div> 
<div><h3 className='text-white text-center text-xl'>{car_name}</h3></div>
        
      </div>
      </>
    )
    } else {
      return (
        <>
        <div><h2>There are no cars for you to delete. Click below to add cars</h2></div>
        </>
      )
    }
    
  })
  // const renderList = bookings.map((book) => {
  //   const { id, car, user, start_date, image, location, price } = book;
  //   if (currentUser === user) {
  //     return (
  //     <div
  //       key={id}
  //       className="flex flex-col bg-[#232323] justify-between m-3 rounded-lg p-3"
  //     >
  //       <button onClick={() => deleteReservation(id)} className="text-white flex justify-end text-xl">
  //         <AiFillDelete />
  //       </button>
  //       <div className="m-auto">
  //         <img src={image} className="w-[40em]" alt="ferrari" />
  //       </div>

  //       <div className="flex justify-between">
  //         <div className="text-white gap-2">
  //           <h3>{car}</h3>
  //           <h3 className="text-white">{price}</h3>
  //         </div>
  //         <div className="text-white">
  //           <p className="text-xs">{start_date}</p>
  //           <h6 className="text-white">{location}</h6>
  //         </div>
  //       </div>
  //     </div>
  //   );
  //   } else {
  //     return
  //   }
  // });
  // const deleteReservation = (id) => {
  //   console.log('deleting....')
  //   fetch(`http://localhost:3100/bookings/${id}`, {
  //     method: "DELETE",
  //   })
  //   .then((response) => {
  //     if (!response.ok) {
  //       throw new Error('Something is wrong')
  //     }
  //     window.location.reload()
  //   })
  //   .catch((err) => console.log(err))
  // }

  
  return (
    <>
    <div className='mt-[6rem] '>
        <h1 className="text-white text-center text-2xl">Delete cars</h1>
        <div className='grid gap-2 md:grid-cols-2 lg:grid-cols-3'>
        {renderCars}</div>
    </div>
    </>
  )
}

export default Deletecars