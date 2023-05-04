import { FC } from 'react'
import styles from "../../styles/Characteristics.module.scss"
import windSpeedDarkIcon from "../../assets/icons/windspeedDarkIcon.png"

interface WindSpeedProps {
  windSpeed: number;
}

const WindSpeed: FC<WindSpeedProps> = ({ windSpeed }) => {



  return (
    <div className={`${styles.windSpeedCard} ${styles.card}`}>
      <div className={styles.leftSide}>
        <img className={styles.windSpeedIcon} src={windSpeedDarkIcon} alt='windSpeedIcon' />
      </div>
      <div className={styles.rightSide}>
        <h3 className={styles.windSpeedTitle}>Wind Speed</h3>
        <p className={styles.windSpeedValue}>{windSpeed} <span>m/s</span></p>
      </div>
    </div>
  )
}

export default WindSpeed