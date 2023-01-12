import React from 'react'

const addCars = async (cars) => {
    const response = await fetch('http://127.0.0.1:3000/cars_menu_items', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            accepts: 'application/json'
        },
        body: cars,
    })

  return response.json();
}

export default addCars