import WeatherCode from "./interfaces/WeatherCode"

const weatherCodeArray: WeatherCode[] = [
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

export function getWeatherImage(code:number): string {
    var image = ""

    weatherCodeArray.every(weatherCode => {
        if(weatherCode.code.includes(code)) {
            image = weatherCode.img
            return false
        }
        else {
            return true
        }
    })
    return image
}