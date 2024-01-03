import React from 'react';

export default function VideoTitle({ title, overview }) {
  return (
    <div className='w-screen aspect-video pt-[20%] px-20 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-5xl font-bold w-2/4'>{title}</h1>
      <p className='text-lg py-6 w-1/4'>{overview}</p>
      <div>
        <button className='bg-white text-black px-8 py-2 mr-2  rounded-md hover:opacity-80'>Play</button>
        <button className='bg-gray-500 text-white px-4 py-2  rounded-md'>More Info</button>
      </div>
    </div>
  );
}
