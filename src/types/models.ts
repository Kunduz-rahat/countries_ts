export interface ICountry{
  name:string;
  capital:string;
  population:number;
  region:string;
  subregion:string;
  topLevelDomain:string;
  borders:any[],
  languages:ILanguage[];
  currencies:ICurrency[];
  flags:IFlags
}

interface ILanguage{
    name:string
}
interface ICurrency{
    name:string
}
interface IFlags{
  png:string;
  svg:string
}
// export interface ServerResponse<T>{
// data:T[]
// }