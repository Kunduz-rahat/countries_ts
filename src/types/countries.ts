export interface CountriesState {
  countries: any[];
  loading: boolean;
  error: string | null;
}

export enum CountriesActionTypes {
  FETCH_COUNTRIES_REQUEST = '	FETCH_COUNTRIES_REQUEST',
  FETCH_COUNTRIES_ERROR = '	FETCH_COUNTRIES_ERROR',
  FETCH_COUNTRIES_SUCCESS = '	FETCH_COUNTRIES_SUCCESS',
}

interface FetchCountiesActonError {
  type: CountriesActionTypes.FETCH_COUNTRIES_ERROR;
  payload: string;
}
interface FetchCountiesActonSuccess {
  type: CountriesActionTypes.FETCH_COUNTRIES_SUCCESS;
  payload: any[];
}
interface FetchCountiesActonRequest {
  type: CountriesActionTypes.FETCH_COUNTRIES_REQUEST;
}
export type CountriesAction =
  | FetchCountiesActonError
  | FetchCountiesActonRequest
  | FetchCountiesActonSuccess;
