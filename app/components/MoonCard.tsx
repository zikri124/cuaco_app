import Image from "next/image"
import { Astro } from "../interfaces/WeatherData"

interface Props {
    astroData: Astro
}

export default function MoonCard({ astroData }: Props) {
    return (
        <div className='col-span-full card bg-sky-800 flex flex-col'>
            <div className='flex flex-row items-center'>
                <div className='bg-white rounded-full p-2 me-4'>
                    <Image src={"https://img.icons8.com/stickers/100/full-moon.png"} height={40} width={40} alt='sun-logo' />
                </div>
                <div>
                    <h3 className='font-bold text-lg text-white'>Moon</h3>
                </div>
            </div>

            <div className='flex flex-col gap-4 mt-6'>
                <div className='bg-white rounded-2xl p-2 flex flex-row gap-4 items-center'>
                    <Image src={"https://img.icons8.com/stickers/100/moon.png"} height={40} width={40} alt='moon-phase-logo' className='w-fit' />
                    <div>
                        <p className='text-sm font-semibold'>Moon Phase</p>
                        <p>{astroData.moon_phase}</p>
                    </div>
                </div>

                <div className='bg-white rounded-2xl p-2 flex flex-row gap-4 items-center'>
                    <Image src={"https://img.icons8.com/stickers/100/bright-moon.png"} height={40} width={40} alt='moon-illum-logo' className='w-fit' />
                    <div>
                        <p className='text-sm font-semibold'>Moon Illmumination</p>
                        <p>{astroData.moon_illumination}%</p>
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-4 text-sm'>
                    <div className='rounded-xl px-4 py-2 bg-white'>
                        <p className='font-semibold'>Rise</p>
                        <p>{astroData.moonrise}</p>
                    </div>
                    <div className='rounded-xl px-4 py-2 bg-white'>
                        <p className='font-semibold'>Set</p>
                        <p>{astroData.moonset}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}