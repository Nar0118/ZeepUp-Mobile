export interface IState {
  id: number;
  name: string;
  country_id: number;
  country_code: string;
  country_name: string;
  state_code: string;
  type: null;
  latitude: string;
  longitud: string;
}

export interface ICity {
  id: number;
  name: string;
  state_id: number;
  state_code: string;
  state_name: string;
  country_id: number;
  country_code: string;
  country_name: string;
  wikiDataId: string;
  latitude: string;
  longitud: string;
}

export interface TransformedCityData {
  label: string;
  value: string;
  stateName: string;
}
