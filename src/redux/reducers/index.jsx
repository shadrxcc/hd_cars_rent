import { combineReducers } from "@reduxjs/toolkit";
import { carReducer, selectedCarReducer, reservationReducer } from "./reducer";

const rootReducer = combineReducers({
    carReducer,
    selectedCarReducer,
    reservationReducer
})

export default rootReducer;