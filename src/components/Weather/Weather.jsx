import './Weather.css';
import { useState, useEffect } from 'react';

import kelvinToCelsius from '../../utils/convertKelvinToCelcius';
import getWeather from '../../services/weather';


export default function Weather() {
    const [weatherData, setWeatherData] = useState(null);
    const [userInput, setUserInput] = useState('');

    useEffect(() => {
        async function fetchWeather() {
            const data = await getWeather(userInput);
            if (data) {
                setWeatherData(data);
            }
        }

        fetchWeather();
    }, [userInput]);

 

    return (
        <div className='weather-container'>
            <div className='weather-header'>
                <span className="material-symbols-outlined">
                    cloud
                </span>
            </div>
            <div className='weather-info'>
                <h3>{weatherData ? weatherData.name : 'Joinville'}</h3>
                {weatherData ? (
                    <>
                        <h1>{kelvinToCelsius(weatherData.main.temp).toFixed(1)}°C</h1>
                    </>
                ) : <h1>20°C</h1>}
            </div>
            <input placeholder='Digite sua cidade aqui' value={userInput} onChange={(event) => setUserInput(event.target.value)}/>
        </div>
    );
}
