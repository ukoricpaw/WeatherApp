import { FC } from 'react'
import styles from "../../styles/Characteristics.module.scss"
import cloudinessIcon from "../../assets/icons/cloudinessIcon.png"
import cloudinessDarkIcon from "../../assets/icons/cloudinessDarkIcon.png"
import { useAppSelector } from '../../hooks/store';

interface CloudProps {
  clouds: number;
}

const Cloudiness: FC<CloudProps> = ({ clouds }) => {

  const { theme } = useAppSelector(state => state.CurrentWeatherReducer)

  return (
    <div className={`${styles.cloudinessCard} ${styles.card}`}>
      <div className={styles.leftSide}>
        <h3 className={styles.cloudinessTitle}>Cloudiness</h3>
        <p className={styles.cloudinessValue}>{clouds} <span>%</span></p>
      </div>
      <div className={styles.rightSide}>
        <img className={styles.cloudinessIcon} src={theme === "dark" ? cloudinessDarkIcon : cloudinessIcon} alt="cloudinessIcon" />
      </div>
    </div>
  )
}

export default Cloudiness