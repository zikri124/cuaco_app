"use client";

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
import ForecastCard from './components/ForecastCard';
import SearchCity from './components/SearchCity';
import { FetchWeatherCurrentLoc, FetchWeatherDataByCity } from './components/FetchData'
import Navbar from './components/Navbar';

export default function Home() {
  const [weatherDatas, setWeatherDatas] = useState<WeatherData>()
  const [isLoading, setIsLoading] = useState<Boolean>(true)
  const [location, setLocation] = useState<String>("")

  useEffect(() => {
    if (location == "") {
      FetchWeatherCurrentLoc(setIsLoading, setWeatherDatas)
      var interval = setInterval(() => {
        FetchWeatherCurrentLoc(setIsLoading, setWeatherDatas)
      }, 1000 * 60 * 30)

      return () => {
        clearInterval(interval)
      }
    } else {
      FetchWeatherDataByCity(location, setIsLoading, setWeatherDatas)

      var interval = setInterval(() => {
        FetchWeatherDataByCity(location, setIsLoading, setWeatherDatas)
      }, 1000 * 60 * 30)

      return () => {
        clearInterval(interval)
      }
    }
  }, [location])

  return (
    <main className="min-h-screen bg-slate-100">
      {isLoading && <LoadingScreen />}

      {!isLoading && <div className='grid grid-cols-2 gap-6 md:gap-0 divide-x-2 mx-auto md:mx-auto mt-4 md:mt-0 lg:max-w-[73rem] bg-white'>
        <div className='relative md:sticky top-0 col-span-full md:col-span-1 bg-white md:h-screen px-4 md:px-8 h-fit py-0 md:py-4 flex flex-col'>
          <Navbar />
          
          <SearchCity setIsLoading={setIsLoading} setWeatherData={setWeatherDatas} setLocation={setLocation} />

          <CurrentWeather currentData={weatherDatas?.current!} additionalData={weatherDatas?.forecast.forecastday![0].hour![new Date().getHours()]!} location={weatherDatas?.location!} />
        </div>

        <div className='col-span-full md:col-span-1 bg-white px-4 md:px-8 py-0 md:py-8 md:mt-2'>
          <div className='grid grid-cols-8 gap-6'>
            <HourlyWeather forecastday={weatherDatas?.forecast.forecastday} />
            
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
