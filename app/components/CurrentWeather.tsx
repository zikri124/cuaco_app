import Image from "next/image";
import { Current } from "../interfaces/WeatherData";

interface Props {
    currentData: Current
}

export default function CurrentWeather({ currentData }: Props) {
    return (
        <div>
            <h2 className='text-3xl font-bold'>Current Weather</h2>

            <div className='mt-6'>
                <div className='flex flex-wrap gap-2 items-center'>
                    <h2 className='text-6xl font-semibold'>{currentData.temp_c}&deg;C</h2>
                    <div className='rounded-xl bg-green-300 text-sm text-black px-2 py-1 font-semibold'>
                        {currentData.feelslike_c}&deg;C
                    </div>
                </div>

                <div className='flex flex-col mt-4'>
                    <Image src={"https://img.icons8.com/stickers/100/partly-cloudy-day.png"} height={100} width={100} alt='weather-logo' />
                    <p className='font-semibold'>{currentData.condition.text}</p>
                </div>
            </div>
        </div>
    )
}