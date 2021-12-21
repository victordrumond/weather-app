import './assets/css/Forecast.css';
import React, { useState, useEffect } from 'react';
import Daily from './Daily.js';
import Alerts from './Alerts.js';
import Error from './Error.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';

function Forecast({name, country, lat, lon}) {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);
    const [alertBox, setAlertBox] = useState(false);

    useEffect(() => {

        fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=metric&lang=en&appid=a47d813909379619933fa6f22cd9bfd7")
        .then(res => res.json())
        .then((result) => {
            setData([result]);
            console.log(result);
        })
        .catch((err) => {
            setError(err);
        })
        .finally(() => {
            setLoading(false);
        });
    },[lat, lon]);

    const toggleAlert = () => {

        setAlertBox(!alertBox);
    };

    if (loading) {
        return null;
    } else if (error || !Array.isArray(data)) {
        return (<Error type="fetch-error" log={null}/>);
    } else {
        return (
            <div id="forecast">
                <div id="forecast-title" className="d-flex">
                    <h4>8-Day Weather Forecast for {name}, {country}</h4>
                    {data[0].hasOwnProperty("alerts") &&
                        <FontAwesomeIcon icon={faExclamation} id="faExclamation-icon" className="text-danger" onClick={toggleAlert}/>
                    }
                </div>
                <div id="daily-wrapper">
                    {data[0].daily.map((item, i) => (
                        <Daily 
                            key={i}
                            date={item.dt}
                            offset={data[0].timezone_offset}
                            description={item.weather[0].description}
                            icon={item.weather[0].icon}
                            min_temp={item.temp.min}
                            max_temp={item.temp.max}
                            rain={item.pop}
                            wind={item.wind_speed}
                            sunrise={item.sunrise}
                            sunset={item.sunset}
                        />
                    ))}
                </div>
                <div id="alerts-wrapper">
                    {alertBox &&
                        <Alerts
                            alerts={data[0].alerts}
                            name={name}
                            country={country}
                            offset={data[0].timezone_offset}
                            toggleAlert={toggleAlert}
                        />
                    }
                </div>
            </div>
        );
    };
};

export default Forecast;