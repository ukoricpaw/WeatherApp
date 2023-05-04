import { FC } from 'react'
import styles from "../../styles/Characteristics.module.scss"
import UVIndexICon from "../../assets/icons/uvIndexIcon.png"

interface UVIndexProps {
  uvi: number;
}



const UVIndex: FC<UVIndexProps> = ({ uvi }) => {
  return (
    <div className={`${styles.uvIndexCard} ${styles.card}`}>
      <div className={styles.leftSide}>
        <h3 className={styles.uvIndexTitle}>UVIndex</h3>
        <p className={styles.uvIndexValue}>{uvi}</p>
      </div>
      <div className={styles.rightSide}>
        <img className={styles.uvIndexIcon} src={UVIndexICon} alt="uvindexIcon" />
      </div>
    </div>
  )
}

export default UVIndex