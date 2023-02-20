import React, { useState } from 'react'
import { Pivot as Hamburger } from 'hamburger-react'
import { navbaritems } from './navbaritems'
import { Link } from 'react-router-dom'
const Mobilenav = () => {
    const [clicked, setClicked] = useState(false);

    const buttonClick = () => {
        setClicked(!clicked)
    }

    const loggedIn = window.localStorage.getItem("isLoggedIn")

    const showNav = () => {
      if (loggedIn === "true") {
        return (
            <>
            <div className=''>
        <header className='flex justify-between fixed items-center w-full'>
            <div>
                <h2>hello</h2>
            </div>
        <nav>

            <ul id='navbar' className={`${clicked ? "#navbar active": "#navbar"} flex flex-col items-center gap-y-4 top-[5em] right-[-6em] absolute`}>
{navbaritems.map((item, id) => {
    return (
        <Link to={item.link} key={id}><li className='active text-white'>{item.title}</li></Link>
        
    )
})}<button className='bg-red-700 p-2 text-white rounded-lg'>Sign Out</button>
            </ul>
        </nav>
        <div className='mobile' onClick={buttonClick}>
            <Hamburger color='white' size={24} rounded/>
        </div>
        </header>
    </div>
            </>
        )
      } else {
        return null
      }
    }
  return (
//     <div className=''>
//         <header className='flex justify-between fixed items-center w-full'>
//             <div>
//                 <h2>hello</h2>
//             </div>
//         <nav>

//             <ul id='navbar' className={`${clicked ? "#navbar active": "#navbar"} flex flex-col items-center gap-y-4 top-[5em] right-[-6em] absolute`}>
// {navbaritems.map((item, id) => {
//     return (
//         <Link to={item.link} key={id}><li className='active text-white'>{item.title}</li></Link>
        
//     )
// })}<button className='bg-red-700 p-2 text-white rounded-lg'>Sign Out</button>
//             </ul>
//         </nav>
//         <div className='mobile' onClick={buttonClick}>
//             <Hamburger color='white' size={24} rounded/>
//         </div>
//         </header>
//     </div>
<>{showNav()}</>
  )
}

export default Mobilenav