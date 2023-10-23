import Image from "next/image"

interface props {
    uvi: number,
    sunriseT: string,
    sunsetT: string
}

export default function SunCard({ uvi, sunriseT, sunsetT }: props) {
    return (
        <div className={'card bg-amber-300 flex flex-col justify-between col-span-8 xl:col-span-4'} >
            <div className='flex flex-row items-center'>
                <div className='bg-white rounded-full p-2 me-4'>
                    <Image src={"https://img.icons8.com/stickers/100/sun.png"} height={40} width={40} alt='sun-logo' />
                </div>
                <div>
                    <h3 className='font-bold text-xl'>Sun</h3>
                </div>
            </div>

            <div className='flex items-center mt-8 '>
                <div>
                    <div className='flex items-center mb-2'>
                        <h2 className='text-4xl font-semibold'>{uvi} UVI</h2>
                    </div>
                    <p className='bg-white px-4 py-2 rounded-full font-semibold'>Don&apos;t forget to use SunScreen everyday!</p>
                </div>
            </div>

            <div className='mt-4 text-center flex justify-between items-center text-sm px-2'>
                <div className='rounded-2xl py-2 pe-6'>
                    <Image src={"https://img.icons8.com/stickers/100/sunrise.png"} height={50} width={50} alt='sunrise-logo' />
                    <p className='font-semibold'>Sunrise</p>
                    <p>{sunriseT}</p>
                </div>
                <div className='flex-grow w-full border-2 border-dashed border-yellow-800'></div>
                <div className='rounded-2xl py-2 ps-6'>
                    <Image src={"https://img.icons8.com/stickers/100/sunset.png"} height={50} width={50} alt='sunset-logo' />
                    <p className='font-semibold'>Sunset</p>
                    <p>{sunsetT}</p>
                </div>
            </div>

        </div>
    )
} 