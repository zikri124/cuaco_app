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
    <main className="min-h-screen">
      {isLoading && <LoadingScreen />}

      {!isLoading && <div className='grid grid-cols-10'>
        <div className='col-span-full md:col-span-5 lg:col-span-4 xl:col-span-3 bg-white md:min-h-screen px-4 pt-20 h-fit'>
          <SearchCity setIsLoading={setIsLoading} setWeatherData={setWeatherDatas} setLocation={setLocation} />

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
