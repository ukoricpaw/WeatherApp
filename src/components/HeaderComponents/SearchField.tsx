import { FC, useEffect } from 'react'
import styles from "../../styles/Header.module.scss"
import darkSearchIcon from "../../assets/icons/darkSearchIcon.png"
import whiteSearchIcon from "../../assets/icons/whiteSearchIcon.png"
import { useAppSelector } from '../../hooks/store'
import { useActions } from '../../hooks/useActions'
import SearchDataContainer from './SearchDataContainer'

const SearchField: FC = () => {

  const { searchField, data } = useAppSelector(state => state.SearchCityReducer);
  const ownData = useAppSelector(state => state.CurrentWeatherReducer.data)
  const theme = useAppSelector(state => state.CurrentWeatherReducer.theme)
  const name = useAppSelector(state => state.CurrentWeatherReducer.name)
  const {
    changeField,
    fetchCitiesThunk,
    fetchCitiesWithSuccess, } = useActions()


  useEffect(() => {
    changeField("");

    return (() => {
      fetchCitiesWithSuccess([]);
    })
  }, [ownData])

  useEffect(() => {
    if (searchField.trim().length > 1) {
      fetchCitiesThunk(searchField)
    }
    else {
      fetchCitiesWithSuccess([]);
    }
  }, [searchField])




  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchFieldContainer}>
        <img className={styles.searchIcon} alt="searchIcon" src={theme === "dark" ? whiteSearchIcon : darkSearchIcon} />
        <input autoComplete='on' value={searchField} placeholder="Search your city" onChange={(event) => {
          changeField(event.target.value);
        }} className={styles.searchField} type="text" />
      </div>
      {data.length !== 0 && <SearchDataContainer data={data} name={name} searchField={searchField} />}
    </div>
  )
}

export default SearchField