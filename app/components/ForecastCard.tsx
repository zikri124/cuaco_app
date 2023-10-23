import Image from "next/image";
import { ForecastdayEntity } from "../interfaces/WeatherData";
import { getWeatherImage } from "../util";

interface Props {
    forecastday?: (ForecastdayEntity)[] | null
}

export default function ForecastCard({ forecastday }: Props) {
    return (
        <div className='card bg-slate-400 col-span-full xl:col-span-2 flex flex-col justify-between'>
            <h3 className='text-xl font-bold text-white'>Forecast</h3>
            <div className='flex flex-col gap-4 mt-4'>
                <div className='px-2 py-2 rounded-2xl bg-white flex gap-4 items-center'>
                    <div>
                        <Image src={getWeatherImage(forecastday![2].day.condition.code!)} height={60} width={60} alt='sun-logo' />
                    </div>
                    <div className='text-sm'>
                        <p>{forecastday![2].date}</p>
                        <p className='font-semibold text-lg'>{forecastday![2].day.avgtemp_c}&deg;C</p>
                        <p>Rain {forecastday![2].day.daily_chance_of_rain}%</p>
                    </div>
                </div>
                <div className='px-2 py-2 rounded-2xl bg-white flex gap-4 items-center'>
                    <div>
                        <Image src={getWeatherImage(forecastday![3].day.condition.code!)} height={60} width={60} alt='sun-logo' />
                    </div>
                    <div className='text-sm'>
                        <p>{forecastday![3].date}</p>
                        <p className='font-semibold text-lg'>{forecastday![3].day.avgtemp_c}&deg;C</p>
                        <p>Rain {forecastday![3].day.daily_chance_of_rain}%</p>
                    </div>
                </div>
                <button className='card bg-white row-span-1 font-semibold text-center w-full text-gray-400' disabled>More</button>
            </div>
        </div>
    )
}