import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICountryFilter } from "../../types/models";

interface FilterState {
  loading: boolean;
  region: ICountryFilter[];
  error: string;
}

const initialState: FilterState = {
  loading: false,
  region: [],
  error: "",
};

export const filterSlise = createSlice({
  name: "filter",
  initialState,
  reducers: {
    fetchingFilter(state) {
      state.loading = true;
    },
    fetchFilterSuccess(state, action: PayloadAction<ICountryFilter[]>) {
      state.loading = false;
      state.region = action.payload;
    },
    fetchFilterError(state, action: PayloadAction<Error>) {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});
export const { fetchFilterError, fetchFilterSuccess, fetchingFilter } =
  filterSlise.actions;
export default filterSlise.reducer;
