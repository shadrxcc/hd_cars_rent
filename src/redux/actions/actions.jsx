import addCars from "../api";
import { Actiontypes } from "../action-types/actiontypes";


const addCar = (car) => async (dispatch) => {
  const received = await addCars(car);
  if (received) {
    dispatch({
        type: Actiontypes.ADD_CARS,
        payload: received,
    })
  }
}

export default addCar

export const getCar = (cars) => {
    return {
        type: Actiontypes.SET_CARS,
        payload: cars,
    }
}

export const selectedCar = (car) => {
    return {
        type: Actiontypes.SELECTED_CAR,
        payload: car
    }
}

export const removeCar = (car) => {
    return {
       type: Actiontypes.REMOVE_CAR,
       payload: car,
    }
}