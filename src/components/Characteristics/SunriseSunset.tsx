import { FC } from 'react'
import styles from "../../styles/Characteristics.module.scss"
import sunsetIcon from "../../assets/icons/sunsetIcon.png"
import sunriseIcon from "../../assets/icons/sunriseIcon.png"
import { getTimeByTimeStamp } from '../../utils/GetTime'

interface SunriseSunsetProps {
  sunrise: number;
  sunset: number;
}

const SunriseSunset: FC<SunriseSunsetProps> = ({ sunrise, sunset }) => {
  return (
    <div className={`${styles.sunriseSunsetCard} ${styles.card}`}>
      <div className={styles.sunriseSunsetContent}>
        <div className={styles.leftSide}>
          <div className={styles.sunriseWrapper}>
            <h3 className={styles.sunriseSunsetTitle}>Sunrise</h3>
            <div className={styles.sunriseContainer}>
              <img className={styles.sunriseIcon} src={sunriseIcon} alt="sunriseIcon" />
            </div>
          </div>
          <div className={styles.sunsetWrapper}>
            <h3 className={styles.sunriseSunsetTitle}>Sunset</h3>
            <div className={styles.sunsetContainer}>
              <img className={styles.sunsetIcon} src={sunsetIcon} alt="sunsetIcon" />
            </div>
          </div>
        </div>
        <div className={styles.rightSide}>
          <p className={styles.sunriseValue}>{getTimeByTimeStamp(sunrise)[0]}</p>
          <p className={styles.sunsetValue}>{getTimeByTimeStamp(sunset)[0]}</p>
        </div>
      </div>
    </div>
  )
}

export default SunriseSunset