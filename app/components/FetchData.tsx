import { Dispatch, SetStateAction } from "react"
import WeatherData from "../interfaces/WeatherData"
import { SearchCityData } from "../interfaces/Location"


export async function FetchWeatherDataByCity(city: String, setIsLoading: Dispatch<SetStateAction<Boolean>>, setWeatherDatas: Dispatch<SetStateAction<WeatherData | undefined>>) {
    const abortCont = new AbortController()

    await fetch(`${process.env.NEXT_PUBLIC_API_URL}forecast.json?key=${process.env.NEXT_PUBLIC_API_KEY}&q=${city}&days=5&aqi=yes&alerts=no`, { signal: abortCont.signal })
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

    return () => {
        abortCont.abort()
    }
}

export async function FetchWeatherCurrentLoc(setIsLoading: Dispatch<SetStateAction<Boolean>>, setWeatherDatas: Dispatch<SetStateAction<WeatherData | undefined>>) {
    const abortCont = new AbortController()

    await fetch(`${process.env.NEXT_PUBLIC_API_URL}ip.json?key=${process.env.NEXT_PUBLIC_API_KEY}&q=auto:ip`, { signal: abortCont.signal })
        .then(res => {
            return res.json()
        })
        .then(data => {
            FetchWeatherDataByCity(data.city, setIsLoading, setWeatherDatas)
        })
        .catch((err) => {
            console.log(err.message)
        })

    return () => {
        abortCont.abort()
    }
}

export async function FetchSearchCity(keyword: String, setCityQuery: Dispatch<SetStateAction<SearchCityData[] | undefined>>) {
    const abortCont = new AbortController()

    await fetch(`${process.env.NEXT_PUBLIC_API_URL}search.json?key=${process.env.NEXT_PUBLIC_API_KEY}&q=${keyword}`, { signal: abortCont.signal })
        .then(res => {
            return res.json()
        })
        .then(data => {
            setCityQuery(data)
        })
        .catch((err) => {
            console.log(err.message)
        })

    return () => abortCont.abort()
}
