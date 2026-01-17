import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { contactReducer } from "./contact/contactSlice";

const rootReducer = combineReducers({
clientContact: contactReducer
})

export const store = configureStore({
    reducer: rootReducer
})

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];