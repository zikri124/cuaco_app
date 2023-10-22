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

export default function Home() {
  // ChartJS.register(
  //   CategoryScale,
  //   LinearScale,
  //   PointElement,
  //   LineElement,
  //   Tooltip,
  //   Filler,
  // );

  // const chartData = {
  //   labels: [
  //     "Morning",
  //     "Afternoon",
  //     "Evening",
  //     "Night",
  //   ],
  //   datasets: [
  //     {
  //       data: [20, 34, 28, 22],
  //       backgroundColor: "#86efac",
  //       tension: 0.5,
  //       borderColor: "#166534",
  //       fill: true
  //     }
  //   ]
  // }

  // const chartOptions = {
  //   responsive: true,
  //   maintainAspectRatio: false,
  //   scales: {
  //     x: {
  //       grid: {
  //         display: false,
  //         zeroLineColor: "rgba(0, 0, 0, 0)",
  //       },
  //       display: false
  //     },
  //     y: {
  //       grid: {
  //         display: true,
  //       },
  //       display: false,
  //     },
  //   },
  //   plugins: {
  //     tooltip: {
  //       enabled: false
  //     }
  //   }
  // }

  interface weatherCode {
    img: string,
    code: number[]
  }

  const weatherCodeArray: weatherCode[] = [
    {
      "img": "https://img.icons8.com/stickers/100/sun.png",
      "code": [1000]
    },
    {
      "img": "https://img.icons8.com/stickers/100/clouds.png",
      "code": [1006, 1009]
    },
    {
      "img": "https://img.icons8.com/stickers/100/partly-cloudy-day.png",
      "code": [1003]
    },
    {
      "img": "https://img.icons8.com/stickers/100/fog-day.png",
      "code": [1030, 1135]
    },
    {
      "img": "https://img.icons8.com/stickers/100/rain.png",
      "code": [1063, 1150, 1153, 1180, 1183, 1186, 1189, 1192, 1195, 1240, 1243, 1246]
    },
    {
      "img": "https://img.icons8.com/stickers/100/storm.png",
      "code": [1087, 1273, 1276, 1279, 1282]
    }
  ]

  const [weatherDatas, setWeatherDatas] = useState<WeatherData>()
  const [isLoading, setIsLoading] = useState<Boolean>(true)

  useEffect(() => {
    fetchData()
  }, [])

  const abortCont = new AbortController()

  async function fetchData() {
    await fetch('http://api.weatherapi.com/v1/forecast.json?key=5014f81ac6194edc9f0163605232010&q=Malang&days=5&aqi=yes&alerts=no', { signal: abortCont.signal })
      .then(res => {
        return res.json()
      })
      .then(data => {
        const resultData: WeatherData = data
        console.log(resultData)
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

      {!isLoading && <div className='grid grid-cols-8'>
        <div className='col-span-8 md:col-span-5 lg:col-span-6 h-fit md:h-screen overflow-y-auto px-4 order-last md:order-first pt-0 md:pt-20 lg:pb-4'>
          <div className='grid grid-cols-8 gap-4'>

            <AirQCard air_quality={weatherDatas?.current.air_quality!} colW={4} />

            <SunCard uvi={Number(weatherDatas?.current.uv)} sunriseT={String(weatherDatas?.forecast.forecastday![0].astro.sunrise)} sunsetT={String(weatherDatas?.forecast.forecastday![0].astro.sunset)} colW={4} />

            <div className='col-span-full lg:col-span-2 card bg-slate-600 flex flex-col'>
              <div className='flex flex-row items-center'>
                <div className='bg-white rounded-full p-2 me-4'>
                  <Image src={"https://img.icons8.com/stickers/100/full-moon.png"} height={40} width={40} alt='sun-logo' />
                </div>
                <div>
                  <h3 className='font-bold text-lg text-white'>Moon</h3>
                </div>
              </div>

              <div className='flex flex-col gap-4 mt-6'>
                <div className='bg-white rounded-2xl p-2 flex flex-row gap-2 items-center'>
                  <Image src={"https://img.icons8.com/stickers/100/moon.png"} height={40} width={40} alt='moon-phase-logo' className='w-fit' />
                  <div>
                    <p className='text-sm font-semibold'>Moon Phase</p>
                    <p>{weatherDatas?.forecast.forecastday![0].astro.moon_phase}</p>
                  </div>
                </div>

                <div className='bg-white rounded-2xl p-2 flex flex-row gap-2 items-center'>
                  <Image src={"https://img.icons8.com/stickers/100/bright-moon.png"} height={40} width={40} alt='moon-illum-logo' className='w-fit' />
                  <div>
                    <p className='text-sm font-semibold'>Moon Illmumination</p>
                    <p>{weatherDatas?.forecast.forecastday![0].astro.moon_illumination}%</p>
                  </div>
                </div>
                <div className='grid grid-cols-2 gap-4 text-sm'>
                  <div className='rounded-xl px-4 py-2 bg-white'>
                    <p className='font-semibold'>Rise</p>
                    <p>{weatherDatas?.forecast.forecastday![0].astro.moonrise}</p>
                  </div>
                  <div className='rounded-xl px-4 py-2 bg-white'>
                    <p className='font-semibold'>Set</p>
                    <p>{weatherDatas?.forecast.forecastday![0].astro.moonset}</p>
                  </div>
                </div>
              </div>
            </div>

            <AddCondtionCard pressure={Number(weatherDatas?.current.pressure_mb)} humidity={Number(weatherDatas?.current.humidity)} vision={Number(weatherDatas?.current.vis_km)} cloud={Number(weatherDatas?.current.cloud)} colW={3} />

            <TomorrowCard forecastday={weatherDatas?.forecast.forecastday} colW={3} />

            <Footer />
          </div>
        </div>

        <div className='col-span-8 md:col-span-3 lg:col-span-2 bg-white md:bg-zinc-100 md:min-h-screen px-4 py-4 mt-16 md:mt-0 h-fit md:h-screen overflow-y-auto'>
          <div className='flex justify-end'>
            <div className='border border-slate-400 bg-white rounded-full px-4 py-2 flex w-full'>
              <Image src={"https://img.icons8.com/stickers/100/search.png"} height={25} width={25} alt='searchLogo' />
              <input type='text' id='searchlogo' name='searchlogo' placeholder='Search City' className='ms-4 w-full text-md' />
            </div>
          </div>

          <div className='mt-8 mb-4'>
            <div className='flex flex-row items-center'>
              <div><Image src={"https://img.icons8.com/stickers/100/marker.png"} height={25} width={25} alt='locationLogo' /></div>
              <h1 className='text-lg ms-2 font-semibold'>{weatherDatas?.location.name}, {weatherDatas?.location.region}, {weatherDatas?.location.country}</h1>
            </div>
          </div>

          <div className='border-y w-full border-slate-400 mb-4'></div>

          <CurrentWeather currentData={weatherDatas?.current!} />

          <HourlyWeather forecastday={weatherDatas?.forecast.forecastday} />

        </div>
      </div>}

    </main>
  )
}
