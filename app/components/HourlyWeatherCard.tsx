import Image from "next/image"
import { HourEntity } from "../interfaces/WeatherData"
import { getWeatherImage } from "../util"

interface Props {
    weatherData: HourEntity
}

export default function HourlyWeatherCard({ weatherData }: Props) {
    function timeConv(unixtime: number): string {
        const date = new Date(unixtime * 1000)

        var hour: string = (Number(date.getHours()) < 10) ? "0" + date.getHours() : String(date.getHours()) 
        hour = (Number(hour) > 12)? hour + " PM" : hour + " AM" 

        var dateString: string =  (date.getMonth() + 1) + "/" + date.getDate() 
        
        return dateString + " " + hour
    }
    
    return (
        <div className='flex flex-col text-sm gap-2 w-max'>
            <div className='rounded-2xl bg-slate-600 p-4 flex flex-col text-center items-center w-max md:w-full text-white'>
                <div><Image src={getWeatherImage(weatherData.condition.code)} height={50} width={50} alt='weather-logo' className='my-1' /></div>
                <div>
                    <p>{timeConv(weatherData.time_epoch)}</p>
                    <h4 className='text-xl font-bold'>{weatherData.temp_c} &deg;C</h4>
                    <p className="font-semibold">Rain {weatherData.chance_of_rain}%</p>
                </div>
            </div>
        </div>
    )
}