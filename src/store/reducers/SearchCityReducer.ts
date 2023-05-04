import { searchCityActionsTypes } from "../action-creators/SearchCityActions";
import { searchCityActionsEnum } from "../action-creators/SearchCityActions";

import { CityQueryType } from "../../types/CityTypes";


interface SearchState {
  searchField: string;
  isLoading: boolean;
  error: null | string;
  data: CityQueryType[];
}


const initialState: SearchState = {
  searchField: "",
  isLoading: true,
  error: null,
  data: []
}



export const SearchCityReducer = (state = initialState, action: searchCityActionsTypes): SearchState => {
  switch (action.type) {
    case searchCityActionsEnum.CHANGE_FIELD:
      return { ...state, searchField: action.payload };
    case searchCityActionsEnum.FETCH_CITIES:
      return { ...state, isLoading: true };
    case searchCityActionsEnum.FETCH_CITIES_WITH_ERROR:
      return { ...state, isLoading: false, error: action.payload }
    case searchCityActionsEnum.FETCH_CITIES_WITH_SUCCESS:
      return { ...state, isLoading: false, data: action.payload }
    default:
      return state;
  }
}