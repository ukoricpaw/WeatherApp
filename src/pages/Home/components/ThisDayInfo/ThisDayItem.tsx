import React from 'react';
import { IndicatorSwgSelector } from '../../../../assets/icons/indicators/IndicatorSwgSelector';
import { Item } from './ThisDayInfo';
import s from './ThisDayInfo.module.scss';
interface Props {
    item: Item
  
}
export const ThisDayItem = ({item}: Props) => {
    const {icon_id,name,value} = item;
  return (<div className={s.item}>
      <div className={s.indicator}>
          <IndicatorSwgSelector id={icon_id}/>
      </div>
      <div className={s.indicatorname}>{name}</div>
      <div className={s.indicatorvalue}>{value}</div>
  </div>
  )
};