import './assets/css/Daily.css';
import { backgroundImageObj, formatDateAndTime, formatDescription, roundTemp, roundSpeed, roundProb} from './globalDeclarations.js';
import { BsThermometerHigh, BsThermometerLow, BsFillCloudRainFill, BsWind, BsSunrise, BsSunset } from 'react-icons/bs';

function Daily({date, offset, description, icon, min_temp, max_temp, rain, wind, sunrise, sunset}) {

    return (
        <div id="daily" style={{backgroundImage: "url(" + backgroundImageObj[icon] + ")", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", color: "black"}}>
            <p id="daily-date">{formatDateAndTime("date", date, offset)}</p>
            <div id="img-description-box">
                <img src={"http://openweathermap.org/img/wn/" + icon + "@2x.png"} alt={"icon" + icon}/>
                <div id="daily-description" className="d-flex">
                    <p>{formatDescription(description)}</p>  
                </div>
            </div>
            <div id="temp-box" className="d-flex">
                <div id="max-temp" className="d-flex">
                    <BsThermometerHigh className="daily-icon"/>
                    {window.innerWidth > 768
                    ? <p>Max: {roundTemp(max_temp)} °C</p>
                    : <p>{roundTemp(max_temp)} °C</p>
                    }
                </div>
                <div id="min-temp" className="d-flex">
                    <BsThermometerLow className="daily-icon"/>
                    {window.innerWidth > 768
                    ? <p>Min: {roundTemp(min_temp)} °C</p>
                    : <p>{roundTemp(min_temp)} °C</p>
                    }
                </div>
            </div>
            <div id="rain-wind-box" className="d-flex">
                <div id="rain" className="d-flex">
                    <BsFillCloudRainFill className="daily-icon"/>
                    {window.innerWidth > 768
                    ? <p>Rain: {roundProb(rain)} %</p>
                    : <p>{roundProb(rain)} %</p>
                    }
                </div>
                <div id="wind" className="d-flex">
                    <BsWind className="daily-icon"/>
                    {window.innerWidth > 768
                    ? <p>Wind: {roundSpeed(wind)} km/h</p>
                    : <p>{roundSpeed(wind)} km/h</p>
                    }
                </div>
            </div>
            <div id="sun-box" className="d-flex">
                <div id="sunrise" className="d-flex">
                    <BsSunrise className="daily-icon"/> 
                    {window.innerWidth > 768
                    ? <p>Sunrise: {formatDateAndTime("time", sunrise, offset)}</p>
                    : <p>{formatDateAndTime("time", sunrise, offset)}</p>
                    }
                </div>
                <div id="sunset" className="d-flex">
                    <BsSunset className="daily-icon"/>
                    {window.innerWidth > 768
                    ? <p>Sunset: {formatDateAndTime("time", sunset, offset)}</p>
                    : <p>{formatDateAndTime("time", sunset, offset)}</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default Daily;