import React, { useEffect, useState } from 'react'

export const Weather = () => {

  const [cityname,setCityname]= useState('jaipur')

  useState()

  const api_key="9444991efa8e235d4c3ee2f0ff893fbc";
   const url=`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${api_key}&units=metrics`;

   useEffect(()=>{
    if(cityname){
   fetch(url).then((res)=>{return res.json()}).then((data)=>{
    console.log(data)
   })
    }
   })

 
  const handleSubmit=(e)=>{
    e.preventDefault()
  }
  
  return (
    <>
    <div className='bg-mainImg h-screen bg-cover flex justify-center items-center'>
     { /* inner */}
    < div className='w-3/5 h-4/5 bg-transparent flex'>
    {/* left */}
    <div className='w-1/2 bg-leftImg h-full bg-cover relative'>
     <div className='text-3xl flex justify-end font-bold'>cityname</div>
     <div className='flex justify-between absolute bottom-0 text-3xl font-bold text-white w-full'>
      <div className='ms-2 mb-2'>
        <p>34.43</p>
        <p>43.55</p>
      </div>
      <p className='relative right-0 mr-2 '>25.5</p>
     </div>
    </div>
    {/* right */}
    <div className='w-1/2'>
    <div >
      <form onSubmit={handleSubmit}>
    <input type='text'className='bg-transparent px-5 py-3'value={cityname} onChange={(e)=>{setCityname(e.target.value)}}/>
    <button className='text-3xl font-bold '>Search</button>
    </form>
       
    </div>
   <div className='text-center mt-10'>
    <p className='font-bold '>25.5</p>
    <p className='font-bold '>Jaipur,IN</p>
    <p className='font-bold '>cloud</p>
   </div>
   <div className='flex justify-around text-white mt-14 border-b-2 mx-8'>
    <p>Visibility</p>
    <p>10km</p>
   </div>
   <div className='flex justify-around text-white mt-14 border-b-2 mx-8'>
    <p>Wind Speed</p>
    <p>10km/h</p>
   </div>
   <div className='flex justify-around text-white mt-14 border-b-2 mx-8'>
    <p>Humidity</p>
    <p>30%</p>
   </div>
    </div>
    </div>
    </div>
    </>
  )
}
