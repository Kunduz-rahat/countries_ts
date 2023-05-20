import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {  ICountryRegion } from "../../types/models";

interface FilterState {
  loading: boolean;
  region: ICountryRegion[];
}

const initialState: FilterState = {
  loading: false,
   region:[]
};
 
interface FilterPayload{

}
export const filterSlise = createSlice({
  name: "filter",
  initialState,
  reducers: {
    fetching(state) {
      state.loading = true;
    },
    fetchSuccess(state, action: PayloadAction) {
      state.loading = false;
    //   state.region = action.payload
    },
  
  },
});
export const {  fetchSuccess, fetching } = filterSlise.actions;
export default filterSlise.reducer;
