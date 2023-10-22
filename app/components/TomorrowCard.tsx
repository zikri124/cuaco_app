import Image from "next/image"
import { ForecastdayEntity } from "../interfaces/WeatherData"

interface Props {
    forecastday?: (ForecastdayEntity)[] | null;
    colW: number
}

export default function TomorrowCard({ forecastday, colW }: Props) {
    return (
        <div className={'card bg-orange-200 col-span-full lg:col-span-' + colW} >
            <div className='flex flex-row'>
                <h3 className='text-xl font-bold'>Tomorrow</h3>
                <p></p>
            </div>
            <div className='mt-8'>
                <h2 className='text-5xl font-semibold'>{forecastday![1].day.avgtemp_c}&deg;C</h2>
                <p>{forecastday![1].day.condition.text}</p>
            </div>
        </div>
    )
}