import React from 'react'

const Login = () => {
  return (
    <div
        id="login"
        className="container h-screen relative flex justify-center items-center"
      >
        <div className='m-3' data-aos="zoom-in-up" data-aos-duration="1000">
          <p className="text-white text-lg md:text-3xl mb-3">Login</p>
          <input type="text" name="username" id="username" className='text-white rounded-lg bg-[#232323] pl-3 py-2 my-2 w-full' placeholder="Enter username" />
          <input type="password" name="password" id="password" className='text-white rounded-lg pl-3 bg-[#232323] py-2 my-2 w-full' placeholder='Enter password' />
          <button className="bg-red-700 rounded-lg text-white py-2 my-2 w-full">Sign In</button>
        </div>
      </div>
  )
}

export default Login