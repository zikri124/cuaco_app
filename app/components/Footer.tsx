import Image from "next/image"

interface Props {
    last_updated: string
}

export default function Footer({ last_updated }: Props) {
    return (
        <div className='col-span-full card bg-slate-300 text-center text-sm mb-2'>
            Last Updated : {last_updated} <br />
            Build by Zikri Kurnia Aizet, Powered by <a href="https://www.weatherapi.com/" className='font-semibold' title="Free Weather API">WeatherAPI.com</a>
        </div>
    )
}