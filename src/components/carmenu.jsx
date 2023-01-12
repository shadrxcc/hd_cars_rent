import React from 'react'
import car from '../assets/ferrari.png'
import audi from '../assets/audi.png'
import ford from '../assets/ford.png'
import mclaren from '../assets/mclaren.png'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Navbar from './navbar'

const Carmenu = () => {
    const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
  return (
    <>
 
       
    <Carousel className='duration-300' responsive={responsive}>
  <div className='container relative'>
    <div className='card relative'>
        <div className='card-img'>
            <img src={car} className='w-full img' alt="car" />
        </div>
        <div className='body'>
            <h2>Enzo Ferrari</h2>
            <div className='price'>
                <h2>$5000</h2>

            </div>
            
            <a href="/details">Check me out</a>

        </div>
    </div>
</div>
  
  <div className='container relative'>
    <div className='card relative'>
        <div className='card-img'>
            <img src={audi} className='w-full img' alt="car" />
        </div>
        <div className='body'>
            <h2>Enzo Ferrari</h2>
            <div className='price'>
                <h2>$5000</h2>

            </div>
            
            <a href="/details">Check me out</a>

        </div>
    </div>
</div>

<div className='container relative'>
    <div className='card relative'>
        <div className='card-img'>
            <img src={ford} className='w-full img' alt="car" />
        </div>
        <div className='body'>
            <h2>Enzo Ferrari</h2>
            <div className='price'>
                <h2>$5000</h2>

            </div>
            
            <a href="/details">Check me out</a>

        </div>
    </div>
</div>

<div className='container relative'>
    <div className='card relative'>
        <div className='card-img'>
            <img src={mclaren} className='w-full img' alt="car" />
        </div>
        <div className='body'>
            <h2>Enzo Ferrari</h2>
            <div className='price'>
                <h2>$5000</h2>

            </div>
            
            <a href="/details">Check me out</a>

        </div>
    </div>
</div>

<div className='container relative'>
    <div className='card relative'>
        <div className='card-img'>
            <img src={car} className='w-full img' alt="car" />
        </div>
        <div className='body'>
            <h2>Enzo Ferrari</h2>
            <div className='price'>
                <h2>$5000</h2>

            </div>
            
            <a href="/details">Check me out</a>

        </div>
    </div>
</div>

<div className='container relative'>
    <div className='card relative'>
        <div className='card-img'>
            <img src={car} className='w-full img' alt="car" />
        </div>
        <div className='body'>
            <h2>Enzo Ferrari</h2>
            <div className='price'>
                <h2>$5000</h2>

            </div>
            
            <a href="/details">Check me out</a>

        </div>
    </div>
</div>
<div className='container relative'>
    <div className='card relative'>
        <div className='card-img'>
            <img src={car} className='w-full img' alt="car" />
        </div>
        <div className='body'>
            <h2>Enzo Ferrari</h2>
            <div className='price'>
                <h2>$5000</h2>

            </div>
            
            <a href="/details">Check me out</a>

        </div>
    </div>
</div>
<div className='container relative'>
    <div className='card relative'>
        <div className='card-img'>
            <img src={car} className='w-full img' alt="car" />
        </div>
        <div className='body'>
            <h2>Enzo Ferrari</h2>
            <div className='price'>
                <h2>$5000</h2>

            </div>
            
            <a href="/details">Check me out</a>

        </div>
    </div>
</div>
</Carousel>
</>
  )
}

export default Carmenu