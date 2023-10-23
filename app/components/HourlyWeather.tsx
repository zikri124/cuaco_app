import Image from "next/image"
import { Forecast, ForecastdayEntity } from "../interfaces/WeatherData"
import HourlyWeatherCard from "./HourlyWeatherCard";

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

    return (
        <div>
            <div className='flex justify-between mt-4'>
                <h3 className='text-lg font-semibold'>Hourly Weather</h3>
            </div>

            <div className='flex flex-row gap-2 mt-2 overflow-x-auto pb-2'>
                {hourArray.map((value, i) => (
                    <div key={i}>
                        <HourlyWeatherCard weatherData={forecastday![value[0]].hour![value[1]]} />
                    </div>
                ))}
            </div>
        </div>
    )
}