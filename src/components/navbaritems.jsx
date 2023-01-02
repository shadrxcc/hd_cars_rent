import React from 'react'
import { AiFillCar } from "react-icons/ai";
import { BsFillBookmarkPlusFill, BsFillBookmarkStarFill } from "react-icons/bs";
import { MdAddCircle, MdRemoveCircle } from "react-icons/md";

export const navbaritems = [
    {
        title: 'Cars',
        link: '/cars',
        library: <AiFillCar/>
    },

    {
        title: 'Book',
        link: '/cars',
        library: <BsFillBookmarkPlusFill/>
    },

    {
        title: 'My Bookings',
        link: '/cars',
        library: <BsFillBookmarkStarFill/>
    },

    {
        title: 'Add Cars',
        link: '/cars',
        library: <MdAddCircle/>
    },

    {
        title: 'Delete Cars',
        link: '/cars',
        library: <MdRemoveCircle/>
    }
]