#__Weather App__

***If you live in Almaty, then this application will come in handy more than ever!***

![mygif](https://pa1.narvii.com/7818/1753e483430947a18aeddd5d4a294a6f11f21452r1-540-304_hq.gif)

---
To start the program, you need to enter in the console:

---
```
yarn start
```
---
##Application functionality :relaxed:
---
*The application makes a forecast for 4 days, including today. Displays rainfall as well as wind speed.*
*The application displays the number of degrees Celsius during the day and night about other days.*
**There is a possibility to change the theme of the application. From light to dark or vice versa.**

---
###How does this application work? :dancer:
---
The application is based on ***React* TypeScript**. The library **Axios** has been applied

The design is made thanks to the module **SCSS**, designed to increase the abstraction level of CSS code and simplify cascading style sheet files.

**The program extracts information from API**

*This can be demonstrated by the following code example:*

```typescript
export type Weather = {
   current:{
       temp_c: number;
       feelslike_c: number;
       pressure_mb: number;
       precip_mm: number;
       wind_kph: number;
       condition:{
           icon: string;
       }
   }
   ...
}
```

```typescript
export const Days = ({weather}: Props) => {
    const days: Day[] = [
        {
          day: 'Today',
          day_info: `${weather.forecast.forecastday[0].date}`,
          icon_id: `${weather.forecast.forecastday[0].day.condition.text}`,
          temp_day: `${weather.current.temp_c}°`,
          temp_night: `${weather.forecast.forecastday[0].day.mintemp_c}°`,
          info: `${weather.forecast.forecastday[0].day.condition.text}`,
        },
```

---

Changing the theme works with the *useEffect* hook. This prevents a bug related to the fact that the theme was not switched immediately after the button was pressed.

---

```typescript
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
```
###The business task of the application.
---
- Using the most accurate API
- Providing information as accurate as possible.
- Work as productively as possible
---
**Thanks for reading. Good luck using the app!**