import React, { useState, useEffect } from 'react';
import NavbarHome from '../components/NavbarHome';
import colors from '../libs/colors';
import UsernameInput from '../components/UsernameInput';
import leetCode from '../assets/lc.png';
import gfgLogo from '../assets/gfg.png';
import axios from 'axios';
import { useUser } from '@clerk/clerk-react';

const Home = () => {
  const [leetcodeUsername, setLeetcodeUsername] = useState('');
  const [gfgUsername, setGfgUsername] = useState('');
  const [isProfileConnected, setIsProfileConnected] = useState(false);

  // Username to display the name
  const { user } = useUser();
  const usernameGeek = user?.username;

  // Check persistent state on component load
  useEffect(() => {
    const profileStatus = localStorage.getItem('isProfileConnected');
    if (profileStatus === 'true') {
      setIsProfileConnected(true);
    }
  }, []);

  const handleSubmit = async () => {
    if (!leetcodeUsername || !gfgUsername) {
      alert('Please enter both usernames');
      return;
    }
    try {
      const response = await axios.post('http://localhost:8080/api/users', {
        usernameGeek,
        leetcodeUsername,
        gfgUsername,
      });
      console.log('User data submitted:', response.data);

      // Set persistent state
      localStorage.setItem('isProfileConnected', 'true');
      setIsProfileConnected(true);
      alert('User connected successfully!');
    } catch (error) {
      console.error('Error submitting user data:', error.message);
      alert('Failed to connect your profile. Try again later.');
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col scroll-smooth" style={{ backgroundColor: colors.deepSpaceGray }}>
        {/* Navbar */}
        <div>
          <NavbarHome />
        </div>

        {/* Main Content */}
        <div className="mt-28 flex flex-col justify-center items-center">
          {/* Header */}
          <div>
            <h1 className="text-6xl tracking-tighter font-bold mt-4" style={{ color: colors.offWhite }}>
              Welcome <span style={{ color: colors.steelGray }}>{user?.username}</span>
            </h1>
          </div>

          {!isProfileConnected ? (
            <>
              {/* Username Inputs */}
              <div className="flex space-x-10 mt-6">
                <UsernameInput
                  platformLogo={leetCode}
                  platformName="LeetCode"
                  username={leetcodeUsername}
                  setUsername={setLeetcodeUsername}
                />
                <UsernameInput
                  platformLogo={gfgLogo}
                  platformName="GFG"
                  username={gfgUsername}
                  setUsername={setGfgUsername}
                />
              </div>
              {/* Submit Button */}
              <div className="mt-6">
                <button
                  onClick={handleSubmit}
                  className="px-6 py-3 text-lg font-semibold rounded bg-[#8E44FF] hover:bg-[#7A39DD] text-white"
                >
                  Connect Profiles
                </button>
              </div>
              {/* Description */}
              <div>
                <h4
                  className="text-lg tracking-wide font-normal w-[50vw] text-center mt-12"
                  style={{ color: colors.steelGray }}
                >
                  Enter your LeetCode and GeeksforGeeks usernames to connect with your profile and access all your solved
                  questions in one place on the Home page and a personalized dashboard to get all your stats together of
                  both platforms combined with your current coding personality.
                </h4>
              </div>
            </>
          ) : (
            <div className="mt-12">
              <h2 className="text-xl text-gray-300">
                Your profiles are successfully connected! Enjoy the dashboard and coding journey.
              </h2>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
