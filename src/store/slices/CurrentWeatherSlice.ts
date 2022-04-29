import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { Weather } from "../types/types";

type CurrentWeather = {
    weather: Weather;
    isloading: boolean;
    response: Response;
};

type Response = {
    status: number;
    message: string;
};

const initialState: CurrentWeather = {
    weather: {
        current:{
            temp_c: 0,
            feelslike_c: 0,
            pressure_mb: 0,
            precip_mm: 0,
            wind_kph: 0,
            condition:{
                icon: 'none',
            }
        },
        forecast:{
            forecastday:[
                {date: 'none',
                   day:
                    {
                    mintemp_c: 0,
                    condition: {
                        text: 'none',
                        icon: 'none',
                    }
                   },
               },
               {date: 'none',
                  day:{
                    maxtemp_c: 0,
                    mintemp_c: 0,
                      condition: {
                        text: 'none',
                        icon: 'none',
                },

               },
            },
            {date: 'none',
                day:{
                    maxtemp_c: 0,
                    mintemp_c: 0,
                    condition: {
                        text: 'none',
                        icon: 'none',
                    }
                }
    
              },
            //   {date: 'none',
            //     day:{
            //         maxtemp_c: 0,
            //         mintemp_c: 0,
            //         condition: {
            //             text: 'none',
            //             icon: 'none',
            //         }
            //     }
    
            //   }
         ],
        }
    },
    isloading: false,
  response: {
      status: 0,
      message: '',
  },
};

export const CurrentWeatherSlice = createSlice( {
    name: 'current_weather',
    initialState,
    reducers: {
        fetchCurrentWeather(state) {
            state.isloading = true;
        },
        fetchCurrentWeatherSuccess(state, action: PayloadAction<AxiosResponse<Weather>>) {
            state.isloading = false;
            state.weather = action.payload.data;
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText,
            }
    },
        fetchCurrentWeatherError(state, action: PayloadAction<AxiosResponse<Weather>>) {
        state.isloading = false;
        state.response = {
            status: action.payload.status,
            message: action.payload.statusText,
        }
},
    
}
})

export default CurrentWeatherSlice.reducer;
