import axios from 'axios';
import Search from './search';

export async function fetchData(location: string){
  var data = await axios.get(`http://127.0.0.1:5000/Fetch_Data/${location}`);
  return data.data;
}
export default function Home() {
  return (
    <div className="bg-white py-5">
      <header>
        <h1 className="text-black text-center text-3xl">Weather Search</h1>
      </header>
      <div className="flex justify-center pt-3">
        <Search />
      </div>
    </div>
  );
}
