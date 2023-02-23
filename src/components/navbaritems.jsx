import React from 'react'
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineAdd, MdOutlineHistory } from "react-icons/md";
import {IoCarOutline} from 'react-icons/io5'


export const navbaritems = [
    {
        title: 'Cars',
        link: '/cars',
        library: <IoCarOutline/>
    },
    
    {
        title: 'My Bookings',
        link: '/bookings',
        library: <MdOutlineHistory/>
    },

    {
        title: 'Add Cars',
        link: '/add-cars',
        library: <MdOutlineAdd/>
    },

    {
        title: 'Delete Cars',
        link: '/delete',
        library: <AiOutlineDelete/>
    }
]