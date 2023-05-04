const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const shortDays = ["Sun.", "Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat."]


export const getTimeByTimeStamp = (timestamp: number, type: "forecast" | undefined = undefined) => {
  const date = new Date(timestamp * 1000);
  const myTime =
    `${date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()}:
  ${date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}`
  return [myTime, type ? shortDays[date.getDay()] : days[date.getDay()]];
}