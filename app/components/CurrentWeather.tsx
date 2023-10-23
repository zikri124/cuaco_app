import Image from "next/image";
import { Current, Day, HourEntity, Location } from "../interfaces/WeatherData";
import { getWeatherImage } from "../util";

interface Props {
    currentData: Current,
    additionalData: HourEntity,
    location: Location
}

export default function CurrentWeather({ currentData, additionalData, location }: Props) {

    return (
        <div className='mt-4 card bg-slate-200 pt-6'>
            <div className='flex flex-col items-center px-2'>
                <div className='text-center border-b-2 pb-1 border-slate-800 w-fit mb-6'>
                    <h1 className='text-lg font-semibold'>{location.name}, {location.region}, {location.country}</h1>
                </div>
                <Image src={getWeatherImage(currentData.condition.code)} height={95} width={95} alt='weather-logo' />
                <p className='font-semibold text-sm'>{currentData.condition.text}</p>
            </div>

            <div className='text-center mt-8'>
                <h2 className='text-7xl font-semibold'>{currentData.temp_c}&deg;C</h2>
                <div className='text-black px-2 py-1 px-4 text-sm bg-slate-800 rounded-full text-white w-fit mx-auto mt-4'>
                    Feels Like {currentData.feelslike_c}&deg;C
                </div>
            </div>

            <div className="text-center mt-6">
                <p className='font-semibold'>{additionalData.chance_of_rain}% Rain Posibility</p>
            </div>
        </div>
    )
}