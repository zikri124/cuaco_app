"use client";

import Image from 'next/image'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import WeatherData from './interfaces/WeatherData';
import { useEffect, useState } from 'react';
import AirPollution from './interfaces/AirPollution';

export default function Home() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Filler,
  );

  const chartData = {
    labels: [
      "Morning",
      "Afternoon",
      "Evening",
      "Night",
    ],
    datasets: [
      {
        data: [20, 34, 28, 22],
        backgroundColor: "#86efac",
        tension: 0.5,
        borderColor: "#166534",
        fill: true
      }
    ]
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
          zeroLineColor: "rgba(0, 0, 0, 0)",
        },
        display: false
      },
      y: {
        grid: {
          display: true,
        },
        display: false,
      },
    },
    plugins: {
      tooltip: {
        enabled: false
      }
    }
  }

  const [weatherDatas, setWeatherDatas] = useState<WeatherData>()
  const [airPollutionData, setAirPollutionData] = useState<AirPollution>()
  const [isLoading, setIsLoading] = useState<Boolean>(true)

  useEffect(() => {
    const lat: number = -7.9447219
    const lon: number = 112.6050011
    const appId: string = '2f10890dd132b12d5be2a50f2743c03e'

    fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=' + appId + '&units=metric')
      .then(res => {
        return res.json()
      })
      .then(data => {
        const datas: WeatherData = data
        fetch('http://api.openweathermap.org/data/2.5/air_pollution/history?lat=' + lat + '&lon=' + lon + '&start=' + datas?.dt + '&end=' + (Number(datas?.dt!) + 3600) + '&appid=' + appId)
          .then(res2 => {
            return res2.json()
          })
          .then(data2 => {
            const datas2: AirPollution = data2
            console.log(datas)
            console.log(datas2)
            setAirPollutionData(datas2)
            setWeatherDatas(datas)
            setIsLoading(false)
          })
      })
  }, [])

  return (
    <main className="flex flex-wrap min-h-screen">
      <div className='w-screen md:w-3/5 xl:w-2/3 h-fit px-4 order-last md:order-first mt-0 md:mt-20 pb-4'>
        <div className='grid grid-cols-1 lg:grid-cols-6 gap-4'>

          <div className='card md:col-span-3 bg-yellow-200 flex flex-col justify-between'>
            <div className='flex flex-row items-center'>
              <div className='bg-white rounded-full p-2 me-4'>
                <Image src={"https://img.icons8.com/stickers/100/sun.png"} height={40} width={40} alt='sun-logo' />
              </div>
              <div>
                <h3 className='font-bold text-lg'>Sun</h3>
              </div>
            </div>

            <div className='flex items-center mt-8 '>
              <div>
                <div className='flex items-center mb-2'>
                  <h2 className='text-4xl font-semibold'>20 UVI</h2>
                  <div className='rounded-xl bg-white text-sm text-black px-2 py-1 ms-2 font-semibold'>
                    <p>Moderate</p>
                  </div>
                </div>
                <p>Moderate risk of from UV rays</p>
              </div>
            </div>

            <div className='mt-4 text-center flex justify-between items-center text-sm'>
              <div className='rounded-2xl py-2 px-4'>
                <Image src={"https://img.icons8.com/stickers/100/sunrise.png"} height={50} width={50} alt='sunrise-logo' />
                <p className='font-semibold'>Sunrise</p>
                <p>{timeConv(Number(weatherDatas?.sys.sunrise))}</p>
              </div>
              <div className='flex-grow w-full border-2 border-dashed border-yellow-800'></div>
              <div className='rounded-2xl py-2 px-4'>
                <Image src={"https://img.icons8.com/stickers/100/sunset.png"} height={50} width={50} alt='sunset-logo' />
                <p className='font-semibold'>Sunset</p>
                <p>{timeConv(Number(weatherDatas?.sys.sunset))}</p>
              </div>
            </div>

          </div>

          <div className='card md:col-span-3 bg-sky-200 flex flex-col justify-between'>
            <div className='flex flex-row items-center'>
              <div className='bg-white rounded-full p-2 me-4'>
                <Image src={"https://img.icons8.com/stickers/100/wind.png"} height={40} width={40} alt='wind-logo' />
              </div>
              <div>
                <h3 className='text-xl font-bold'>Air Quality</h3>
                <p className='text-sm'>Main pollutan : PM 2.5</p>
              </div>
            </div>
            <div>
              <div className='flex items-center mt-8'>
                <h2 className='text-5xl font-semibold'>390</h2>
                <div className='rounded-xl bg-white text-sm text-black px-2 py-1 ms-2 font-semibold'>
                  AQI
                </div>
              </div>
              <p>West Wind</p>
            </div>
            <div className='rounded-2xl bg-white p-4 mt-8'>
              <div className='grid grid-cols-3 items-around text-sm'>
                <p className='text-green-600'>Good</p>
                <p className='text-center text-yellow-500'>Standard</p>
                <p className='text-right text-red-600'>Bad</p>
              </div>
              <div className='grid grid-cols-15 bg-zinc-200 rounded-full mt-1'>
                <div className={'bg-green-400 h-2 rounded-full col-span-' + airPollutionData?.list[0].main.aqi}>
                </div>
              </div>
            </div>
          </div>

          <div className='card md:col-span-2 bg-slate-600  justify-between'>
            <div className='flex flex-row items-center'>
              <div className='bg-white rounded-full p-2 me-4'>
                <Image src={"https://img.icons8.com/stickers/100/barometer.png"} height={40} width={40} alt='wind-logo' />
              </div>
              <div>
                <h3 className='text-xl font-bold text-white'>Additional Conditions</h3>
              </div>
            </div>

            <div className='mt-6 text-center grid grid-cols-2 gap-2'>
              <div className='rounded-2xl bg-orange-200 px-2 py-2 col-span-1 flex flex-col items-center'>
                <Image src={"https://img.icons8.com/stickers/100/atmospheric-pressure.png"} height={50} width={50} alt='presure-logo' />
                <p className='text-sm'>Presure</p>
                <h4 className='font-semibold'>{weatherDatas?.main.pressure}mb</h4>
              </div>
              <div className='rounded-2xl bg-white px-2 py-2 col-span-1 flex flex-col items-center'>
                <Image src={"https://img.icons8.com/stickers/100/dew-point.png"} height={50} width={50} alt='humadity-logo' />
                <p className='text-sm'>Humadity</p>
                <h4 className='font-semibold'>{weatherDatas?.main.humidity}%</h4>
              </div>
              <div className='rounded-2xl bg-green-200 px-2 py-2 col-span-1 flex flex-col items-center'>
                <Image src={"https://img.icons8.com/stickers/100/visible.png"} height={50} width={50} alt='visibility-logo' />
                <p className='text-sm'>Visibility</p>
                <h4 className='font-semibold'>{(weatherDatas?.visibility!) / 1000} km</h4>
              </div>
              <div className='rounded-2xl bg-sky-600 text-white px-2 py-2 col-span-1 flex flex-col items-center'>
                <Image src={"https://img.icons8.com/stickers/100/cloud--v1.png"} height={50} width={50} alt='cloud-logo' />
                <p className='text-sm'>Cloudiness</p>
                <h4 className='font-semibold'>{weatherDatas?.clouds.all}%</h4>
              </div>
            </div>

          </div>

          <div className='md:col-span-2 card bg-green-200 flex flex-col'>
            <div className='flex flex-row'>
              <h3 className='text-2xl font-bold'>How is the temperature today?</h3>
            </div>
            <div>
              <div className='chart-container mt-8 w-full h-24 px-10'>
                <Line data={chartData} options={chartOptions} />
              </div>
              <div className='grid grid-cols-4 justify-items-center text-center rounded-2xl text-sm'>
                <div>
                  <div className='py-2 px-2 w-fit'>
                    <p className='font-semibold'>Morning</p>
                    <h6 className=''>{chartData.datasets[0].data[0]}&deg;C</h6>
                  </div>
                </div>
                <div>
                  <div className='py-2 px-2 w-fit'>
                    <p className='font-semibold'>Afternoon</p>
                    <h6 className=''>{chartData.datasets[0].data[1]}&deg;C</h6>
                  </div>
                </div>
                <div>
                  <div className='py-2 px-2 w-fit '>
                    <p className='font-semibold'>Evening</p>
                    <h6 className=''>{chartData.datasets[0].data[2]}&deg;C</h6>
                  </div>
                </div>
                <div>
                  <div className='py-2 px-2 w-fit'>
                    <p className='font-semibold'>Night</p>
                    <h6 className=''>{chartData.datasets[0].data[3]}&deg;C</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='card md:col-span-2 bg-orange-200'>
            <div className='flex flex-row'>
              <h3 className='text-xl font-bold'>Tomorrow</h3>
            </div>
            <div className='mt-8'>
              <h2 className='text-5xl font-semibold'>22&deg;C</h2>
              <p>Rainy</p>
            </div>
          </div>
        </div>
      </div>

      <div className='w-screen md:w-2/5 xl:w-1/3 bg-white md:bg-zinc-100 md:min-h-screen px-4 py-4 mt-16 md:mt-0'>
        <div className='flex justify-end'>
          <div className='border border-slate-400 bg-white rounded-full px-4 py-2 flex w-full'>
            <Image src={"https://img.icons8.com/stickers/100/search.png"} height={25} width={25} alt='searchLogo' />
            <input type='text' id='searchlogo' name='searchlogo' placeholder='Search City' className='ms-4 w-full text-md' />
          </div>
        </div>

        <div className='mt-8 mb-4'>
          <div className='flex flex-row items-center'>
            <div><Image src={"https://img.icons8.com/stickers/100/marker.png"} height={25} width={25} alt='locationLogo' /></div>
            <h1 className='text-lg ms-2 font-semibold'>{weatherDatas?.name}, {weatherDatas?.sys.country}</h1>
          </div>
        </div>

        <div className='border-y w-full border-slate-400 mb-4'></div>

        <h2 className='text-3xl font-bold'>Current Weather</h2>

        <div className='mt-6'>
          <div className='flex items-center'>
            <h2 className='text-6xl font-semibold'>{weatherDatas?.main.temp}&deg;C</h2>
            <div className='rounded-xl bg-green-300 text-sm text-black px-2 py-1 ms-2 font-semibold'>
              {weatherDatas?.main.feels_like}&deg;C
            </div>
          </div>

          <div className='flex flex-col mt-4'>
            <Image src={"https://img.icons8.com/stickers/100/partly-cloudy-day.png"} height={100} width={100} alt='weather-logo' />
            <p className='font-semibold'>{weatherDatas?.weather[0].description}</p>
          </div>
        </div>

        <div className='flex justify-between mt-8'>
          <h3 className='text-lg font-semibold'>Hourly Weather</h3>
        </div>

        <div className='grid grid-cols-5 gap-2 text-center text-sm justify-items-center mt-2'>
          <div className='rounded-2xl bg-white px-2 py-2 flex flex-col items-center w-full'>
            <p>05 AM</p>
            <Image src={"https://img.icons8.com/stickers/100/partly-cloudy-day.png"} height={40} width={40} alt='weather-logo' className='my-1' />
            <p className='font-bold'>24&deg;C</p>
          </div>
          <div className='rounded-2xl bg-white px-2 py-2 flex flex-col items-center w-full'>
            <p>06 AM</p>
            <Image src={"https://img.icons8.com/stickers/100/partly-cloudy-day.png"} height={40} width={40} alt='weather-logo' className='my-1' />
            <p className='font-bold'>24&deg;C</p>
          </div>
          <div className='rounded-2xl bg-white px-2 py-2 flex flex-col items-center w-full'>
            <p>07 AM</p>
            <Image src={"https://img.icons8.com/stickers/100/partly-cloudy-day.png"} height={40} width={40} alt='weather-logo' className='my-1' />
            <p className='font-bold'>24&deg;C</p>
          </div>
          <div className='rounded-2xl bg-white px-2 py-2 flex flex-col items-center w-full'>
            <p>08 AM</p>
            <Image src={"https://img.icons8.com/stickers/100/partly-cloudy-day.png"} height={40} width={40} alt='weather-logo' className='my-1' />
            <p className='font-bold'>24&deg;C</p>
          </div>
          <div className='rounded-2xl bg-white px-2 py-2 flex flex-col items-center w-full'>
            <p>09 AM</p>
            <Image src={"https://img.icons8.com/stickers/100/partly-cloudy-day.png"} height={40} width={40} alt='weather-logo' className='my-1' />
            <p className='font-bold'>24&deg;C</p>
          </div>
        </div>
      </div>
    </main>
  )
}

function timeConv(unixtime: number): string {
  const date = new Date(unixtime * 1000)
  var hour = (Number(date.getHours()) < 10) ? "0" + date.getHours() : date.getHours()
  var minute = (Number(date.getMinutes()) < 10) ? "0" + date.getMinutes() : date.getMinutes()
  return hour + ":" + minute
}
