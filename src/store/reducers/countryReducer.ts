import {
  CountryActionTypes,
  CountryItemAction,
  CountryState,
} from "../../types/country";

const initialState: CountryState = {
  country: [],
  loading: false,
  error: "",
};

 export const countryReducer = (
  state = initialState,
  action: CountryItemAction
): CountryState => {
  switch (action.type) {
    case CountryActionTypes.FETCH_COUNTRY_REQUEST:
      return { loading: true, country: [], error: null };
    case CountryActionTypes.FETCH_COUNTRY_ERROR:
      return { loading: false, country: [], error: action.payload };
    case CountryActionTypes.FETCH_COUNTRY_SUCCESS:
      return { loading: false, country: action.payload, error: null };
    default:
      return state;
  }
};


