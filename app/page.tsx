"use client";

import Image from 'next/image'
import WeatherData from './interfaces/WeatherData';
import { useEffect, useState } from 'react';
import SunCard from './components/SunCard';
import AirQCard from './components/AirQCard';
import AddCondtionCard from './components/AddConditionCard';
import Footer from './components/Footer';
import TomorrowCard from './components/TomorrowCard';
import LoadingScreen from './components/LoadingScreen';
import HourlyWeather from './components/HourlyWeather';
import CurrentWeather from './components/CurrentWeather';
import MoonCard from './components/MoonCard';
import { getWeatherImage } from './util';
import ForecastCard from './components/ForecastCard';

export default function Home() {
  const [weatherDatas, setWeatherDatas] = useState<WeatherData>()
  const [isLoading, setIsLoading] = useState<Boolean>(true)

  useEffect(() => {
    fetchData()
    var interval = setInterval(() => {
      fetchData()
      console.log("called")
    }, 1000 * 60 * 30)

    return () => {
      clearInterval(interval)
    }
  }, [])

  const abortCont = new AbortController()

  async function fetchData() {
    await fetch('http://api.weatherapi.com/v1/forecast.json?key=5014f81ac6194edc9f0163605232010&q=Malang&days=5&aqi=yes&alerts=no', { signal: abortCont.signal })
      .then(res => {
        return res.json()
      })
      .then(data => {
        const resultData: WeatherData = data
        setWeatherDatas(resultData)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err.message)
      })
    return () => abortCont.abort()
  }

  return (
    <main className="min-h-screen">
      {isLoading && <LoadingScreen />}

      {!isLoading && <div className='grid grid-cols-10'>
        <div className='col-span-full md:col-span-5 lg:col-span-4 xl:col-span-3 bg-white md:min-h-screen px-4 pt-20 h-fit'>
          <div className='flex justify-end'>
            <div className='border border-slate-400 bg-white rounded-full px-4 py-2 flex w-full'>
              <Image src={"https://img.icons8.com/stickers/100/search.png"} height={25} width={25} alt='searchLogo' />
              <input type='text' id='searchlogo' name='searchlogo' placeholder='Search City' className='ms-4 w-full text-md' />
            </div>
          </div>

          <CurrentWeather currentData={weatherDatas?.current!} additionalData={weatherDatas?.forecast.forecastday![0].hour![new Date().getHours()]!} location={weatherDatas?.location!} />

          <HourlyWeather forecastday={weatherDatas?.forecast.forecastday} />
        </div>

        <div className='col-span-full md:col-span-5 lg:col-span-6 xl:col-span-7 bg-white md:bg-gray-200 md:h-screen md:overflow-y-auto px-4 pt-0 md:pt-8 lg:pb-4'>
          <div className='grid grid-cols-8 gap-4'>

            <AirQCard air_quality={weatherDatas?.current.air_quality!} />

            <SunCard uvi={Number(weatherDatas?.current.uv)} sunriseT={String(weatherDatas?.forecast.forecastday![0].astro.sunrise)} sunsetT={String(weatherDatas?.forecast.forecastday![0].astro.sunset)} />

            <MoonCard astroData={weatherDatas?.forecast.forecastday![0].astro!} />

            <AddCondtionCard pressure={Number(weatherDatas?.current.pressure_mb)} humidity={Number(weatherDatas?.current.humidity)} vision={Number(weatherDatas?.current.vis_km)} cloud={Number(weatherDatas?.current.cloud)} />

            <TomorrowCard forecastday={weatherDatas?.forecast.forecastday} />

            <ForecastCard forecastday={weatherDatas?.forecast.forecastday} />

            <Footer last_updated={weatherDatas?.current.last_updated!} />
          </div>
        </div>


      </div>}
    </main>
  )
}
