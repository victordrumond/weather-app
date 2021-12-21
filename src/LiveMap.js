import './assets/css/LiveMap.css';
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, LayersControl } from 'react-leaflet';

function LiveMap({name, country, lat, lon}) {
    
    const [position, setPosition] = useState([lat, lon]);
    const [map, setMap] = useState(null);

    useEffect(() => {

        setPosition([lat, lon]);

        if (map) {
            map.flyTo([lat, lon], 6)
        };

    },[map, lat, lon]);

    return (
        <div id="map">
            <div id="map-title" className="d-flex">
                <h4>Weather Map for {name}, {country}</h4>
            </div>
            <div id="map-content">
                <MapContainer center={position} zoom={6} scrollWheelZoom={false} whenCreated={setMap}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> | <a href="https://openweathermap.org">OpenWeather</a>'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <LayersControl position="topright">
                        <LayersControl.BaseLayer name="Precipitation" checked>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> | <a href="https://openweathermap.org">OpenWeather</a>'
                                url="https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=a47d813909379619933fa6f22cd9bfd7"
                            />
                        </LayersControl.BaseLayer>
                        <LayersControl.BaseLayer name="Temperature">
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> | <a href="https://openweathermap.org">OpenWeather</a>'
                                url="https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=a47d813909379619933fa6f22cd9bfd7"
                            />
                        </LayersControl.BaseLayer>
                        <LayersControl.BaseLayer name="Clouds">
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> | <a href="https://openweathermap.org">OpenWeather</a>'
                                url="https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=a47d813909379619933fa6f22cd9bfd7"
                            />
                        </LayersControl.BaseLayer>
                        <LayersControl.BaseLayer name="Wind Speed">
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> | <a href="https://openweathermap.org">OpenWeather</a>'
                                url="https://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=a47d813909379619933fa6f22cd9bfd7"
                            />
                        </LayersControl.BaseLayer>
                        <Marker position={position}></Marker>
                    </LayersControl>
                </MapContainer>
            </div>
        </div>
    );
};

export default LiveMap;