import {
  CountryActionTypes,
  CountryItemAction,
  CountryState,
  
} from "../../types/country";

const initialState: CountryState = {
  country:[] ,
  loading: false,
  error: "",
};

 export const countryReducer = (
  state = initialState,
  action: CountryItemAction
): CountryState => {
  switch (action.type) {
    case CountryActionTypes.FETCH_COUNTRY_REQUEST:
      return { ...state, loading:true, error:'', country:[] };
    case CountryActionTypes.FETCH_COUNTRY_ERROR:
      return { ...state, error:action.payload, country:[], loading:false };
    case CountryActionTypes.FETCH_COUNTRY_SUCCESS:
      return {...state,  loading: false, country: action.payload, error: null };
    default:
      return state;
  }
};


