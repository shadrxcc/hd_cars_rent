import { combineReducers } from "@reduxjs/toolkit";
import { carReducer, addCarReducer, selectedCarReducer } from "./reducer";

const rootReducer = combineReducers({
    carReducer,
    addCarReducer,
    selectedCarReducer,
})

export default rootReducer;