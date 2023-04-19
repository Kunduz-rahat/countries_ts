import axios from "axios";
import { AppDispatch } from "../index";
import {  ICountryDetail } from "../../types/models";
import { fetchDeatailSuccess, fetchDetailError, fetchingDetail } from "../reducers/countryDetailSlise";

export const fetchCountryDetail = (name:string) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(fetchingDetail());
      const response = await axios<ICountryDetail, any>(`https://restcountries.com/v2/name/${name}`);
      dispatch(fetchDeatailSuccess(response.data[0]));
      console.log(response.data);
    } catch (e) {
      dispatch(fetchDetailError(e as Error));
    }
  };
};
