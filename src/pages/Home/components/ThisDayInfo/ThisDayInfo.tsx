import React from 'react';
import s from './ThisDayInfo.module.scss';
import cloud from '../../../../assets/images/cloud.png'
import { ThisDayItem } from './ThisDayItem';
import { Weather } from '../../../../store/types/types';

interface Props {
  weather: Weather;
}
export interface Item {
  icon_id: string;
  name: string;
  value: string;
}
export const ThisDayInfo = ({ weather }: Props) => {

  const items = [
    {
      icon_id: 'temp',
      name: 'Temperature',
      value: `${weather.current.temp_c}° - feels like ${weather.current.feelslike_c}°`,
    },
    {
      icon_id: 'pressure',
      name: 'Pressure',
      value: `${weather.current.pressure_mb} mb`,
    },
    {
      icon_id: 'precipitation',
      name: 'Precipitation',
      value: `${weather.current.precip_mm} mm`,
    },
    {
      icon_id: 'wind',
      name: 'Wind',
      value: `${weather.current.wind_kph} kph`,
    },
  ];

  return <div className={s.thisdayinfo}>
    <div className={s.thisdayinfoitems}>
      {items.map((item:Item) => (
        <ThisDayItem item={item}/>
      ))}
    </div>
    <img className={s.cloudimg} src={cloud} alt="облако" />
  </div>
};