import { Actiontypes } from "../action-types/actiontypes";

const initialState = {
  items: [],
}

export const carReducer = (state = initialState, { type, payload}) => {
  switch (type) {
    case Actiontypes.SET_CARS:
      return {...state, items:payload};
    default:
      return state;
  };
};

export const reservationReducer = (state = initialState, { type, payload}) => {
  switch (type) {
    case Actiontypes.SET_RESERVATION:
      return {...state, items:payload};
    default:
      return state;
  };
};

export const selectedCarReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case Actiontypes.SELECTED_CAR:
      return {...state, ...payload};
    default:
      return state;
  };
};

