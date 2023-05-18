import { combineReducers, configureStore } from "@reduxjs/toolkit";
import countryReducer from "./reducers/countrySlise";
import countryDetailReducer from "./reducers/countryDetailSlise";

const rootReducer = combineReducers({
  country: countryReducer,
  countryDetail: countryDetailReducer,
});

export function setupStore() {
  return configureStore({
    reducer: rootReducer,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
