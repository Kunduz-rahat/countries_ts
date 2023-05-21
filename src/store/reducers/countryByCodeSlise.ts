import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICountryDetail } from "../../types/models";

interface CountryByCodeState {
  loading: boolean;
  error: string;
  country: ICountryDetail | null;
}

const initialState: CountryByCodeState = {
  loading: false,
  error: "",
  country: null,
};

export const countryByCodeSlise = createSlice({
  name: "countryByCode",
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
  countryByCodeSlise.actions;
export default countryByCodeSlise.reducer;
