import { combineReducers, configureStore } from "@reduxjs/toolkit";
import countryReducer from "./reducers/countrySlise";
import countryDetailReducer from "./reducers/countryDetailSlise";
import filterReducer from "./reducers/filterSlice";

const rootReducer = combineReducers({
  country: countryReducer,
  countryDetail: countryDetailReducer,
  filter: filterReducer,

});

export function setupStore() {
  return configureStore({
    reducer: rootReducer,
  });
}

export type RootState = ReturnType<typeof rootReducer>; //
export type AppStore = ReturnType<typeof setupStore>; // делает типы, в итоге возврщает функцию
export type AppDispatch = AppStore["dispatch"];
