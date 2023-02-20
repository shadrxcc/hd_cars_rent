import React from 'react'
import { AiFillCar } from "react-icons/ai";
import { MdAddCircle, MdRemoveCircle, MdStars, MdSwapVerticalCircle } from "react-icons/md";

export const navbaritems = [
    {
        title: 'Cars',
        link: '/cars',
        library: <AiFillCar/>
    },
    
    {
        title: 'My Bookings',
        link: '/bookings',
        library: <MdSwapVerticalCircle/>
    },

    {
        title: 'Add Cars',
        link: '/add-cars',
        library: <MdAddCircle/>
    },

    {
        title: 'Delete Cars',
        link: '/cars',
        library: <MdRemoveCircle/>
    }
]