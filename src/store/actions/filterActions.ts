import axios from "axios";
import { AppDispatch } from "../index";
import { ICountryFilter} from "../../types/models";
import { fetchFilterError, fetchFilterSuccess, fetchingFilter} from "../reducers/filterSlice";

export const filterCountriesByAsia = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(fetchingFilter());
      const response = await axios<ICountryFilter[]>(`https://restcountries.com/v2/region/asia`);
      dispatch(fetchFilterSuccess(response.data));
      console.log(response.data);
    } catch (e) {
      dispatch(fetchFilterError(e as Error));
    }
  };
};

export const filterCountriesByEurope = () => {
    return async (dispatch: AppDispatch) => {
      try {
        dispatch(fetchingFilter());
        const response = await axios<ICountryFilter[]>(`https://restcountries.com/v2/region/europe`);
        dispatch(fetchFilterSuccess(response.data));
        console.log(response.data);
      } catch (e) {
        dispatch(fetchFilterError(e as Error));
      }
    };
  };

  export const filterCountriesByAfrica = () => {
    return async (dispatch: AppDispatch) => {
      try {
        dispatch(fetchingFilter());
        const response = await axios<ICountryFilter[]>(`https://restcountries.com/v2/region/africa`);
        dispatch(fetchFilterSuccess(response.data));
        console.log(response.data);
      } catch (e) {
        dispatch(fetchFilterError(e as Error));
      }
    };
  };

  export const filterCountriesByAmerica = () => {
    return async (dispatch: AppDispatch) => {
      try {
        dispatch(fetchingFilter());
        const response = await axios<ICountryFilter[]>(`https://restcountries.com/v2/region/americas`);
        dispatch(fetchFilterSuccess(response.data));
        console.log(response.data);
      } catch (e) {
        dispatch(fetchFilterError(e as Error));
      }
    };
  };