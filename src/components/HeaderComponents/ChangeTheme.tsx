import { FC, useEffect } from 'react'
import styles from "../../styles/Header.module.scss"
import changeThemeDark from "../../assets/icons/changeThemeDark.png"
import changeThemeWhite from "../../assets/icons/changeThemeWhite.png"
import { useAppSelector } from '../../hooks/store'
import { useActions } from '../../hooks/useActions'


const ChangeTheme: FC = () => {
  const { theme } = useAppSelector(state => state.CurrentWeatherReducer)
  const { ChangeTheme } = useActions()

  useEffect(() => {
    const themeLocal = localStorage.getItem('theme')
    if (themeLocal) {
      ChangeTheme(themeLocal as "light" | "dark");
    }
  }, [])

  useEffect(() => {
    const root = document.querySelector(":root") as HTMLElement;
    const themeComponents = [
      "background-color",
      "currentday",
      "currentday-shadow",
      "searchField",
      "container",
      "pressure",
      "humidity",
      "windspeed",
      "sunrisesunset",
      "cloudiness",
      "uvindex",
      "titles",
      "temp",
      "windspeed-value",
      "pressure-value",
      "otherValue"
    ]

    themeComponents.forEach(component => {
      root.style.setProperty(
        `--${component}-default`,
        `var(--${component}-${theme})`
      )
    })
  }, [theme])

  return (
    <div className={styles.changeThemeContainer}>
      <img onClick={() => {
        if (theme === "dark") {
          ChangeTheme("light");
          localStorage.setItem('theme', "light")
        }
        else {
          ChangeTheme("dark");
          localStorage.setItem('theme', "dark")
        }
      }} className={styles.changeThemeIcon} alt="changeThemeIcon" src={theme === "dark" ? changeThemeWhite : changeThemeDark} />
    </div>
  )
}

export default ChangeTheme