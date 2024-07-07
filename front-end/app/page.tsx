import axios from 'axios';
import { useState } from 'react';

async function fetchData(location: string){
  var data = await axios.get(`http://127.0.0.1:5000/Fetch_Data/${location}`);
  return data.data;
}

export default function Home() {
  const [location, setLocation] = useState('');
  const search = async () => {
    const data = await fetchData(location)
    console.log('Data received:', data)
  };

  return (
    <div className="bg-white py-5">
      <header>
        <h1 className="text-black text-center text-3xl">Weather Search</h1>
      </header>
      <div className="flex justify-center pt-3">
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
    </div>
  );
}
