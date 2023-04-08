import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICountry } from "../../types/models";
import { ServerResponse } from "http";

interface CountryState {
  loading: boolean;
  error: string;
  countries: ICountry[];
}

const initialState: CountryState = {
  loading: false,
  error: "",
  countries: [],
};

export const countrySlise = createSlice({
  name: "country",
  initialState,
  reducers: {
    fetching(state) {
      state.loading = true;
    },
    fetchSuccess(state, action:PayloadAction<ICountry[]>) {
      state.loading = false;
      state.countries = action.payload

    },
    fetchError(state, action:PayloadAction<Error>) {
      state.loading = false;
      state.error = action.payload.message
    },
  },
});
export const { fetchError, fetchSuccess, fetching } = countrySlise.actions;
export default countrySlise.reducer
