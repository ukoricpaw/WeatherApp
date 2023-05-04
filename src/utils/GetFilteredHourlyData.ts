import { weatherHourly } from "../types/WeatherTypes";

export const getFilteredHourlyData = (hourly: weatherHourly[]) => {
  let checker = 1;
  let itemOfArray = 0;
  const filteredArray: weatherHourly[] = [];
  while (checker <= 7) {
    filteredArray.push(hourly[itemOfArray]);
    checker++;
    itemOfArray += 3;
  }

  return filteredArray;
}