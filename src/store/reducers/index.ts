import { combineReducers } from "redux";
import { countriesReducer } from "./countriesReducer";


export const rootReducer =combineReducers({
	counties:countriesReducer
})


export type RootState = ReturnType<typeof rootReducer>