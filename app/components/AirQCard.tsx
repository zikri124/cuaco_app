import Image from "next/image"
import { AirQuality } from "../interfaces/WeatherData"

interface Props {
    air_quality: AirQuality
}

export default function AirQCard({ air_quality }: Props) {
    var aqi = air_quality["us-epa-index"]
    
    return (
        <div className={'card bg-sky-300 flex flex-col justify-between col-span-full'} >
            <div className='flex flex-row items-center'>
                <div className='bg-white rounded-full p-2 me-4'>
                    <Image src={"https://img.icons8.com/stickers/100/wind.png"} height={40} width={40} alt='wind-logo' />
                </div>
                <div>
                    <h3 className='text-xl font-bold'>Air Quality</h3>
                    <p className='text-sm'>Main pollutan : PM 2.5</p>
                </div>
            </div>

            <div className='rounded-2xl bg-white p-4 mt-4 grid grid-cols-2'>
                <div className='flex flex-col gap-1 items-center justify-center'>
                    <h3 className='text-xl font-semibold text-center'>Air Quality Index</h3>
                    <div className='rounded-xl bg-sky-200 text-sm text-black px-2 py-1 ms-2 font-semibold text-center'>
                        US - EPA Standard
                    </div>
                </div>
                <div className="flex items-end justify-center my-4">
                    <h2 className='text-5xl font-semibold text-center'>{aqi}</h2>
                    <p>/6</p>
                </div>
                <div className='grid grid-cols-3 items-around text-sm mt-4 font-semibold col-span-2'>
                    <p className='text-green-600'>Good</p>
                    <p className='text-center text-yellow-500'>Standard</p>
                    <p className='text-right text-red-600'>Bad</p>
                </div>
                <div className='grid grid-cols-6 bg-zinc-200 rounded-full mt-1 col-span-2 w-full'>
                    <div className={`bg-slate-800 h-4 rounded-full col-span-${aqi}`}>
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