export type countryDataType = {
  date: string;
  newConfirmed: number;
  totalConfirmed: number;
  newRecovered: number;
  totalRecovered: number;
};

export type TopPageType = {
  countriesJson: CountriesJsonType;
  setCountry: React.Dispatch<React.SetStateAction<string>>;
  countryData: countryDataType;
  loading: boolean;
};

export type SelectorType = {
  setCountry: React.Dispatch<React.SetStateAction<string>>;
  countriesJson: CountriesJsonType;
};

export type ResultsType = {
  countryData: countryDataType;
  loading: boolean;
};

interface SingleCountriesDataType {
  Country: string;
  NewConfirmed: number;
  TotalConfirmed: number;
}

export interface AllCountriesDataType extends Array<SingleCountriesDataType> {}

type CountriesJsonType = {
  Country: string;
  Slug: string;
}[];

export interface WorldPageType {
  allCountriesData: Array<SingleCountriesDataType>;
}

export interface CardType {
  allCountriesData: Array<SingleCountriesDataType>;
}
