const BASE_URL ='https://restcountries.com/v2/';

export const ALL_COUNTRIES = BASE_URL + 'all?fields=name,capital,flags,population,region,alpha3Code';

export const COUNTRY_BY =(name:string) => BASE_URL + 'name/' + name