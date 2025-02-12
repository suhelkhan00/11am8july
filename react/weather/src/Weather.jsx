import React, { useEffect, useState } from 'react';

export const Weather = () => {
  const [cityname, setCityname] = useState('Jaipur');
  const [weatherData, setWeatherData] = useState(null);
  const api_key = "88b7bbad3797e79164113857f23445c0"; // Replace with your API key

  useEffect(() => {
    const fetchWeather = async () => {
      if (cityname) {
        try {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${api_key}&units=metric`
          );
          const data = await response.json();
          setWeatherData(data);
        } catch (error) {
          console.error("Error fetching weather data:", error);
        }
      }
    };

    fetchWeather();
  }, [cityname]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='bg-mainImg h-screen bg-cover flex justify-center items-center'>
      {/* Inner Container */}
      <div className='w-3/5 h-4/5 bg-transparent flex'>
        {/* Left Section */}
        <div className='w-1/2 bg-leftImg h-full bg-cover relative text-white'>
          <div className='text-3xl flex justify-end font-bold'>
            {weatherData?.name || "City"}
          </div>
          <div className='flex justify-between absolute bottom-0 text-3xl font-bold w-full'>
            <div className='ms-2 mb-2'>
              <p>Min: {weatherData?.main?.temp_min}°C</p>
              <p>Max: {weatherData?.main?.temp_max}°C</p>
            </div>
            <p className='mr-2'>{weatherData?.main?.temp}°C</p>
          </div>
        </div>

        {/* Right Section */}
        <div className='w-1/2 text-white'>
          <div>
            <form onSubmit={handleSubmit}>
              <input
                type='text'
                className='bg-transparent px-5 py-3 text-white border'
                value={cityname}
                onChange={(e) => setCityname(e.target.value)}
              />
           <button className="text-3xl text-black px-3 font-bold ml-2 pb-3 bg-slate-50 transform hover:scale-105 hover:bg-slate-200 hover:text-blue-600 transition-all duration-200 ease-in-out">Search</button>
          </form>
          </div>

          <div className='text-center mt-10'>
            <p className='font-bold text-4xl'>{weatherData?.main?.temp}°C</p>
            <p className='font-bold text-2xl'>{weatherData?.name}, {weatherData?.sys?.country}</p>
            <p className='font-bold text-xl'>{weatherData?.weather?.[0]?.main}</p>
          </div>

          {/* Weather Details */}
          <div className='flex justify-around text-white mt-14 border-b-2 mx-8'>
            <p>Visibility</p>
            <p>{weatherData?.visibility / 1000} km</p>
          </div>
          
          <div className='flex justify-around text-white mt-14 border-b-2 mx-8'>
            <p>Wind Speed</p>
            <p>{weatherData?.wind?.speed} km/h</p>
          </div>
          <div className='flex justify-around text-white mt-14 border-b-2 mx-8'>
            <p>Humidity</p>
            <p>{weatherData?.main?.humidity}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};
