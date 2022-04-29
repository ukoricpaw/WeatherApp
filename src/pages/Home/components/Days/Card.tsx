import React from 'react';
import { GlobalSwgSelector } from '../../../../assets/icons/global/GlobalSwgSelector';
import { Day } from './Days';
import s from './Days.module.scss';

interface Props {
  day: Day;
}

export const Card = ({day}: Props) => {
    return (
  <div className={s.card}>
      <div className={s.day}>{day.day}</div>
      <div className={s.day_info}>{day.day_info}</div>
      <div className={s.img}><img src={day.icon_id}/></div>
      <div className={s.daytemp}>{day.temp_day}</div>
      <div className={s.tempnight}>{day.temp_night}</div>
      <div className={s.info}>{day.info}</div>
  </div>
  );
};