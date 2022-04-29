import React from 'react';
import { Weather } from '../../../../store/types/types';
import { Card } from './Card';
import s from './Days.module.scss';
// import { Tabs } from './Tabs';

interface Props {
  weather: Weather;
}
export interface Day {
    day: string;
    day_info: string;
    icon_id: string;
    temp_day: string;
    temp_night: string;
    info: string;
  }

export const Days = ({weather}: Props) => {
    const days: Day[] = [
        {
          day: 'Today',
          day_info: `${weather.forecast.forecastday[0].date}`,
          icon_id: `${weather.forecast.forecastday[0].day.condition.icon}`,
          temp_day: `${Math.floor(weather.current.temp_c)}°`,
          temp_night: `${Math.floor(weather.forecast.forecastday[0].day.mintemp_c)}°`,
          info: `${weather.forecast.forecastday[0].day.condition.text}`,
        },
        {
          day: 'Tomorrow',
          day_info: `${weather.forecast.forecastday[1].date}`,
          icon_id: `${weather.forecast.forecastday[1].day.condition.icon}`,
          temp_day: `${Math.floor(weather.forecast.forecastday[1].day.maxtemp_c)}°`,
          temp_night: `${Math.floor(weather.forecast.forecastday[1].day.mintemp_c)}°`,
          info: `${weather.forecast.forecastday[1].day.condition.text}`,
        },
        {
          day: `${weather.forecast.forecastday[2].date}`,
          day_info: ``,
          icon_id: `${weather.forecast.forecastday[2].day.condition.icon}`,
          temp_day: `${Math.floor(weather.forecast.forecastday[2].day.maxtemp_c)}°`,
          temp_night: `${Math.floor(weather.forecast.forecastday[2].day.mintemp_c)}°`,
          info: `${weather.forecast.forecastday[2].day.condition.text}`,
        },
        // {
        //   day: 'Чт',
        //   day_info: `${weather.forecast.forecastday[3].date}`,
        //   icon_id: `${weather.forecast.forecastday[3].day.condition.text}`,
        //   temp_day: `${Math.floor(weather.forecast.forecastday[3].day.maxtemp_c)}°`,
        //   temp_night: `${Math.floor(weather.forecast.forecastday[3].day.mintemp_c)}°`,
        //   info: `${weather.forecast.forecastday[3].day.condition.text}`,
        // },
      ]
    return (
    <>
    {/* <Tabs /> */}
  <div className={s.days}>
      {days.map((day: Day) => (
          <Card day={day} key={day.day} />
        ))}

  </div>
  </>
  );
};