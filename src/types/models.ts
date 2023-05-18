export interface ICountryDetail {
  name?: string;
  capital?: string;
  population?: number;
  region?: string;
  subregion?: string;
  topLevelDomain?: string;
  borders?: any[];
  languages?: ILanguage[];
  currencies?: ICurrency[];
  flags?: IFlags;
}
export interface ICountry {
  name: string;
  flags: IFlags;
}
interface ILanguage {
  name: string;
}
interface ICurrency {
  name: string;
}
interface IFlags {
  png: string;
  svg: string;
}
