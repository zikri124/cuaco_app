import Image from "next/image"
import { ForecastdayEntity } from "../interfaces/WeatherData"

interface Props {
    forecastday?: (ForecastdayEntity)[] | null;
}

export default function TomorrowCard({ forecastday }: Props) {
    return (
        <div className={'card bg-orange-300 col-span-full xl:col-span-3'} >
            <div>
                <div className='flex flex-row'>
                    <h3 className='text-xl font-bold'>Tomorrow</h3>
                    <p></p>
                </div>
                <div className='mt-8'>
                    <h2 className='text-5xl font-semibold'>{forecastday![1].day.avgtemp_c}&deg;C</h2>
                    <p>{forecastday![1].day.condition.text}</p>
                    <p className="font-semibold">{forecastday![1].day.daily_chance_of_rain}% Chance of Rain</p>
                </div>
            </div>
        </div>
    )
}