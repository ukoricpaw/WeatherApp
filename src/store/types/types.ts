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
   forecast:{
       forecastday:[
           {date: string;
              day:
               {
               mintemp_c:number;
               condition: {
                   text: string;
                   icon: string;
               }
              },
          },
          {date: string;
            day:{
                maxtemp_c: number;
                mintemp_c: number;
                condition: {
                    text: string;
                    icon: string;
                }
            }

          },
          {date: string;
            day:{
                maxtemp_c: number;
                mintemp_c: number;
                condition: {
                    text: string;
                    icon: string;
                }
            }

          },
        //   {date: string;
        //     day:{
        //         maxtemp_c: number;
        //         mintemp_c: number;
        //         condition: {
        //             text: string;
        //             icon: string;
        //         }
        //     }

        //   }
    ],
   }
};
