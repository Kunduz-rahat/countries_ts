import axios from "axios";
import { AppDispatch } from "../index";
import { ALL_COUNTRIES } from "../../api/config";
import { ICountry } from "../../types/models";
import { fetchError, fetchSuccess, fetching } from "../reducers/countrySlise";

export const fetchCountries = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(fetching());
      const response = await axios<ICountry[]>(ALL_COUNTRIES);
      dispatch(fetchSuccess(response.data));
      console.log(response.data);
    } catch (e) {
      dispatch(fetchError(e as Error));
    }
  };
};
