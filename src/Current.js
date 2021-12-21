import './assets/css/Current.css';
import React, { useState, useEffect } from 'react';
import { backgroundImageObj, formatDateAndTime, formatDescription, roundTemp, roundSpeed} from './globalDeclarations.js';
import Error from './Error.js';
import { WiHumidity, WiWindDeg } from 'react-icons/wi';
import { BsClouds } from 'react-icons/bs';
import { SiRainmeter } from 'react-icons/si';

function Current({search, passInfo}) {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);

    useEffect(() => {
        
        fetch("https://api.openweathermap.org/data/2.5/weather?" + search + "&units=metric&lang=en&appid=a47d813909379619933fa6f22cd9bfd7")
        .then(res => res.json())
        .then((result) => {
            setData([...data, result]);
            console.log(result);
        })
        .catch((err) => {
            setError(err);
        })
        .finally(() => {
            setLoading(false);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    if (loading) {
        return null;
    } else if (error || !Array.isArray(data)) {
        return (<Error type="fetch-error" log={null}/>);
    } else if (data[0].cod !== 200) {
        return (<Error type="api-error" log={data[0]}/>);
    } else {
        const styleDay = {
            backgroundImage: "url(" + backgroundImageObj[data[0].weather[0].icon] + ")",
            backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover",
            color: "black"
        };
        const nightDay = {
            backgroundImage: "url(" + backgroundImageObj[data[0].weather[0].icon] + ")",
            backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover",
            color: "white"
        };
        return (
            <div id="current">
                <div id="current-title" className="d-flex">
                    <h4>Weather Now in {data[0].name}, {data[0].sys.country}</h4>
                </div>
                <div id="current-content" style={/d$/.test(data[0].weather[0].icon) ? styleDay : nightDay} onLoad={() => passInfo(search, data[0].name, data[0].sys.country, data[0].coord.lat, data[0].coord.lon)}>
                    <div id="current-header">
                        <p id="current-description">{formatDescription(data[0].weather[0].description)}</p>
                        <p id="current-time">{formatDateAndTime("date+time", null, data[0].timezone)}</p>
                    </div>
                    <div id="current-img-temp" className="d-flex">
                        <img src={"https://openweathermap.org/img/wn/" + data[0].weather[0].icon + "@2x.png"} alt={"icon" + data[0].weather[0].icon}/>
                        <h1>{roundTemp(data[0].main.temp)} °C</h1>
                        <p>feels like {roundTemp(data[0].main.feels_like)} °C</p>
                    </div>
                    <div id="current-conditions" className="d-flex flex-column align-items-center">
                        <div id="humidity-wind" className="d-flex">
                            <p id="humidity-wind-one"><WiHumidity className="current-icon"/>Humidity: {data[0].main.humidity} %</p>
                            <p id="humidity-wind-two"><WiWindDeg className="current-icon" style={{transform: "rotate(" + (data[0].wind.deg - 180) + "deg)"}}/>Wind: {roundSpeed(data[0].wind.speed)} km/h</p>
                        </div>
                        <div id="clouds-rain" className="d-flex">
                            <p id="clouds-rain-one"><BsClouds className="current-icon"/>Clouds: {data[0].clouds.all} %</p>
                            <p id="clouds-rain-two"><SiRainmeter className="current-icon"/>Precipitation: {data[0].rain ? data[0].rain["1h"] : "0"} mm</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default Current;