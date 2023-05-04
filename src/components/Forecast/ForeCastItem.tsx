import { FC } from 'react'
import GetWeatherIcon from '../../utils/GetWeatherIcon'
import { getTimeByTimeStamp } from '../../utils/GetTime'
import styles from "../../styles/Forecast.module.scss";
import { weatherHourly, weatherDaily } from "../../types/WeatherTypes"

interface weatherHourlyType {
  item: weatherHourly;
  type: "hourly";
}
interface weatherDailyType {
  item: weatherDaily;
  type: "daily";
}

type foreCastItemProps = weatherDailyType | weatherHourlyType

const ForeCastItem: FC<foreCastItemProps> = ({ item, type }) => {
  return (
    <div className={styles.forecastItem}>
      <div className={styles.forecastIconContainer}>
        <img className={styles.forecastIcon} src={GetWeatherIcon(item.weather[0].icon)} />
      </div>
      <p className={styles.forecastTemp}>{Math.floor(type === "hourly" ? item.temp : item.temp.day)} <span>&deg;C</span></p>
      <p className={styles.forecastTime}>{type === "hourly" ? getTimeByTimeStamp(item.dt)[0] : getTimeByTimeStamp(item.dt, "forecast")[1]}</p>
    </div>
  )
}

export default ForeCastItem