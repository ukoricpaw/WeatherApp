import { FC, useEffect, useState, useRef } from 'react'
import styles from "../../styles/Forecast.module.scss"
import ForeCastList from './ForeCastList'


const ForeCast: FC = () => {

  const todayRef = useRef<HTMLParagraphElement>(null)
  const weekRef = useRef<HTMLParagraphElement>(null)

  const [forecastType, setForeCastType] = useState<"Today" | "Week forecast">("Week forecast")

  useEffect(() => {
    if (forecastType === "Today") {
      todayRef.current?.classList.remove(`${styles.disabled}`)
      weekRef.current?.classList.add(`${styles.disabled}`)
    }
    else {
      todayRef.current?.classList.add(`${styles.disabled}`)
      weekRef.current?.classList.remove(`${styles.disabled}`)
    }

  }, [forecastType])

  return (
    <div className={styles.forecast}>
      <div className={styles.forecastTitles}>
        <p ref={todayRef} onClick={() => {
          setForeCastType("Today")
        }} className={`${styles.disabled} ${styles.title}`}>Today</p>
        <p ref={weekRef} onClick={() => {
          setForeCastType("Week forecast")
        }} className={`${styles.title}`}>Week forecast</p>
      </div>
      <ForeCastList forecastType={forecastType} />
    </div>
  )
}

export default ForeCast