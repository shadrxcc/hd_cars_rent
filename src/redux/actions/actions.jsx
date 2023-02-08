import { getCars } from "../api";
import { Actiontypes } from "../action-types/actiontypes";

export const setCars = (cars) => {
  return {
    type: Actiontypes.SET_CARS,
    payload: items,
  };
};

export const setReservation = (cars) => {
  return {
    type: Actiontypes.SET_RESERVATION,
    payload: items,
  };
};

export const selectedCar = (car) => {
  return {
    type: Actiontypes.SELECTED_CAR,
    payload: items,
  };
}

export const removeCar = () => {
  return {
    type: Actiontypes.REMOVE_CAR,
  };
}