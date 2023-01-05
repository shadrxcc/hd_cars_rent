import * as React from 'react';

export default function Addcars () {
  return (
    <div className="mt-5 ">
      <h2 className="text-center text-2xl">Add car</h2>
      <form className='flex mx-10 mt-3 md:m-32 flex-column'>
        <label className='text-white' htmlFor="car-name">Car Name</label>
        <input type="text" className='bg-[#232323] my-2 text-white py-2 px-3 rounded-lg' placeholder="Enter car name" name="car-name" id="car-name" />
        <label className='text-white' htmlFor="price">Price</label>
        <input type="text" className='bg-[#232323] my-2 text-white py-2 px-3 rounded-lg' placeholder="$5000" name="price" id="price" />
        <label className='text-white' htmlFor="Description">Description</label>
        <textarea name="description" id="description" cols="20" className='bg-[#232323] text-white my-2 py-2 px-3 rounded-lg' rows="5" placeholder='Car Description'></textarea>
        <label className='text-white' htmlFor="car-image">Car Image</label>
        <input type="file" className='bg-[#232323] my-2 py-2 px-2 text-white rounded-lg' name="car-image" id="image" />
        <button className='bg-red-700 rounded-lg text-white my-2 py-2'>Add Car</button>
      </form>
    </div>
  );
}