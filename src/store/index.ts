import { combineReducers, configureStore } from "@reduxjs/toolkit";
import countryReducer from "./reducers/countrySlise";

const rootReducer = combineReducers({
  country:countryReducer,
});

export function setupStore() {
  return configureStore({
    reducer: rootReducer,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
