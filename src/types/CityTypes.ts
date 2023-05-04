export interface CityQueryType {
  name: string;
  local_names?: localNamesOfCity;
  lat: number;
  lon: number;
  country: string;
  state: string;
}

interface localNamesOfCity {
  [propName: string]: string;
}