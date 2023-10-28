import Image from "next/image";

interface Props {
    pressure: number,
    humidity: number,
    vision: number,
    cloud: number
}

export default function AddCondtionCard({ pressure, humidity, vision, cloud }: Props) {
    return (
        <div className={'card col-span-full bg-slate-400 justify-between'} >
            <div className='flex flex-row items-center'>
                <div className='bg-white rounded-full p-2 me-4'>
                    <Image src={"https://img.icons8.com/stickers/100/barometer.png"} height={40} width={40} alt='wind-logo' />
                </div>
                <div>
                    <h3 className='text-xl font-bold text-white'>Additional Conditions</h3>
                </div>
            </div>

            <div className='mt-4 text-center grid grid-cols-2 gap-4'>
                <div className='rounded-2xl bg-white px-2 py-2 col-span-1 flex flex-col items-center'>
                    <Image src={"https://img.icons8.com/stickers/100/atmospheric-pressure.png"} height={50} width={50} alt='presure-logo' />
                    <p className='text-sm'>Pressure</p>
                    <h4 className='font-semibold'>{pressure}mb</h4>
                </div>
                <div className='rounded-2xl bg-white px-2 py-2 col-span-1 flex flex-col items-center'>
                    <Image src={"https://img.icons8.com/stickers/100/dew-point.png"} height={50} width={50} alt='humadity-logo' />
                    <p className='text-sm'>Humidity</p>
                    <h4 className='font-semibold'>{humidity}%</h4>
                </div>
                <div className='rounded-2xl bg-white px-2 py-2 col-span-1 flex flex-col items-center'>
                    <Image src={"https://img.icons8.com/stickers/100/visible.png"} height={50} width={50} alt='visibility-logo' />
                    <p className='text-sm'>Visibility</p>
                    <h4 className='font-semibold'>{vision} km</h4>
                </div>
                <div className='rounded-2xl bg-white px-2 py-2 col-span-1 flex flex-col items-center'>
                    <Image src={"https://img.icons8.com/stickers/100/cloud--v1.png"} height={50} width={50} alt='cloud-logo' />
                    <p className='text-sm'>Cloudiness</p>
                    <h4 className='font-semibold'>{cloud}%</h4>
                </div>
            </div>

        </div>
    )
}