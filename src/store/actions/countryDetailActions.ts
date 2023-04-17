import axios from "axios";
import { AppDispatch } from "../index";
import {  ICountryDetail } from "../../types/models";
import { fetchDeatailSuccess, fetchDetailError, fetchingDetail } from "../reducers/countryDetailSlise";

export const fetchCountryDetail = (name:string) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(fetchingDetail());
      const response = await axios<ICountryDetail>(`https://restcountries.com/v2/name/${name}`);
      dispatch(fetchDeatailSuccess(response.data));
      console.log(response.data);
    } catch (e) {
      dispatch(fetchDetailError(e as Error));
    }
  };
};
