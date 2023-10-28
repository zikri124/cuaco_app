import Image from "next/image"

interface props {
    uvi: number,
    sunriseT: string,
    sunsetT: string
}

export default function SunCard({ uvi, sunriseT, sunsetT }: props) {
    const messageArray = [
        "You can safely stay outside, still use SPF 30+ sunscreen!",
        "Use sunscreen with SPF 30+ every 2 hours!",
        "Avoid being outside during midday hours from 10 AM to 4 PM! Make sure you use sunscreen with SPF 30+ and hat are a must!",
        "Very high level danger!, stay inside and use sunscreen with SPF 30+ every 2 hours",
        "Better to be stay inside!"
    ]

    var message = ""
    var category = ""

    if (uvi < 3) {
        category = "Low"
        message = messageArray[0]
    } else if (uvi < 6) {
        category = "Medium"
        message = messageArray[1]
    } else if (uvi < 8) {
        category = "High"
        message = messageArray[2]
    } else if (uvi < 11) {
        category = "Very High"
        message = messageArray[3]
    } else {
        category = "Extreme"
        message = messageArray[4]
    }

    return (
        <div className={'card bg-amber-300 flex flex-col justify-between col-span-full'} >
            <div className='flex flex-row items-center'>
                <div className='bg-white rounded-full p-2 me-4'>
                    <Image src={"https://img.icons8.com/stickers/100/sun.png"} height={40} width={40} alt='sun-logo' />
                </div>
                <div>
                    <h3 className='font-bold text-xl'>Sun</h3>
                </div>
            </div>

            <div className='flex flex-col items-center mt-4 bg-white p-2 rounded-2xl'>
                <div className="grid grid-cols-2 items-center w-full text-center py-2">
                    <h4 className="col-span-1 text-lg px-2 font-semibold">Ultraviolet Index</h4>
                    <div className='col-span-1 flex items-center gap-2 justify-center'>
                        <h2 className='text-5xl font-semibold'>{uvi} </h2>
                        <div className={`text-sm font-semibold px-4 py-1 rounded-full border-2 border-amber-300`}>{category}</div>
                    </div>
                </div>
                <div className="bg-white rounded-xl border-2 border-amber-300 w-full h-full text-center mt-2 py-2 px-2">
                    <p className='font-semibold text-sm'>{message}</p>
                </div>
            </div>

            <div className='mt-4 text-center flex justify-between items-center text-sm px-2'>
                <div className='rounded-2xl pe-6 flex flex-col items-center'>
                    <Image src={"https://img.icons8.com/stickers/100/sunrise.png"} height={50} width={50} alt='sunrise-logo' />
                    <p className='font-semibold'>Sunrise</p>
                    <p className="w-max">{sunriseT}</p>
                </div>
                <div className='flex-grow w-full border-2 border-dashed border-yellow-800'></div>
                <div className='rounded-2xl ps-6 flex flex-col items-center'>
                    <Image src={"https://img.icons8.com/stickers/100/sunset.png"} height={50} width={50} alt='sunset-logo' />
                    <p className='font-semibold'>Sunset</p>
                    <p className="w-max">{sunsetT}</p>
                </div>
            </div>

        </div>
    )
} 