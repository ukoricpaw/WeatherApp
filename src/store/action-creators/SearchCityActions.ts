import axios from "axios";
import { DispatchType } from "..";
import { CityQueryType } from "../../types/CityTypes";

export enum searchCityActionsEnum {
  FETCH_CITIES = "FETCH_CITIES",
  FETCH_CITIES_WITH_SUCCESS = "FETCH_CITIES_WITH_SUCCESS",
  FETCH_CITIES_WITH_ERROR = "FETCH_CITIES_WITH_ERROR",
  CHANGE_FIELD = "CHANGE_FIELD"
}

interface changeFieldActionType {
  type: searchCityActionsEnum.CHANGE_FIELD,
  payload: string;
}
interface fetchCitiesActionType {
  type: searchCityActionsEnum.FETCH_CITIES,
}
interface fetchCitiesWithSuccessActionType {
  type: searchCityActionsEnum.FETCH_CITIES_WITH_SUCCESS
  payload: CityQueryType[];
}
interface fetchCitiesWithErrorActionType {
  type: searchCityActionsEnum.FETCH_CITIES_WITH_ERROR,
  payload: string;
}


export type searchCityActionsTypes = changeFieldActionType | fetchCitiesActionType | fetchCitiesWithErrorActionType | fetchCitiesWithSuccessActionType

export const searchCityActions = {
  changeField(payload: string): changeFieldActionType {
    return { type: searchCityActionsEnum.CHANGE_FIELD, payload: payload };
  },
  fetchCities(): fetchCitiesActionType {
    return { type: searchCityActionsEnum.FETCH_CITIES }
  },
  fetchCitiesWithSuccess(payload: CityQueryType[]): fetchCitiesWithSuccessActionType {
    return { type: searchCityActionsEnum.FETCH_CITIES_WITH_SUCCESS, payload: payload }
  },
  fetchCitiesWithError(payload: string): fetchCitiesWithErrorActionType {
    return { type: searchCityActionsEnum.FETCH_CITIES_WITH_ERROR, payload: payload }
  },
  fetchCitiesThunk: (query: string) => {
    return async (dispatch: DispatchType) => {
      try {
        dispatch(searchCityActions.fetchCities());
        const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=1&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
        dispatch(searchCityActions.fetchCitiesWithSuccess(response.data));
      }
      catch (error) {
        dispatch(searchCityActions.fetchCitiesWithError("Произошла ошибка"))
      }
    }
  }
}