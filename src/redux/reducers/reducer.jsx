import { Actiontypes } from "../action-types/actiontypes";

const initialState = {
    cars: [],
}

export const carReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case Actiontypes.SET_CARS:
          return {...state, cars:payload}
        default:
            return state;
    }
}

export const addCarReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case Actiontypes.ADD_CARS:
            return {...state, cars:payload};
            default:
                return state
    }
}

export const selectedCarReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case Actiontypes.SELECTED_CAR:
            return {...state, ...payload}
        case Actiontypes.REMOVE_CAR:
            return {};
        default:
            state;
    }
}