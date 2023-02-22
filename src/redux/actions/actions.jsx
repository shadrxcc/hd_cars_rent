import { Actiontypes } from "../action-types/actiontypes";

export const setCars = (cars) => {
  return {
    type: Actiontypes.SET_CARS,
    payload: cars,
  };
};

export const setReservation = (cars) => {
  return {
    type: Actiontypes.SET_RESERVATION,
    payload: cars,
  };
};

export const selectedCar = (car) => {
  return {
    type: Actiontypes.SELECTED_CAR,
    payload: car,
  };
}

export const removeCar = () => {
  return {
    type: Actiontypes.REMOVE_CAR,
  };
}