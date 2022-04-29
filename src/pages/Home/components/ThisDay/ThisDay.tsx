import React, { useEffect, useState } from 'react';
import { GlobalSwgSelector } from '../../../../assets/icons/global/GlobalSwgSelector';
import s from './ThisDay.module.scss';
import axios from 'axios';
import { Weather } from '../../../../store/types/types';
import { listenerCount, mainModule } from 'process';


interface Props {
  weather: Weather;
}

export const ThisDay = ({ weather }: Props) => {
  


  
    return (
  <div className={s.thisday}>
     <div className={s.top_block}>        
    <div className={s.top_block_wrapper}>  
    <div className={s.this_temp}>{Math.floor(weather.current.temp_c)}°</div>
       <div className={s.this_day_name}>Today</div></div>
       <img className={s.firstimg} src={weather.current.condition.icon} />
      </div>
     <div className={s.bottom_block}> 
     <div className={s.this_city}>
       City: <span>Almaty</span>
     </div>
  </div>
  </div>
  );
};