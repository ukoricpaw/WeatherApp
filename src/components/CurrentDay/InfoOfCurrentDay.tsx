import { FC } from 'react'
import { currentDay } from '../../types/WeatherTypes'
import styles from "../../styles/CurrentDayStyles.module.scss"
import GetWeatherIcon from '../../utils/GetWeatherIcon'

interface InfoProps {
  currentDay: currentDay;
  name: string,
  country: string
}

const InfoOfCurrentDay: FC<InfoProps> = ({ currentDay, name, country }) => {


  return (
    <div className={styles.currentDayCard}>
      <h1 className={styles.timezone}>{name}, {country}</h1>
      <div className={styles.iconContainer}>
        <img className={styles.imageOfWeatherIcon} src={GetWeatherIcon(currentDay.weather[0].icon)} />
      </div>
      <p className={styles.temp}>{Math.floor(currentDay.temp)}&deg;C</p>
      <p className={styles.currentWeatherDescription}>{currentDay.weather[0].description[0].toUpperCase()
        + currentDay.weather[0].description.slice(1)
      }</p>
      {Math.floor(currentDay.feels_like) !== Math.floor(currentDay.temp) &&
        <p className={styles.feelsLike}>Feels like <span>{Math.floor(currentDay.feels_like)}&deg; C</span></p>}
    </div>
  )
}

export default InfoOfCurrentDay