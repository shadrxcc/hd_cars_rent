import '../styles/nav.css'
import { navbaritems } from './navbaritems'
import { AiFillLeftCircle, AiTwotoneCar } from "react-icons/ai";
import { useState } from 'react';
import logo from '../assets/burgundy-142.png'

const Navbar = ()=> {
  const [open, setOpen] = useState(false)
  return (

      <div className={`${open ? "w-64" : "w-12"} h-screen duration-300 pt-8 bg-[#232323] relative`}>
<AiFillLeftCircle className={`text-4xl w-7 text-white cursor-pointer right-3 absolute top-9 ${!open && "rotate-180"}`} onClick={() => setOpen(!open) }/>

<ul className='pt-16 px-2 flex flex-col justify-center'>
        {navbaritems.map((value, key) => {
            return (
                <li className='text-sm flex items-center hover:-translate-y-1 duration-300 py-2 gap-x-2' key={key} onClick={() => {window.location.pathname = value.link}}>
                    <span>
                      <span className='text-2xl text-white '>{value.library}
                    </span>
                   </span>
                    
                    <span className={`${!open && "hidden"} origin-left text-white rounded-md px-8 py-1 hover:bg-zinc-900  duration-200`}>{value.title}</span>
                </li>
        )
        })}
      </ul>
      </div>
  )
}

export default Navbar