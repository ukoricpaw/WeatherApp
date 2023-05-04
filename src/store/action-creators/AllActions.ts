import { CurrentWeatherActions } from "./CurrentWeatherActions"
import { searchCityActions } from "./SearchCityActions"

export const AllActions = {
  ...CurrentWeatherActions,
  ...searchCityActions
}