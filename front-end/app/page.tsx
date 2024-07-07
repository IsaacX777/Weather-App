import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white py-5">
      <header>
        <h1 className="text-black text-center text-3xl">Weather Search</h1>
      </header>
      <div className="flex justify-center pt-3">
        <input type="text" 
        placeholder="Search for a city:" 
        className="text-left rounded-xl border-2 text-black px-4 py-2"/>
        <button type="button" className="text-black px-4 bg-blue-400 rounded-lg ml-2 py-2">
          submit
        </button>
      </div>
    </div>
  );
}
