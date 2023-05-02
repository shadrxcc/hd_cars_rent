import { Actiontypes } from "../action-types/actiontypes";

const initialState = {
  cars: [],
}

export const carReducer = (state = initialState, { type, payload}) => {
  switch (type) {
    case Actiontypes.SET_CARS:
      return {...state, cars:payload};
    default:
      return state;
  };
};

export const reservationReducer = (state = initialState, { type, payload}) => {
  switch (type) {
    case Actiontypes.SET_RESERVATION:
      return {...state, cars:payload};
    default:
      return state;
  };
};

export const selectedCarReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case Actiontypes.SELECTED_CAR:
      return {...state, ...payload};
      case Actiontypes.REMOVE_CAR:
        return {}
    default:
      return state;
  };
};

