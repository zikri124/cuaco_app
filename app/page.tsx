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
import { Line, Bar } from "react-chartjs-2";

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
        backgroundColor: "#fed7aa",
        tension: 0.5,
        borderColor: "#fb923c",
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

  return (
    <main className="flex flex-wrap min-h-screen">
      <div className='w-screen md:w-3/5 xl:w-2/3 h-fit px-4 order-last md:order-first mt-0 md:mt-16 pb-4'>
        <div className='grid grid-cols-1 lg:grid-cols-6 gap-4'>
          <div className='card md:col-span-3 bg-orange-300 flex flex-col justify-between'>
            <div className='flex flex-row items-center'>
              <div className='bg-white rounded-full w-12 h-12 me-4'>

              </div>
              <div>
                <h3 className='font-bold text-lg'>Weather</h3>
                <p className='text-sm'>Current Weather</p>
              </div>
            </div>
            <div className='mt-8'>
              <h2 className='text-5xl font-semibold'>22&deg;C</h2>
              <p>Partly Cloudy</p>
            </div>
            <div className='mt-8 text-center grid grid-cols-3 gap-4 md:gap-2'>
              <div className='rounded-2xl bg-blue-950 text-white px-2 py-4'>
                <p className='text-sm'>Presure</p>
                <h4 className='font-semibold'>800mb</h4>
              </div>
              <div className='rounded-2xl bg-green-300 px-2 py-4'>
                <p className='text-sm'>Visibility</p>
                <h4 className='font-semibold'>4.3 km</h4>
              </div>
              <div className='rounded-2xl bg-white px-2 py-4'>
                <p className='text-sm'>Humadity</p>
                <h4 className='font-semibold'>87%</h4>
              </div>
            </div>
          </div>

          <div className='card md:col-span-3 bg-sky-300 flex flex-col justify-between'>
            <div className='flex flex-row items-center'>
              <div className='bg-white rounded-full w-12 h-12 me-4'>

              </div>
              <div>
                <h3 className='text-xl font-bold'>Air Quality</h3>
                <p className='text-sm'>Main pollutan : PM 2.5</p>
              </div>
            </div>
            <div>
              <div className='flex flex-row mt-8'>
                <h2 className='text-5xl font-semibold'>390</h2>
                <div className='rounded-2xl bg-green-300 px-2 py-1 h-fit ms-2'>
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
              <div className='grid grid-cols-10 bg-zinc-200 rounded-full mt-1'>
                <div className='bg-green-400 h-2 rounded-full col-span-2'>
                </div>
              </div>
            </div>
          </div>

          <div className='md:col-span-4'>
            <div className='flex flex-row'>
              <h3 className='text-2xl font-semibold'>How&apos;s the temperature today?</h3>
            </div>
            <div className='chart-container mt-8 w-full h-36 px-16'>
              <Line data={chartData} options={chartOptions} />
            </div>
            <div className='grid grid-cols-4 justify-items-center text-center border-2 rounded-2xl mt-4 text-sm'>
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
          <div className='card md:col-span-2 bg-green-300'>
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
            <Image src={"https://img.icons8.com/ios/150/search--v1.png"} height={25} width={25} alt='searchLogo' />
            <input type='text' id='searchlogo' name='searchlogo' placeholder='Search City' className='ms-4 w-full text-md' />
          </div>
        </div>

        <div className='mt-8 mb-4'>
          <div className='flex flex-row items-center'>
            <div><Image src={"https://img.icons8.com/ios/100/marker--v1.png"} height={20} width={20} alt='locationLogo' /></div>
            <h1 className='text-lg ms-2 font-semibold'>Agam, Indonesia</h1>
          </div>
        </div>

        <div className='border-y w-full border-slate-400 mb-4'></div>

        <h2 className='text-3xl font-bold'>Sun</h2>

        <div className='px-8 my-8'>
          <div className='flex items-center px-4'>
            <div className='flex-none rounded-full bg-yellow-400 h-8 w-8'></div>
            <div className='flex-grow w-full border-2 border-dashed border-slate-300'></div>
            <div className='flex-none rounded-full bg-orange-400 h-8 w-8'></div>
          </div>
          <div className='flex justify-between mt-2 text-sm text-center'>
            <div>
              <p className='font-semibold'>Sunrise</p>
              <p>06.00 AM</p>
            </div>
            <div>
              <p className='font-semibold'>Sunset</p>
              <p>06.15 PM</p>
            </div>
          </div>
        </div>

        <div className='card bg-blue-950 text-white p-4 flex items-center mt-4 '>
          <div className='rounded-full bg-yellow-400 h-12 w-12 me-4'>

          </div>
          <div>
            <div className='flex items-center'>
              <h2 className='text-2xl font-semibold'>20 UVI</h2>
              <div className='rounded-2xl bg-green-300 text-sm text-black px-2 ms-4'>
                <p>Moderate</p>
              </div>
            </div>
            <p className='text-sm'>Moderate risk of from UV rays</p>
          </div>
        </div>
      </div>
    </main>
  )
}
