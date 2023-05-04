import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { CurrentWeatherReducer } from "./reducers/CurrentWeatherReducer"
import { SearchCityReducer } from "./reducers/SearchCityReducer"

const reducer = combineReducers({
  CurrentWeatherReducer,
  SearchCityReducer
})

export const store = createStore(reducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof reducer>
export type DispatchType = typeof store.dispatch
