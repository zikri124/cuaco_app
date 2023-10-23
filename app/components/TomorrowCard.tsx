import Image from "next/image"
import { ForecastdayEntity } from "../interfaces/WeatherData"
import { getWeatherImage } from "../util";

interface Props {
    forecastday?: (ForecastdayEntity)[] | null
}

export default function TomorrowCard({ forecastday }: Props) {
    return (
        <div className={'card bg-orange-300 col-span-full xl:col-span-2'} >
            <div>
                <div className='flex flex-row'>
                    <h3 className='text-xl font-bold'>Tomorrow</h3>
                    <p></p>
                </div>
                <div className='mt-4 grid grid-cols-2 gap-2 divide-x-2 md:divide-x-0 divide-slate-800'>
                    <div className="col-span- md:col-span-2 flex flex-col items-center justify-center">
                        <Image src={getWeatherImage(forecastday![1].day.condition.code)} height={90} width={90} alt='sunrise-logo' />
                        <p className="text-sm font-semibold">{forecastday![1].day.condition.text}</p>
                    </div>
                    <div className="col-span-1 md:col-span-2 flex flex-col items-center justify-center">
                        <h2 className='text-4xl font-semibold mt-2'>{forecastday![1].day.avgtemp_c}&deg;C</h2>
                        <p className="text-sm font-semibold">{forecastday![1].day.daily_chance_of_rain}% Rain Posibility</p>
                    </div>
                </div>
                <button type="button" className="rounded-2xl bg-white w-full py-4 mt-4 font-semibold text-gray-400" disabled>Detail</button>
            </div>
        </div>
    )
}