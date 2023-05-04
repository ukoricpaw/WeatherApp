import { CurrentWeatherState, WeatherOwnState } from "../../types/WeatherTypes"
import { OwnFetchCurrentWeatherActionType } from "../action-creators/CurrentWeatherActions"
import { FetchWeatherEnums } from "../action-creators/CurrentWeatherActions"

const initialState: CurrentWeatherState = {
  data: {} as WeatherOwnState,
  isLoading: true,
  isError: null,
  name: "Almaty",
  theme: "light",
  country: "KZ",
}




export const CurrentWeatherReducer = (state = initialState, action: OwnFetchCurrentWeatherActionType): CurrentWeatherState => {
  switch (action.type) {
    case FetchWeatherEnums.FETCH_CURRENT_WEATHER:
      return { ...state, isLoading: true }
    case FetchWeatherEnums.FETCH_CURRENT_WEATHER_WITH_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };
    case FetchWeatherEnums.FETCH_CURRENT_WEATHER_WITH_ERROR:
      return { ...state, isLoading: false, isError: action.payload };
    case FetchWeatherEnums.CHANGE_NAME:
      return { ...state, name: action.payload }
    case FetchWeatherEnums.CHANGE_THEME:
      return { ...state, theme: action.payload }
    case FetchWeatherEnums.CHANGE_COUNTRY:
      return { ...state, country: action.payload }
    default:
      return state
  }
}