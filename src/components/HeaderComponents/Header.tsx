import { FC } from 'react'
import SearchField from './SearchField'
import styles from "../../styles/Header.module.scss"
import ChangeTheme from './ChangeTheme'

const Header: FC = () => {
  return (
    <header className={styles.headerContainer}>
      <SearchField />
      <ChangeTheme />
    </header>
  )
}

export default Header