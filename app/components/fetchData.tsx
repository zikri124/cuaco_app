// import { useEffect } from "react"
// import WeatherData from "../interfaces/WeatherData"

// const useFetch = (setDatas) => {
//     useEffect(() => {
//         const lat: number = -7.9447219
//         const lon: number = 112.6050011
//         const appId: string = '2f10890dd132b12d5be2a50f2743c03e'

//         fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=' + appId)
//             .then(res => {
//                 return res.json()
//             })
//             .then(data => {
//                 const datas: WeatherData = data
//                 setDatas(datas)
//                 console.log(datas)
//             })


//     }), [setDatas]

//     return
// }

// export {
//     useFetch
// }