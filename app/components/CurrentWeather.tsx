import Image from "next/image";
import { Current, Day, HourEntity, Location } from "../interfaces/WeatherData";
import { getWeatherImage } from "../util";
import { useEffect, useState } from "react";

interface Props {
    currentData: Current,
    additionalData: HourEntity,
    location: Location
}

export default function CurrentWeather({ currentData, additionalData, location }: Props) {
    const [imageBg, setImageBg] = useState<String>()
    
    useEffect(() => {
        function getIsDay(): String {
            if (currentData.is_day == 1) {
                return "bg-[url('https://i.ibb.co/yX71vDv/day.jpg')]"
            } else {
                return "bg-[url('https://i.ibb.co/mGTKjXf/night.jpg')]"
            }
        }
        setImageBg(getIsDay())
    }, [currentData])

    return (
        <div className='py-6 flex-grow flex flex-col items-start justify-end'>
            <div className={`py-12 px-4 gap-2 rounded-2xl mb-6 ${imageBg} bg-cover flex flex-col justify-center items-center w-full flex-grow`} >
                <div className="bg-sky-800/60 rounded-2xl flex flex-col justify-center items-center px-6 py-4 w-full">
                    <Image src={getWeatherImage(currentData.condition.code)} height={95} width={95} alt='weather-logo' />
                    <p className='text-2xl text-white font-bold'>{currentData.condition.text}</p>
                </div>
            </div>

            <div className="flex flex-col gap-6">
                <div className='w-fit'>
                    <h1 className='text-xl font-semibold'>{location.name}</h1>
                    <p>{location.region}, {location.country}</p>
                </div>

                <div>
                    <div className="flex justify-center">
                        <h2 className='text-8xl font-semibold'>{Math.floor(currentData.temp_c)}</h2>
                        <p className="text-5xl font-bold">&deg;C</p>
                    </div>
                    <div className='text-black px-2 py-1 px-4 text-sm bg-sky-800 rounded-full text-white w-fit'>
                        Feels Like {Math.floor(currentData.feelslike_c)}&deg;C
                    </div>
                </div>

                <div>
                    <p className='font-semibold'>{additionalData.chance_of_rain}% Rain Posibility</p>
                </div>
            </div>

            <div className='text-center text-sm mt-6'>
                Last Data Updated : {currentData.last_updated}
            </div>
        </div>
    )
}