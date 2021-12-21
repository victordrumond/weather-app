import './assets/css/SearchAndDisplay.css';
import React, { useState, useEffect } from 'react';
import InfoButton from './InfoButton.js';
import Current from './Current.js';
import LiveMap from './LiveMap.js';
import Forecast from './Forecast.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function SearchAndDisplay() {

    const [loading, setLoading] = useState(true);
    const [userLocation, setUserLocation] = useState("");
    const [firstLoad, setFirstLoad] = useState(true);

    useEffect(() => {

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setUserLocation("lat=" + position.coords.latitude + "&lon=" + position.coords.longitude);
                setLoading(false);
            }, () => {
                setUserLocation("lat=51.5085&lon=-0.1257");
                setLoading(false)
            }, {enableHighAccuracy: false, maximumAge: Infinity, timeout: 5000});
        };
    }, []);

    const [searchInput, setSearchInput] = useState("");
    const [searchFor, setSearchFor] = useState(userLocation);
    const [infoReady, setInfoReady] = useState(false);
    const [currentLocations, setCurrentLocations] = useState([]);

    const searchForLocation = () => {
        setSearchFor("q=" + searchInput);
        setFirstLoad(false);
    };

    const passInfo = (search, name, country, lat, lon) => {
        setCurrentLocations({"searched_for": search, "name": name, "country": country, "lat": lat, "lon": lon});
        setInfoReady(true);
    };

    if (loading) {
        return null;
    } else {
        return (
            <div id="results-container" className="d-flex flex-column">
                <div id="search-wrapper" className="d-flex">
                    <InfoButton/>
                    <div className="input-group">
                        <div className="form-outline">
                            <input 
                                className="form-control"
                                type="text"
                                placeholder="Search location"
                                value={searchInput}
                                onInput={e => setSearchInput(e.target.value)}
                            />
                        </div>
                        <button className="btn btn-primary search-btn" type="button" onClick={searchForLocation}>
                            <FontAwesomeIcon icon={faSearch}/>
                        </button>
                    </div>
                </div>
                <div id="current-livemap" className="d-flex justify-content-between">
                    <div id="current-wrapper">
                        <Current 
                            key={searchFor}
                            search={firstLoad ? userLocation : searchFor}
                            passInfo={passInfo}
                        />
                    </div>
                    <div id="map-wrapper">
                        {infoReady &&
                            <LiveMap
                                name={currentLocations["name"]}
                                country={currentLocations["country"]}
                                lat={currentLocations["lat"]}
                                lon={currentLocations["lon"]}
                            />
                        }
                    </div>
                </div>
                <div id="forecast-wrapper">
                    {infoReady &&
                        <Forecast
                            name={currentLocations["name"]}
                            country={currentLocations["country"]}
                            lat={currentLocations["lat"]}
                            lon={currentLocations["lon"]}
                        />
                    }
                </div>
            </div>
        );
    };
};

export default SearchAndDisplay;