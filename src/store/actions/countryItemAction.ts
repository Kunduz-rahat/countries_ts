import { Dispatch } from 'redux';
import axios from 'axios';
import { CountryActionTypes, CountryItemAction } from '../../types/country';

export const fetchCountry = (name:string) => {
  return async (dispatch: Dispatch<CountryItemAction>) => {
    try {
      dispatch({ type: CountryActionTypes.FETCH_COUNTRY_REQUEST});
      const res = await axios(`https://restcountries.com/v2/name${name}`);
      dispatch({
        type: CountryActionTypes.FETCH_COUNTRY_SUCCESS,
        payload: res.data
      });
    } catch (e) {
      dispatch({
        type: CountryActionTypes.FETCH_COUNTRY_ERROR,
        payload: 'Произошла ошибка при загрузке данных...',
      });
    }
  };
};
