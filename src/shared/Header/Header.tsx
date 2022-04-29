import React, { useEffect, useState } from 'react';
import { GlobalSwgSelector } from '../../assets/icons/global/GlobalSwgSelector';
import s from './header.module.scss';

interface Props {
  
}


export const Header = (props: Props) => {
  // const options = [
  //   { value: 'city-1', label: 'Алматы' },
  //   { value: 'city-2', label: 'Нур-Султан' },
  //   { value: 'city-3', label: 'Караганда' },
  // ];


const colourStyles = {
  control: (styles: any) => ({
    ...styles,
    backgroundColor: 0 ? '#4f4f4f' : 'rgba(71, 147, 255, 0.2)',
    width: '194px',
     height: '37px',
    border: 'none',
    borderRadius: '10px',
    zIndex: 100,
  }),
  singleValue: (styles: any) => ({
    ...styles,
    color: 0 ? '#fff' : '#000',
  }),
}

const [theme, setTheme] = useState('light');

function changeTheme() {
  setTheme(theme === 'light' ? 'dark' : 'light');

}
  
useEffect(() => {
  const root = document.querySelector(':root') as HTMLElement;
  const components = [
    'components-background',
    'card-background',
    'card-shadow',
    'text-color',
    'body-background',
  ]
  components.forEach((component) => {
    root.style.setProperty(
      `--${component}-default`,
      `var(--${component}-${theme})`
    )
  })
}
)
  return <header className={s.header}>
      <div className={s.wrapper}>
          <div className={s.logo}><GlobalSwgSelector id='header-logo'/></div>
          <div className={s.title}>Weather</div>
      </div>
      <div className={s.wrapper}> 
      <div className={s.change_theme} onClick={changeTheme}> Change theme <GlobalSwgSelector id="change-theme"/> 
        </div> 
        {/* <Select defaultValue={options[0]} styles={colourStyles} options={options} /> */}
        </div>
  </header>
};