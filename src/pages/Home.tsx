import React, { FC, useEffect } from 'react'
import { useAppSelector } from '../hooks/store'
import { useActions } from '../hooks/useActions';
import InfoOfCurrentDay from '../components/CurrentDay/InfoOfCurrentDay';
import styles from "../styles/HomeStyles.module.scss"
import Header from '../components/HeaderComponents/Header';
import { getTimeByTimeStamp } from '../utils/GetTime';
import Characteristics from '../components/Characteristics/Characteristics';
import ForeCast from '../components/Forecast/ForeCast';
import Map from '../components/Characteristics/Map';

const Home: FC = () => {
  const { data, isLoading, isError, name, country } = useAppSelector(state => state.CurrentWeatherReducer)
  const { FetchCurrentWeatherThunk } = useActions();


  useEffect(() => {
    const cityProps = localStorage.getItem("cityProperties");
    if (cityProps) {
      const properties = JSON.parse(cityProps);
      FetchCurrentWeatherThunk(properties.lat, properties.lon, properties.name, properties.country);
    }
    else {
      FetchCurrentWeatherThunk();
    }
  }, [])

  if (isLoading) {
    return <></>
  }
  if (isError) {
    return <>{isError}</>
  }

  return (
    <main className={styles.homeWrapper}>
      <InfoOfCurrentDay country={country} name={name} currentDay={data.current} />
      <div className={styles.contentWrapper}>
        <div className={styles.rightSection}>
          <Header />
          <h2 className={styles.todayTitle}>Today:
            <span className={styles.day}>{getTimeByTimeStamp(data.current.dt)[1]}</span> -
            <span className={styles.time}>{getTimeByTimeStamp(data.current.dt)[0]}</span></h2>
          <div className={styles.ownContent}>
            <Characteristics />
            <Map lat={data.lat} lon={data.lon} />
          </div>
          <ForeCast />
        </div>
      </div>
    </main>
  )
}

export default Home