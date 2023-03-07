import { Dispatch } from "redux"
import { CountriesAction, CountriesActionTypes } from "../../types/countries"

export const fetchCountries = ()=>{
	return async (dispatch:Dispatch<CountriesAction>)=>{
try{
dispatch({type:CountriesActionTypes.FETCH_COUNTRIES_REQUEST})
const data = await axios
}catch(e){
	dispatch({type:CountriesActionTypes.FETCH_COUNTRIES_ERROR, payload:"Произошла ошибка при загрузке данных..."})
}
	}
}