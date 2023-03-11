export interface CountryState {
    country: {};
    loading: boolean;
    error: string | null;
  }
  
  export enum CountryActionTypes {
    FETCH_COUNTRY_REQUEST = 'FETCH_COUNTRY_REQUEST',
    FETCH_COUNTRY_ERROR = '	FETCH_COUNTRY_ERROR',
    FETCH_COUNTRY_SUCCESS = 'FETCH_COUNTRY_SUCCESS',
  }
  
  interface FetchCountyItemActonError {
    type: CountryActionTypes.FETCH_COUNTRY_ERROR;
    payload: string;
  }
  interface FetchCountyItemActonSuccess {
    type: CountryActionTypes.FETCH_COUNTRY_SUCCESS;
    payload: {};
  }
  interface FetchCountyItemActonRequest {
    type: CountryActionTypes.FETCH_COUNTRY_REQUEST;
  }
  export type CountryItemAction =FetchCountyItemActonError | FetchCountyItemActonRequest | FetchCountyItemActonSuccess
  
  