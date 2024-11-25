import React from 'react';
import { FaUserPlus, FaDesktop, FaFlagCheckered, FaRedo, FaChartBar, FaUserSecret } from 'react-icons/fa';
import { FiTarget } from 'react-icons/fi';
import colors from '../libs/colors';

const Feature = () => {
    
    const features = [
        {
          icon: <FaUserPlus size={32} className="text-blue-500" />,
          title: "Sign Up and Integrate",
          description: "Create an account and connect your LeetCode and GeeksforGeeks profiles. Sync your progress automatically in one place.",
        },
        {
          icon: <FaDesktop size={32} className="text-green-500" />,
          title: "Unified Dashboard",
          description: "Access a unified dashboard that categorizes problems by topic and platform. Check out daily challenges and revisit solved problems.",
        },
        {
          icon: <FiTarget size={32} className="text-yellow-500" />,
          title: "Daily Challenges",
          description: "Take on daily challenges from LeetCode and GFG directly from your dashboard. Click and solve them on the respective platform.",
        },
        {
          icon: <FaFlagCheckered size={32} className="text-red-500" />,
          title: "Track Your Streaks",
          description: "Solve at least one problem daily to maintain your streak. Get reminders to stay consistent and improve your coding habits.",
        },
        {
          icon: <FaRedo size={32} className="text-purple-500" />,
          title: "Revisit and Review",
          description: "Revisit challenging problems, retry past ones, and star-mark important problems for easy access whenever you need.",
        },
        {
          icon: <FaUserSecret size={32} className="text-indigo-500" />,
          title: "Analytics based Personality",
          description: "View interactive analytics of your coding progress and unlock a unique coding personality based on your milestones.",
        },
      ];
      

  return (
    <div className="bg-gray-50 py-16 mt-36" style={{ 
        backgroundColor: colors.deepSpaceGray,
      }}>
      <div className="container mx-auto px-6">
        <h1 className="text-6xl font-extrabold tracking-tighter text-center text-gray-800 mb-10"style={{ 
                color: colors.cyberLime
              }}>Features</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 shadow-lg rounded-lg flex flex-col items-center text-center hover:shadow-xl transition-shadow"
              style={{backgroundColor: colors.softCharcoal}}
            >
              <div className="mb-4">{feature.icon}</div>
              <h2 className="text-xl font-semibold text-gray-300">{feature.title}</h2>
              <p className="text-gray-500 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;
