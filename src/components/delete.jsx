import React from 'react'
import ferrari from '../assets/ferrari.png'
import { AiFillDelete } from "react-icons/ai";

const Delete = () => {
  return (
    <div className="flex bg-[#232323] justify-between items-center m-3 rounded-lg p-3">
        <div className="flex items-center">
          <img src={ferrari} className="w-28" alt="ferrari" />
          <span className="text-white flex flex-column gap-2">
            <h3>Enzo Ferrari</h3>
          </span>
        </div> 

        <div>
          <AiFillDelete className='text-white text-lg hover:text-red-800'/>
        </div>
      </div>
  )
}

export default Delete