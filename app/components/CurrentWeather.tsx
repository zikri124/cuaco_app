import Image from "next/image";
import { Current, Day, HourEntity } from "../interfaces/WeatherData";
import { getWeatherImage } from "../util";

interface Props {
    currentData: Current,
    additionalData: HourEntity
}

export default function CurrentWeather({ currentData, additionalData }: Props) {

    return (
        <div>
            <h2 className='text-3xl font-bold'>Current Weather</h2>
            <p className="text-sm mt-2">Last Updated : {currentData.last_updated}</p>

            <div className='mt-8'>
                <div className='flex flex-wrap gap-2 items-center'>
                    <h2 className='text-6xl font-semibold'>{currentData.temp_c}&deg;C</h2>
                    <div className='text-sm text-black px-2 py-1 font-semibold'>
                        Feels Like <br />
                        {currentData.feelslike_c}&deg;C
                    </div>
                </div>

                <div className="grid grid-cols-2 mt-4 items-center divide-x-2 divide-slate-400 text-center">
                    <div className='flex flex-col items-center px-2'>
                        <Image src={getWeatherImage(currentData.condition.code)} height={90} width={90} alt='weather-logo' />
                        <p className='text-lg font-semibold'>{currentData.condition.text}</p>
                    </div>
                    <div className="flex flex-col items-center px-2">
                        <Image src={"https://img.icons8.com/stickers/100/rainy-weather.png"} height={90} width={90} alt='weather-logo' />
                        <p className=''>Rain Possibility</p>
                        <p className='text-xl font-semibold'>{additionalData.chance_of_rain}%</p>
                    </div>
                </div>
            </div>
        </div>
    )
}