import Image from "next/image"
import { AirQuality } from "../interfaces/WeatherData"

interface Props {
    air_quality: AirQuality,
    colW: number
}

export default function AirQCard({ air_quality, colW }: Props) {
    return (
        <div className={'card bg-sky-200 flex flex-col justify-between col-span-full lg:col-span-' + colW} >
            <div className='flex flex-row items-center'>
                <div className='bg-white rounded-full p-2 me-4'>
                    <Image src={"https://img.icons8.com/stickers/100/wind.png"} height={40} width={40} alt='wind-logo' />
                </div>
                <div>
                    <h3 className='text-xl font-bold'>Air Quality</h3>
                    <p className='text-sm'>Main pollutan : PM 2.5</p>
                </div>
            </div>

            <div className='rounded-2xl bg-white p-4 mt-4'>
                <h3 className='text-xl font-semibold'>AQI</h3>
                <div className='flex items-center mt-4'>
                    <h2 className='text-5xl font-semibold'>{air_quality["us-epa-index"]}</h2>
                    <div className='rounded-xl bg-sky-200 text-sm text-black px-2 py-1 ms-2 font-semibold'>
                        US - EPA standard
                    </div>
                </div>
                <div className='grid grid-cols-3 items-around text-sm mt-4'>
                    <p className='text-green-600'>Good</p>
                    <p className='text-center text-yellow-500'>Standard</p>
                    <p className='text-right text-red-600'>Bad</p>
                </div>
                <div className='grid grid-cols-6 bg-zinc-200 rounded-full mt-1'>
                    <div className={'bg-slate-800 h-4 rounded-full col-span-' + air_quality["us-epa-index"]}>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-6 mt-4 gap-1 text-sm text-center'>
                <div className='bg-white rounded-xl p-1'>
                    <p>CO</p>
                    <p className='font-semibold'>{air_quality.co}</p>
                </div>
                <div className='bg-white rounded-xl p-1'>
                    <p>PM2.5</p>
                    <p className='font-semibold'>{air_quality.pm2_5}</p>
                </div>
                <div className='bg-white rounded-xl p-1'>
                    <p>PM10</p>
                    <p className='font-semibold'>{air_quality.pm10}</p>
                </div>
                <div className='bg-white rounded-xl p-1'>
                    <p>NO2</p>
                    <p className='font-semibold'>{air_quality.no2}</p>
                </div>
                <div className='bg-white rounded-xl p-1'>
                    <p>O3</p>
                    <p className='font-semibold'>{air_quality.o3}</p>
                </div>
                <div className='bg-white rounded-xl p-1'>
                    <p>SO2</p>
                    <p className='font-semibold'>{air_quality.so2}</p>
                </div>
            </div>
        </div>
    )
}