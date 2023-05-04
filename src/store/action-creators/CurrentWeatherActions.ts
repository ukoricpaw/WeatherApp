import { WeatherOwnState } from "../../types/WeatherTypes";
import { DispatchType } from "..";
import { api } from "../../axios/api";


export enum FetchWeatherEnums {
  FETCH_CURRENT_WEATHER = "FETCH_CURRENT_WEATHER",
  FETCH_CURRENT_WEATHER_WITH_SUCCESS = "FETCH_CURRENT_WEATHER_WITH_SUCCESS",
  FETCH_CURRENT_WEATHER_WITH_ERROR = "FETCH_CURRENT_WEATHER_WITH_ERROR",
  CHANGE_NAME = "CHANGE_NAME",
  CHANGE_THEME = "CHANGE_THEME",
  CHANGE_COUNTRY = "CHANGE_COUNTRY",
}



interface FetchCurrentWeatherActionType {
  type: FetchWeatherEnums.FETCH_CURRENT_WEATHER;
}
interface FetchCurrentWeatherWithSuccessActionType {
  type: FetchWeatherEnums.FETCH_CURRENT_WEATHER_WITH_SUCCESS;
  payload: WeatherOwnState;
}
interface FetchCurrentWeatheWithErrorActionType {
  type: FetchWeatherEnums.FETCH_CURRENT_WEATHER_WITH_ERROR;
  payload: string;
}
interface ChangeNameActionType {
  type: FetchWeatherEnums.CHANGE_NAME;
  payload: string;
}
interface ChangeCountryActionType {
  type: FetchWeatherEnums.CHANGE_COUNTRY;
  payload: string;
}
interface ChangeThemeActionType {
  type: FetchWeatherEnums.CHANGE_THEME;
  payload: "light" | "dark";
}

export type OwnFetchCurrentWeatherActionType =
  FetchCurrentWeatherActionType |
  FetchCurrentWeatheWithErrorActionType |
  FetchCurrentWeatherWithSuccessActionType | ChangeNameActionType | ChangeThemeActionType | ChangeCountryActionType

export const CurrentWeatherActions = {

  FetchCurrentWeather: (): FetchCurrentWeatherActionType => {
    return {
      type: FetchWeatherEnums.FETCH_CURRENT_WEATHER
    }

  },
  FetchCurrentWeatherWithSuccess: (payload: WeatherOwnState): FetchCurrentWeatherWithSuccessActionType => {
    return {
      type: FetchWeatherEnums.FETCH_CURRENT_WEATHER_WITH_SUCCESS,
      payload: payload
    }

  },
  FetchCurrentWeatherWithError: (payload: string): FetchCurrentWeatheWithErrorActionType => {
    return {
      type: FetchWeatherEnums.FETCH_CURRENT_WEATHER_WITH_ERROR,
      payload: payload
    }
  },
  ChangeName: (payload: string): ChangeNameActionType => {
    return {
      type: FetchWeatherEnums.CHANGE_NAME,
      payload: payload,
    }
  },
  ChangeCountry: (payload: string): ChangeCountryActionType => {
    return {
      type: FetchWeatherEnums.CHANGE_COUNTRY,
      payload: payload,
    }
  },
  ChangeTheme: (payload: "light" | "dark"): ChangeThemeActionType => {
    return {
      type: FetchWeatherEnums.CHANGE_THEME,
      payload: payload,
    }
  },
  FetchCurrentWeatherThunk: (lat?: number, lon?: number, name?: string, country?: string) => {
    return async (dispatch: DispatchType) => {
      try {
        dispatch(CurrentWeatherActions.FetchCurrentWeather())
        const response = await api.get<WeatherOwnState>(`onecall?lat=${lat ? lat : `43.23`}&lon=${lon ? lon : `76.88`}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
        name && dispatch(CurrentWeatherActions.ChangeName(name));
        country && dispatch(CurrentWeatherActions.ChangeCountry(country));
        dispatch(CurrentWeatherActions.FetchCurrentWeatherWithSuccess(response.data))
      }
      catch (error) {
        dispatch(CurrentWeatherActions.FetchCurrentWeatherWithError("Произошла ошибка"))
      }
    }
  }
}