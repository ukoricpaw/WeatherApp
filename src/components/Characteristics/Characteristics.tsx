import { FC } from 'react'
import Pressure from './Pressure'
import styles from "../../styles/Characteristics.module.scss"
import { useAppSelector } from '../../hooks/store'
import Humidity from './Humidity'
import WindSpeed from './WindSpeed'
import SunriseSunset from './SunriseSunset'
import Cloudiness from './Cloudiness'
import UVIndex from './UVIndex'


const Characteristics: FC = () => {

  const { data } = useAppSelector(state => state.CurrentWeatherReducer)

  return (
    <section className={styles.characteristicsGrid}>
      <Pressure pressure={data.current.pressure} />
      <Humidity humidity={data.current.humidity} />
      <WindSpeed windSpeed={data.current.wind_speed} />
      <SunriseSunset sunrise={data.current.sunrise} sunset={data.current.sunset} />
      <Cloudiness clouds={data.current.clouds} />
      <UVIndex uvi={data.current.uvi} />
    </section>
  )
}

export default Characteristics