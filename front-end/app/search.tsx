'use client';

import { fetchData } from './page';
import { useState } from 'react';
export default function Search(){
    const [location, setLocation] = useState('');

    const search = async () => {
        const data = await fetchData(location)
        console.log('Data received:', data)
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
    </div>
}