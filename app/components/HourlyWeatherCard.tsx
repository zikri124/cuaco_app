import Image from "next/image"
import { HourEntity } from "../interfaces/WeatherData"
import { getWeatherImage } from "../util"

interface Props {
    weatherData: HourEntity
}

export default function HourlyWeatherCard({ weatherData }: Props) {
    return (
        <div className='flex flex-col text-sm gap-2'>
            <div className='rounded-2xl bg-slate-600 p-4 flex flex-col md:flex-row text-center md:text-left items-center w-max md:w-full text-white'>
                <div><Image src={getWeatherImage(weatherData.condition.code)} height={44} width={44} alt='weather-logo' className='my-1' /></div>
                <div className='md:ms-4'>
                    <p>{weatherData.time}</p>
                    <p className='font-bold'>{weatherData.temp_c}&deg;C</p>
                    <p>Rain {weatherData.chance_of_rain}%</p>
                </div>
            </div>
        </div>
    )
}