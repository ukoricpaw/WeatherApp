import { FC } from 'react'
import styles from "../../styles/Characteristics.module.scss"
import humidityIcon from "../../assets/icons/humidityIcon.png"

interface HumidityProps {
  humidity: number;
}

const Humidity: FC<HumidityProps> = ({ humidity }) => {
  return (
    <section className={`${styles.humidityCard} ${styles.card}`}>
      <div className={styles.leftSide}>
        <img className={styles.humidityIcon} src={humidityIcon} alt='humidityIcon' />
      </div>
      <div className={styles.rightSide}>
        <h3 className={styles.humidityTitle}>Humidity</h3>
        <p className={styles.humidityValue}>{humidity} <span>%</span></p>
      </div>
    </section>
  )
}

export default Humidity