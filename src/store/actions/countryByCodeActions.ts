import axios from "axios";
import { AppDispatch } from "../index";
import { ICountryDetail } from "../../types/models";
import {
  fetchDeatailSuccess,
  fetchDetailError,
  fetchingDetail,
} from "../reducers/countryByCodeSlise";

export const fetchCountryDetailByCode = (name: string) => {
    return async (dispatch: AppDispatch) => {
      try {
        dispatch(fetchingDetail());
        const response = await axios<ICountryDetail, any>(
          `https://restcountries.com/v2/alpha?codes=${name}`
        );
        dispatch(fetchDeatailSuccess(response.data[0]));
      } catch (e) {
        dispatch(fetchDetailError(e as Error));
      }
    };
  };
  