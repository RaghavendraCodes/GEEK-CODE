import React, { useState } from 'react';
import { AtSign } from 'lucide-react';
import colors from '../libs/colors';

const UsernameInput = ({ platformLogo, platformName, username, setUsername }) => {
  // const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      console.log('Username:', username);
    }
  };

  return (
    <div className="bg-[#1E1E2F] rounded-lg p-8 w-full sm:w-96 md:w-[450px] shadow-lg space-y-6 mt-7">
      <div className="flex items-center gap-4 mb-6">
        {/* Platform logo and name side by side */}
        <div className="flex items-center gap-4">
          <img src={platformLogo} alt={platformName} />
          <h2 className="text-[#F5F5F7] text-xl font-medium">{platformName} Username</h2>
        </div>  
      </div>

      <form className="space-y-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full bg-[#2C2C3A] text-[#F5F5F7] rounded px-4 py-3 outline-none border border-transparent focus:border-[#d3ff44] transition-colors"
          placeholder="Enter username"
        />
        
        {/* <button
          type="submit"
          className="w-full bg-[#8E44FF] text-black rounded py-3 hover:bg-opacity-90 transition-opacity"
          style={{ backgroundColor: colors.cyberLime }}
        >
          Continue
        </button> */}
      </form>
    </div>
  );
};

export default UsernameInput;
