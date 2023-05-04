import { FC } from 'react'
import styles from "../../styles/Characteristics.module.scss"
import pressureIcon from "../../assets/icons/pressureIcon.png"

interface PressureProps {
  pressure: number;
}

const Pressure: FC<PressureProps> = ({ pressure }) => {

  return (
    <div className={`${styles.pressureCard} ${styles.card}`}>
      <div className={styles.leftSide}>
        <h3 className={styles.pressureTitle}>Pressure</h3>
        <p className={styles.pressureValue}>{pressure} <span>hPa</span></p>
      </div>
      <div className={styles.rightSide}>
        <img className={styles.pressureIcon} src={pressureIcon} alt="pressureIcon" />
      </div>
    </div>
  )
}

export default Pressure