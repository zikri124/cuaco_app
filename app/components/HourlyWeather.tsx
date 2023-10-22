import Image from "next/image"
import { Forecast, ForecastdayEntity } from "../interfaces/WeatherData"

interface Props {
    forecastday?: (ForecastdayEntity)[] | null;
}

export default function HourlyWeather({ forecastday }: Props) {
    const date: Date = new Date()
    const currentHour: number = date.getHours()
    const hourArray: number[][] = []

    for (let i = 1; i <= 8; i++) {
        if (currentHour + i > 23) {
            hourArray.push([1, currentHour + i - 24])
        } else {
            hourArray.push([0, currentHour + i])
        }
    }

    function timeConv(unixtime: number): string {
        const date2 = new Date(unixtime * 1000)
        var hour = (Number(date2.getHours()) < 10) ? "0" + date2.getHours() : date2.getHours()
        var minute = (Number(date2.getMinutes()) < 10) ? "0" + date2.getMinutes() : date2.getMinutes()
        return hour + ":" + minute
    }

    return (
        <div>
            <div className='flex justify-between mt-8'>
                <h3 className='text-lg font-semibold'>Hourly Weather</h3>
            </div>


            <div className='flex flex-row md:flex-col gap-2 mt-2 overflow-x-auto'>
                {hourArray.map((value, i) => (
                    <div key={i}>
                        <div className='flex flex-col text-sm gap-2'>
                            <div className='rounded-2xl bg-slate-600 p-4 flex flex-col md:flex-row text-center md:text-left items-center w-max md:w-full text-white'>
                                <div><Image src={"https://img.icons8.com/stickers/100/partly-cloudy-day.png"} height={44} width={44} alt='weather-logo' className='my-1' /></div>
                                <div className='md:ms-4'>
                                    <p>{date.getDate() + "/" + (date.getMonth() + 1) + " " + timeConv(Number(forecastday![value[0]].hour![value[1]].time_epoch))}&deg;C</p>
                                    <p className='font-bold'>{forecastday![value[0]].hour![value[1]].temp_c}&deg;C</p>
                                    <p>Rain {forecastday![value[0]].hour![value[1]].chance_of_rain}%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}