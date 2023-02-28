import React from 'react'
import { AiFillDelete } from "react-icons/ai";
import PropTypes from "prop-types";

const deleteReservation = id => {
    console.log('deleting....')
    fetch(`https://hd-rent-app.fly.dev/car_menu_items/${id}`, {
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

const Delete = ({image_url, car_name, id}) => {
  return (
    <div className="bg-[#232323] items-center m-3 rounded-lg p-3" key={id}>
        <div className='flex justify-end'>
          <button onClick={() => deleteReservation(id)}><AiFillDelete className='text-white text-lg hover:text-red-800'/></button>
        </div>
        <div className="">
          <img src={image_url} className="w-[25rem]" alt="ferrari" />
        </div> 
<div><h3 className='text-white text-center text-xl'>{car_name}</h3></div>
        
      </div>
  )
}

export default Delete;

Delete.propTypes = {
  image_url: PropTypes.string,
  car_name: PropTypes.string,
  id: PropTypes.string,
};