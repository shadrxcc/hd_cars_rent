
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'


import React, { Component } from 'react'

export class Addcars extends Component {
  constructor(props) {
    super(props)

    this.state ={
      car_name: '',
      car_description: '',
      image_url: '',
      price: '',
    }
  }

handleChange = (e) => {
  this.setState({[e.target.name]: e.target.value})
}

postCar = (e) => {
  e.preventDefault();
  console.log(this.state)
  axios.post('http://localhost:3100/car_menu_items', this.state)
  .then(response => {
    console.log(response)
  })
  .catch(error => {
    console.log(error)
  })
}
  render() {
    const { car_name, car_description, image_url, price } = this.state
    return (
      <div className="mt-5 ">
      <h2 className="text-center text-2xl">Add car</h2>
      <form onSubmit={this.postCar} className="flex mx-10 mt-3 md:m-32 flex-column">
        <label className="text-white" htmlFor="car-name">
          Car Name
        </label>
        <input
          type="text"
          onChange={this.handleChange}
          className="bg-[#232323] my-2 text-white py-2 px-3 rounded-lg"
          placeholder="Enter car name"
          name="car_name"
          id="name"
          value={car_name}
        />
        <label className="text-white" htmlFor="price">
          Price
        </label>
        <input
          type="text"
          onChange={this.handleChange}
          className="bg-[#232323] my-2 text-white py-2 px-3 rounded-lg"
          placeholder="$5000"
          name="price"
          id="price"
          value={price}
        />
        <label className="text-white" htmlFor="Description">
          Description
        </label>
        <textarea
          name="car_description"
          id="description"
          cols="20"
          onChange={this.handleChange}
          className="bg-[#232323] text-white my-2 py-2 px-3 rounded-lg"
          rows="5"
          placeholder="Car Description"
          value={car_description}
        ></textarea>
        <label className="text-white" htmlFor="car-image">
          Car Image
        </label>
        <input
          type="file"
          onChange={this.handleChange}
          className="bg-[#232323] my-2 py-2 px-2 text-white rounded-lg"
          name="image_url"
          id="image"
          value={image_url}
        />
        <button className="bg-red-700 rounded-lg text-white my-2 py-2">
          Add Car
        </button>
      </form>
    </div>
    )
  }
}

export default Addcars
