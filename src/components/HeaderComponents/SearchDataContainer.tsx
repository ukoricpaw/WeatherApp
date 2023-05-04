import { FC } from 'react'
import { useActions } from '../../hooks/useActions'
import styles from "../../styles/Header.module.scss"
import { CityQueryType } from '../../types/CityTypes'

interface searchDataProps {
  searchField: string;
  data: CityQueryType[];
  name: string;
}

const SearchDataContainer: FC<searchDataProps> = ({ searchField, data, name }) => {

  const { FetchCurrentWeatherThunk } = useActions();



  return (<>
    {searchField && <div className={styles.searchDataContainer}> {data.map(item => {
      return <div onClick={() => {
        if (item.name.toLowerCase() !== name.toLowerCase()) {
          localStorage.setItem("cityProperties", JSON.stringify({ lat: item.lat, lon: item.lon, name: item.name, country: item.country }));
          FetchCurrentWeatherThunk(item.lat, item.lon, item.name, item.country);
        }
      }} className={styles.searchItem} key={item.lat}>
        {item.name}, <span>{item.country}</span>
      </div>
    })}
    </div>}
  </>
  )
}

export default SearchDataContainer