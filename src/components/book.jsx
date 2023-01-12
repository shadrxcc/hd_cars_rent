import { cities } from "./citylist";

const Book = () => {
  return (
    <>
    <div
        id="login"
        className="container h-screen relative flex justify-center items-start"
      >
        <div className='m-3' data-aos="zoom-in-up" data-aos-duration="1000">
          <p className="text-white text-2xl md:text-3xl text-center mb-3">Rent Car</p>
          <label htmlFor="car" className="text-white">Car</label>
          <input type="text" name="username" id="username" className='text-white rounded-lg bg-[#232323] pl-3 py-2 my-2 w-full' />
          <label htmlFor="categories" className="text-white">City</label>
          <select
          name="categories"
          id="categories"
          className='input-cate text-white bg-[#232323] py-2 px-2 w-full my-2 rounded-lg'
        ><option value="">
                  Select city
                </option>
          {cities.map((option, index) => (
            <option key={index} className='input-cat'>{option.city}</option>
          ))}
        </select>
        <label htmlFor="date" className="text-white">Date</label>
          <input type="date"  placeholder="Choose date" className="bg-[#232323] text-white py-2 px-2 w-full my-2 rounded-lg" name="date" id="date" />
          <button className="bg-red-700 rounded-lg text-white py-2 my-2 w-full">Rent car</button>
        </div>
      </div>
    </>
  )
}

export default Book;