import React from 'react';

export default function UserCard({ name,  age, location, avatarURL }) {
  return (
    <div className="flex flex-col items-center justify-center p-6 rounded-lg shadow-md w-full max-w-xs">
      <img 
        src={avatarURL} 
        alt="Doe" 
        className="w-[120px] h-[120px] rounded-full mb-4" 
      />
      <h2 className="text-4xl font-semibold text-white whitespace-nowrap">👤{name}</h2>
      <h3 className="text-white">📍 {location}</h3>
      <h3 className="text-white mt-2 ">🎂 Age: {age}</h3>
    </div>
  );
}
