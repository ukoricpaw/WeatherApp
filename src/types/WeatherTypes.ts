export interface CurrentWeatherState {
  data: WeatherOwnState
  isLoading: boolean;
  isError: null | string;
  name: string,
  theme: "light" | "dark",
  country: string;
}

export interface WeatherOwnState {

  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: string;
  current: currentDay;
  minutely: weatherMinutely[];
  hourly: weatherHourly[];
  daily: weatherDaily[];

}

interface weatherDayState {
  dt: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  weather: weatherCurrentDayState[];
}

export interface currentDay extends weatherDayState {
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
}

type weatherCurrentDayState = {
  id: number;
  main: string;
  description: string;
  icon: string;
}

type weatherMinutely = {
  dt: number;
  precipitation: number;

}

export interface weatherHourly extends weatherDayState {
  pop: number;
  wind_gust: number;
  temp: number;
  feels_like: number;

}

// WeatherDailyType


export interface weatherDaily extends weatherDayState {
  moonset: number;
  moonrise: number;
  moon_phase: number;
  rain: number;
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  };
  feels_like: {
    day: number;
    night: number;
    eve: number;
    morn: number;
  }
}
