"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var util_1 = require("../util");
var react_1 = require("react");
function CurrentWeather(_a) {
    var currentData = _a.currentData, additionalData = _a.additionalData, location = _a.location;
    var _b = react_1.useState(), imageBg = _b[0], setImageBg = _b[1];
    react_1.useEffect(function () {
        function getIsDay() {
            if (currentData.is_day == 1) {
                return "bg-[url('https://i.ibb.co/yX71vDv/day.jpg')]";
            }
            else {
                return "bg-[url('https://i.ibb.co/mGTKjXf/night.jpg')]";
            }
        }
        setImageBg(getIsDay());
    }, [currentData]);
    return (React.createElement("div", { className: 'py-6 flex-grow flex flex-col items-start justify-end' },
        React.createElement("div", { className: "py-12 px-4 gap-2 rounded-2xl mb-6 " + imageBg + " bg-cover flex flex-col justify-center items-center w-full flex-grow" },
            React.createElement("div", { className: "bg-sky-800/60 rounded-2xl flex flex-col justify-center items-center px-6 py-4 w-full" },
                React.createElement(image_1["default"], { src: util_1.getWeatherImage(currentData.condition.code), height: 95, width: 95, alt: 'weather-logo' }),
                React.createElement("p", { className: 'text-2xl text-white font-bold' }, currentData.condition.text))),
        React.createElement("div", { className: "flex flex-col gap-6" },
            React.createElement("div", { className: 'w-fit' },
                React.createElement("h1", { className: 'text-xl font-semibold' }, location.name),
                React.createElement("p", null,
                    location.region,
                    ", ",
                    location.country)),
            React.createElement("div", null,
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("h2", { className: 'text-8xl font-semibold' }, Math.floor(currentData.temp_c)),
                    React.createElement("p", { className: "text-5xl font-bold" }, "\u00B0C")),
                React.createElement("div", { className: 'text-black px-2 py-1 px-4 text-sm bg-sky-800 rounded-full text-white w-fit' },
                    "Feels Like ",
                    Math.floor(currentData.feelslike_c),
                    "\u00B0C")),
            React.createElement("div", null,
                React.createElement("p", { className: 'font-semibold' },
                    additionalData.chance_of_rain,
                    "% Rain Posibility"))),
        React.createElement("div", { className: 'text-center text-sm mt-6' },
            "Last Data Updated : ",
            currentData.last_updated)));
}
exports["default"] = CurrentWeather;
