import {
  CountriesAction,
  CountriesActionTypes,
  CountriesState,
} from '../../types/countries';

const initialState: CountriesState = {
  countries: [],
  loading: false,
  error: '',
};

export const countriesReducer = (
  state = initialState,
  action: CountriesAction,
): CountriesState => {
  switch (action.type) {
    case CountriesActionTypes.FETCH_COUNTRIES_REQUEST:
      return { loading: true, countries: [], error: null };
    case CountriesActionTypes.FETCH_COUNTRIES_ERROR:
      return { loading: true, countries: [], error: action.payload };
    case CountriesActionTypes.FETCH_COUNTRIES_SUCCESS:
      return { loading: true, countries: action.payload, error: null };
    default:
      return state;
  }
};
