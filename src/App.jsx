import { useState } from 'react';
import './App.css';
import UserCard from './UserCard';

function App() {
  const [visible, setVisible] = useState(true);

  const handleUser = () => {
    setVisible(prev => !prev);
  };

  return (
    <div className=" bg-gray-800 flex items-center justify-center">
      <div className="w-full max-w-xs flex flex-col items-center space-y-6 p-6 bg-gray-950 shadow-md rounded-lg border border-gray-800">
        <button 
          onClick={handleUser} 
          className="px-4 py-2 bg-lime-500 text-white rounded hover:bg-lime-400 transition"
        >
          {visible ? 'Hide' : 'Show'}
        </button>

        {visible && (
          <UserCard 
            name="Jane Doe"  
            location="New York City" 
            age="28"
            avatarURL="./src/assets/picture.jpg" 
          />
        )}
      </div>
    </div>
  );
}

export default App;
