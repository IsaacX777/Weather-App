'use client';

import { fetchData } from './page';
import { useState } from 'react';
export default function Search(){
    const [location, setLocation] = useState('');
    const [weatherData, setWeatherData] = useState<any>(null);
    const [error, setError] = useState('');

    const search = async () => {
        try{
            const data = await fetchData(location)
            console.log('Data received:', data)
            setWeatherData(data);
            setError('');
        }
        catch{
            setError('Please enter a valid location.');
            setWeatherData(null);
        }
    };

    return <div>
        <input 
        type="text" 
        placeholder="Search for a city:" 
        className="text-left rounded-xl border-2 text-black px-4 py-2"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        />
        <button onClick={search} type="button" className="text-black px-4 bg-blue-400 rounded-lg ml-2 py-2">
            submit
        </button>

        {error && <p className="text-red-500 pt-5">{error}</p>}

        {weatherData && (
            <div className='pt-5 text-justified'>
                <p className='text-black'>Temperature: {weatherData.currentConditions.temp} °C</p>
                <p className='text-black'>Conditions: {weatherData.currentConditions.conditions}</p>
                <p className='text-black'>Humidity: {weatherData.currentConditions.humidity}%</p>
                <p className='text-black'>Precipitation Chance: {weatherData.currentConditions.precipprob}%</p>
                <p className='text-black'>Wind Speed: {weatherData.currentConditions.windspeed} km/hr</p>
            </div>
        )}
    </div>
}