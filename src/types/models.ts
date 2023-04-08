export interface ICountry{
  name:string;
  capital:string;
  population:number;
  region:string;
  subregion:string;
  topLevelDomain:string;
  borders:any[],
  languages:ILanguage[];
  currencies:ICurrency[]
}

interface ILanguage{
    name:string
}
interface ICurrency{
    name:string
}

export interface ServerResponse<T>{
  results :T[]
}