import { FC, memo } from 'react'
import styles from "../../styles/Forecast.module.scss"
import { useAppSelector } from '../../hooks/store'
import { getFilteredHourlyData } from '../../utils/GetFilteredHourlyData'
import ForeCastItem from './ForeCastItem'

interface ForeCastListProps {
  forecastType: "Today" | "Week forecast"
}

const ForeCastList: FC<ForeCastListProps> = ({ forecastType }) => {

  const { data } = useAppSelector(state => state.CurrentWeatherReducer)

  const hourlyData = getFilteredHourlyData(data.hourly);


  return (
    <div className={styles.forecastList}>
      {forecastType === "Week forecast" ? data.daily.map(item => <ForeCastItem key={item.dt} item={item} type={"daily"} />)
        : hourlyData.map(item => <ForeCastItem key={item.dt} item={item} type={"hourly"} />)
      }
    </div>
  )
}


export default memo(ForeCastList)