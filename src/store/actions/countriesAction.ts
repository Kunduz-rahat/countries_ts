import { Dispatch } from 'redux';
import axios from 'axios';
import { ALL_COUNTRIES } from '../../api/config';
import { CountriesAction, CountriesActionTypes } from '../../types/countries';

export const fetchCountries = () => {
  return async (dispatch: Dispatch<CountriesAction>) => {
    try {
      dispatch({ type: CountriesActionTypes.FETCH_COUNTRIES_REQUEST });
      const { data } = await axios(ALL_COUNTRIES);
      dispatch({
        type: CountriesActionTypes.FETCH_COUNTRIES_SUCCESS,
        payload: data,
      });
    } catch (e) {
      dispatch({
        type: CountriesActionTypes.FETCH_COUNTRIES_ERROR,
        payload: 'Произошла ошибка при загрузке данных...',
      });
    }
  };
};
