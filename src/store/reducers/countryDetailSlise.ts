import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICountryDetail } from "../../types/models";

interface CountryDetailState {
  loading: boolean;
  error: string;
  country: ICountryDetail | null;
}

const initialState: CountryDetailState = {
  loading: false,
  error: "",
  country: null,
};

export const countryDetailSlise = createSlice({
  name: "countryDetail",
  initialState,
  reducers: {
    fetchingDetail(state) {
      state.loading = true;
    },
    fetchDeatailSuccess(state, action: PayloadAction<ICountryDetail>) {
      state.loading = false;
      state.country = action.payload;
    },
    fetchDetailError(state, action: PayloadAction<Error>) {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});
export const { fetchDeatailSuccess, fetchDetailError, fetchingDetail } =
  countryDetailSlise.actions;
export default countryDetailSlise.reducer;
