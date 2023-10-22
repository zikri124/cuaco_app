import Image from "next/image"

export default function Footer() {
    return (
        <div className='col-span-full card bg-slate-300 text-center text-sm mb-2'>
            Build by Zikri Kurnia Aizet, Powered by <a href="https://www.weatherapi.com/" className='font-semibold' title="Free Weather API">WeatherAPI.com</a>
        </div>
    )
}