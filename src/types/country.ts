// export interface ICountry{
//   name:string;
//   capital:string;
//   population:number;
//   region:string;

// }
export interface CountryState {
  country: any[];
  loading: boolean;
  error: string | null;
}

export enum CountryActionTypes {
  FETCH_COUNTRY_REQUEST = "FETCH_COUNTRY_REQUEST",
  FETCH_COUNTRY_ERROR = "FETCH_COUNTRY_ERROR",
  FETCH_COUNTRY_SUCCESS = "FETCH_COUNTRY_SUCCESS",
}

interface FetchCountyItemActonError {
  type: CountryActionTypes.FETCH_COUNTRY_ERROR;
  payload: string;
}
interface FetchCountyItemActonSuccess {
  type: CountryActionTypes.FETCH_COUNTRY_SUCCESS;
  payload: any[];
}
interface FetchCountyItemActonRequest {
  type: CountryActionTypes.FETCH_COUNTRY_REQUEST;
}
export type CountryItemAction =
  | FetchCountyItemActonError
  | FetchCountyItemActonRequest
  | FetchCountyItemActonSuccess;
